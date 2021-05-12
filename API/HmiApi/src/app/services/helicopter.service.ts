import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHelicopterInfo, IHelicopterBase } from '../models/IHelicopter';
import { CrudService, OnlyGetService } from './crud.service';
import { AppConfig } from './../services/app-config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HelicopterService extends OnlyGetService<IHelicopterInfo> {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Helicopters, http);
    }
}

@Injectable()
export class HelicopterCrudService extends CrudService<IHelicopterBase> {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Helicopters, http);
    }
}