import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IHelicopterBase } from '../../models/IHelicopter';
import { IFileMetadata, ITransferStatusEntry } from '../../models/IGAMF';
import { GamfService } from '../../services/gamf.service';
import { HelicopterService } from '../../services/helicopter.service';
import { PollingService } from '../../services/polling.service';
import { HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { AppConfig } from '../../services/app-config.service';

@Component({
  selector: 'app-gamf-import',
  templateUrl: './gamf-import.component.html',
  styleUrls: ['./gamf-import.component.css']
})
export class GamfImportComponent implements OnInit, OnDestroy {
  public uploadProgress: number;
  public helicopterList: IHelicopterBase[];
  private _selectedHelicopter: IHelicopterBase;

  private selectedId: number;
  public get selectedHelicopter(): IHelicopterBase {

    if(this._selectedHelicopter){
      this.selectedId = this.selectedHelicopter.id;
      this.pollingSubs.unsubscribe();
      let url: string = this.config.FileStatus + "?helicopterId="+this.selectedHelicopter.id;
      this.pollingSubs = this.pollingService.Listening<ITransferStatusEntry>(url)
      .subscribe(d => {
        this.FileList = d;
      });
    }
    //this.selectedId = this._selectedHelicopter.id;
    return this._selectedHelicopter;
  }

  public PrioritySelectItems: string[];
  public FileTypeSelectItems: string[];
  public TargetDomainSelectItems: string[];
  public TargetApplicationSelectItems: string[];

  public uploadingFile: boolean = false;
  public FileList: ITransferStatusEntry[];
  public metadata: IFileMetadata = {
    destinationApplication: "",
    fileName: "",
    fileType: "",
    hCSerialNumber: "",
    hCType: "",
    priority: "",
    sourceApplication: "",
    helicopterId: 0
  };

  public file: File;
  public fileName: string;
  private getHCSubs: Subscription;
  private saveMetaSubs: Subscription;
  private pollingSubs: Subscription;

  constructor(
    private helicopterService: HelicopterService,
    private service: GamfService,
    private config: AppConfig,
    private pollingService: PollingService) { }

  ngOnInit() {
    this.PrioritySelectItems = this.service.GetPriorityList();
    this.FileTypeSelectItems = this.service.GetFileTypeList();
    this.TargetDomainSelectItems = this.service.GetTargetDomainList();
    this.TargetApplicationSelectItems = this.service.GetTargetApplicationList();
    this.loadHelicopters();
  }

  ngOnDestroy() {
    if (this.getHCSubs) {
      this.getHCSubs.unsubscribe();
    }

    if (this.saveMetaSubs) {
      this.saveMetaSubs.unsubscribe();
    }
    if (this.pollingSubs) {
      this.pollingSubs.unsubscribe();
    }
  }

  private loadHelicopters() {
    this.getHCSubs = this.helicopterService.GetList()
      .subscribe((data: IHelicopterBase[]) => {
        this.helicopterList = data;
      }, (e: any) => {
        console.log(e);
      });
  }

  public onSelectFiles(event: any) {
    console.log("file selected!");
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  Upload() {
    if (!this.file) {
      console.log("Please select a file first.");
      return;
    }

    if (!this.selectedHelicopter) {
      console.log('Please select an helicopter');
      return;
    }

    this.metadata.hCSerialNumber = this.selectedHelicopter.serialNumber;
    this.metadata.hCType = this.selectedHelicopter.type;
    this.metadata.fileName = this.file.name;
    this.metadata.helicopterId = this.selectedHelicopter.id;

    //Add validations for the metadata object here!
    this.service.ChangeEndPoint(this.config.UploadMeta);
    this.saveMetaSubs = this.service.SaveMetadata(this.metadata)
      .subscribe(() => {
        //if 200 OK Code, then upload file
        console.log("Metadata saved. Procced with uploading file...");
        console.log(`Start uploading file: ${this.file.name}`);
        this.uploadingFile = true;
        const req = new HttpRequest("POST", this.config.UploadFile + "?helicopterId=" + this.selectedHelicopter.id, this.file, { reportProgress: true });
        this.service.http.request(req).subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            if (event.total) {
              this.uploadProgress = Math.round(100 * event.loaded / event.total);
              console.log(`Uploading file: ${this.uploadProgress}% uploaded`);
            }
          } else if (event instanceof HttpResponse) {
            this.uploadProgress = 0;
            this.uploadingFile = false;
            console.log("File uploaded!");
          }
        });
      }, (e: any) => {
        console.log(e);
        this.uploadingFile = false;
        this.uploadProgress = 0;
      });
  }
}
