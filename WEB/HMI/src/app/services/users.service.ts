import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserModel, User } from '../models/IUser'
import { CrudService } from './crud.service';
import { AppConfig } from './../services/app-config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService extends CrudService<User> {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Users, http);
    }
}

@Injectable()
export class CreateUserService extends CrudService<CreateUserModel> {
    constructor(config: AppConfig, http: HttpClient) {
        super(config.Users, http);
    }
}