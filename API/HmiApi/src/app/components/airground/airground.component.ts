import { Component, OnInit, OnDestroy } from '@angular/core';
import { AirgroundService } from '../../services/airground.service';
import { GSSCertificate, IwACSCertificate } from '../../models/IAirGroundKey';
import { CertificateToView } from '../../models/enums/ICertificateToView';
import { AppConfig } from '../../services/app-config.service';
import { Subscription } from 'rxjs/Subscription';
import { INamedModel } from '../../models/NamedModel';

@Component({
  selector: 'app-airground',
  templateUrl: './airground.component.html',
  styleUrls: ['./airground.component.css']
})
export class AirgroundComponent implements OnInit, OnDestroy {
  private getSubs: Subscription;
  public _certificateToView: CertificateToView = CertificateToView.wACS;
  private get certificateToView(){
    return this._certificateToView;
  }
  private set certificateToView(value: CertificateToView){
    this._certificateToView = value;
    this.certificateList = [];
  }
  public certificateList: IwACSCertificate[] | GSSCertificate[];
  public certficateSelectorItems: INamedModel[] = [
    {
      id: 0,
      name: 'wACS air-ground certificates'
    },
    {
      id: 1,
      name: 'GSS certificates'
    }
  ];

  constructor(private service: AirgroundService, private config: AppConfig) { }

  ngOnInit() {

  }

  public LoadCertificates(){
    let url: string = this.certificateToView == CertificateToView.GSS
      ? this.config.GSSCertificates : this.config.wACSCertificates;

      this.service.ChangeEndPoint(url);

      let callback = (data: IwACSCertificate[] | GSSCertificate[]) => {
        this.certificateList = data;
      };

      let errorCallback = (e: any) => console.log(e);

      if(this.certificateToView == CertificateToView.GSS){
        this.getSubs = this.service.GetList<GSSCertificate>()
          .subscribe(callback, errorCallback)
      }else{
        this.getSubs = this.service.GetList<IwACSCertificate>()
        .subscribe(callback, errorCallback)
      }
  }

  ngOnDestroy(){
    if(this.getSubs){
      this.getSubs.unsubscribe();
    }
  }
}