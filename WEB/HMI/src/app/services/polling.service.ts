import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.service';
import { SearchService, ISearchable } from './crud.service';
import { Observable } from 'rxjs';

@Injectable()
export class PollingService {
  private intervalTime: number = 5000;
  private timer = Observable.timer(0, this.intervalTime);

  constructor(private http: HttpClient) { }

  Listening<T>(url: string) {
    if(!url){
      throw new Error("The url is undefined");
    }

    return this.timer.flatMap(i=> this.http.get<T[]>(url));
  }
}