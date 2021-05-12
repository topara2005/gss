import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogToView } from '../../models/enums/ILogToView';
import { LogType } from '../../models/enums/ILogType';
import { INamedModel } from '../../models/NamedModel';
import { IHelicopterBase } from '../../models/IHelicopter';
import { IHCLog, IGSSLog, ILogBase, ILogFilterParams, IHCFilterParams, IGSSLogParams } from '../../models/ILogs';
import { Subscription } from 'rxjs/Subscription';
import { LogmanagementService } from '../../services/logmanagement.service';
import { HelicopterService } from '../../services/helicopter.service';
import { AppConfig } from '../../services/app-config.service';

@Component({
  selector: 'app-logmanagement',
  templateUrl: './logmanagement.component.html'
})
export class LogmanagementComponent implements OnInit, OnDestroy {
  public helicopterList: IHelicopterBase[];
  public selectedHelicopter?: number;
  public searchInProgress: boolean = false;
  public searchResult: ILogBase[];
  public errorMessages: string[];
  public filterParams: ILogFilterParams =  {
    from: new Date(),
    to: new Date(),
    logType: LogType.System
  };

  private getHCSubs: Subscription;
  private searchSubs: Subscription;
  private searchEndPoint: string = this.config.HelicopterLogs;
  private toView: LogToView;

  public get ToView(): LogToView {
    return this.toView;
  }

  public set ToView(value: LogToView) {
    this.searchEndPoint = (value == LogToView.Helicopters)
      ? this.config.HelicopterLogs
      : this.config.GSSLogs;

    this.searchResult = [];
    this.toView = value;
  }

  public get ValidRange(): boolean {
    let dateFrom: Date = new Date(this.filterParams.from.toLocaleDateString());
    let dateTo: Date = new Date(this.filterParams.to.toLocaleDateString());

    let valid: boolean = this.filterParams 
      && this.filterParams.from
      && this.filterParams.to
      && dateTo.getTime() >= dateFrom.getTime();

      return valid;
  }

  public get ValidHelicopter(): boolean {
    if(this.ToView == null || this.ToView == undefined){
      return true;
    }
    if(this.ToView == LogToView.GSS)
      return true;

    return this.selectedHelicopter != null;
  }

  public logsToView: INamedModel[] = [
    {
      id: 0,
      name: "H/C Logs"
    },
    {
      id: 1,
      name: "GSS Logs"
    }
  ];

  public logTypes: INamedModel[] = [
    {
      id: 0,
      name: "System"
    },
    {
      id: 1,
      name: "Security"
    }
  ];

  constructor(
    private searchService: LogmanagementService,
    private helicopterService: HelicopterService,
    private config: AppConfig) {
  }

  ngOnInit() {
    this.loadHelicopters();
  }

  public Search() {
    this.searchInProgress = true;
    this.searchService.ChangeEndPoint(this.searchEndPoint);
    let modelSearch: any = {
      to: this.filterParams.to.toLocaleDateString(),
      from: this.filterParams.from.toLocaleDateString(),
      logType: this.filterParams.logType
    };

    if(this.ToView == LogToView.Helicopters){
      modelSearch.helicopterId = this.selectedHelicopter;
    }

    this.searchSubs = this.searchService.Search(modelSearch)
      .subscribe(data => {
        this.searchResult = data;
        this.searchInProgress = false;
      }, (e: any) => {
        console.log(e);
        this.searchInProgress = false;
      });
  }

  ngOnDestroy() {
    if (this.searchSubs) {
      this.searchSubs.unsubscribe();
    }

    if (this.getHCSubs) {
      this.getHCSubs.unsubscribe();
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
}