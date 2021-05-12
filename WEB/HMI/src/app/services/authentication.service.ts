import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { ILoginResult } from '../models/ILoginResult';
import { AppConfig } from './app-config.service';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';

export interface IAuthenticationService{}

@Injectable()
export class AuthenticationService {

  constructor(private config: AppConfig, 
    private http: HttpClient,
    private sessionService: SessionService ) { }

  Login(user:string, password: string){
    return this.http.post<ILoginResult>(this.config.Login, {user: user, password: password})
      .map((data: ILoginResult) => {
          if(data.logged){
            localStorage.setItem("currentUser", JSON.stringify(data));
            this.sessionService.Set(data.token);
          }

          return data;
      });
  }

  Logout(){
    localStorage.removeItem("currentUser");
    this.sessionService.Set("");
  }
}