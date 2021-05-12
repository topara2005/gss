import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.service';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './crud.service';
import { ILogBase, IHCFilterParams } from './../models/ILogs';

@Injectable()
export class LogmanagementService extends SearchService<ILogBase> {
  constructor(config: AppConfig, http: HttpClient) {
    super(config.HelicopterLogs, http);
  }
}
