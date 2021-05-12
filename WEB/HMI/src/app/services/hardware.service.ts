import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHardwarePartNumber } from '../models/IPartNumber';
import { CrudService } from './crud.service';
import { AppConfig } from './../services/app-config.service';
import { Observable } from 'rxjs/Observable';

export interface IHardwarePartNumberService {
    GetByHelicopter(helicopterId: number): Observable<IHardwarePartNumber[]>;
}

@Injectable()
export class HardwarePartNumberService
    extends CrudService<IHardwarePartNumber>
    implements IHardwarePartNumberService {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Hardware, http);
    }

    GetByHelicopter(helicopterId: number): Observable<IHardwarePartNumber[]> {
        let url = this.endpoint + '/' + helicopterId + '/list';
        return this.http.get<IHardwarePartNumber[]>(url);
    }
}