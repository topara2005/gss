import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.service';
import { GetService } from './crud.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AirgroundService extends GetService {
  constructor(config: AppConfig, http: HttpClient) { 
    super(config.wACSCertificates, http);
  }
}