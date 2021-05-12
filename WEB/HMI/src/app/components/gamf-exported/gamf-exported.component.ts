import { Component, OnInit, OnDestroy } from '@angular/core';
import { IExportedData, IExportedDataFilter} from '../../models/IGAMF';
import { Subscription } from 'rxjs/Subscription';
import { GamfService } from '../../services/gamf.service';

@Component({
  selector: 'app-gamf-exported',
  templateUrl: './gamf-exported.component.html',
  styleUrls: ['./gamf-exported.component.css']
})
export class GamfExportedComponent implements OnInit, OnDestroy {
  public filterParams: IExportedDataFilter = {
    destinationApplication: "",
    fileName: "",
    from: new Date(),
    to: new Date(),
    priority: "",
    fileType: "",
    destinationDomain: "",
    sourceApplication: ""
  };
  public searchResult: IExportedData[];
  public searchInProgress: boolean = false;

  public PrioritySelectItems: string[];
  public FileTypeSelectItems: string[];
  public TargetDomainSelectItems: string[];
  public TargetApplicationSelectItems: string[];
  
  public get ValidRange(): boolean {
    let dateFrom: Date = new Date(this.filterParams.from.toLocaleDateString());
    let dateTo: Date = new Date(this.filterParams.to.toLocaleDateString());

    let valid: boolean = this.filterParams 
      && this.filterParams.from
      && this.filterParams.to
      && dateTo.getTime() >= dateFrom.getTime();

      return valid;
  }

  private getSubs: Subscription;

  constructor(private service: GamfService ) { 
  }

  ngOnInit() {
    this.PrioritySelectItems = this.service.GetPriorityList();
    this.FileTypeSelectItems = this.service.GetFileTypeList();
    this.TargetDomainSelectItems = this.service.GetTargetDomainList();
    this.TargetApplicationSelectItems = this.service.GetTargetApplicationList();
  }

  ngOnDestroy(){
    if(this.getSubs){
      this.getSubs.unsubscribe();
    }
  }

  public Search(){
    this.searchInProgress = true;
    
    let modelSearch: any = {
      to: this.filterParams.to.toLocaleDateString(),
      from: this.filterParams.from.toLocaleDateString(),
      destinationApplication: this.filterParams.destinationApplication,
      fileName: this.filterParams.fileName,
      fileType: this.filterParams.fileType,
      priority: this.filterParams.priority,
      destinationDomain: this.filterParams.destinationDomain,
      sourceApplication: this.filterParams.sourceApplication
    };

    this.getSubs = this.service.Search(modelSearch)
      .subscribe(data => {
        this.searchResult = data;
        this.searchInProgress = false;
      }, (e: any) => {
        console.log(e);
        this.searchInProgress = false;
      });
  }
}
