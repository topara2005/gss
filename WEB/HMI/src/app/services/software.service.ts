import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISoftwarePartNumber } from '../models/IPartNumber';
import { CrudService } from './crud.service';
import { AppConfig } from './../services/app-config.service';
import { Observable } from 'rxjs/Observable';

export interface ISoftwarePartNumberService {
    GetByHelicopter(helicopterId: number): Observable<ISoftwarePartNumber[]>;
}

@Injectable()
export class SoftwarePartNumberService
    extends CrudService<ISoftwarePartNumber>
    implements ISoftwarePartNumberService {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Software, http);
    }

    GetByHelicopter(helicopterId: number): Observable<ISoftwarePartNumber[]> {
        let url = this.endpoint + '/' + helicopterId + '/list'; 
        return this.http.get<ISoftwarePartNumber[]>(url);
    }

}