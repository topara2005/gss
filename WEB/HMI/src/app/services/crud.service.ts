import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export interface ISearchable<T> {
    Search(params: any) : Observable<T[]>;
    ChangeEndPoint(newEndPoint: string): void;
}

export interface IOnlyGetService<T> {
    /**Select a single element */
    Get(id: number): Observable<T>;
    /**Get the list of elements */
    GetList(): Observable<T[]>;
    ChangeEndPoint(newEndPoint: string): void;
}

export interface ICrudService<T> extends IOnlyGetService<T> {
    endpoint: string;
    http: HttpClient;
    /**Save a new entry */
    Save(model: T): Observable<any>;
    /**Update the selected entry */
    Update(id: number, model: T): Observable<any>;
    /**Delete the selected entry */
    Remove(id: number): Observable<any>;
}

@Injectable()
export class SearchService<T> implements ISearchable<T> {
    constructor(public endpoint: string, public http: HttpClient){}

    Search(params: any): Observable<T[]>{

        //let url = this.endpoint + this.buildUrlWIthParameters(params);
        let parameters = this.buildUrlWIthParameters(params);
        //return this.http.get<T[]>(url,);
        return this.http.get<T[]>(this.endpoint, {params: parameters});
    }

    ChangeEndPoint(newEndPoint: string){
        if(!newEndPoint){
            throw new Error("The new endpoint should not be empty or null.");
        }

        this.endpoint = newEndPoint;
    }

    private buildUrlWIthParameters(data: any): HttpParams {
        let params = new HttpParams();
         for(var p in data){
             if(data.hasOwnProperty(p)){
                let val = data[p];
                params = params.set(p, val);
             }
         }

         return params;
    }
}

@Injectable()
export class OnlyGetService<T> implements IOnlyGetService<T> {
    constructor(public endpoint: string, public http: HttpClient) {
    }

    Get(id: number): Observable<T> {
        return this.http.get<T>(this.endpoint + "/" + id);
    }

    GetList(): Observable<T[]> {
        return this.http.get<T[]>(this.endpoint);
    }

    ChangeEndPoint(newEndPoint: string) {
        if (!newEndPoint) {
            throw new Error("The new endpoint should not be empty or null.");
        }

        this.endpoint = newEndPoint;
    }
}

@Injectable()
export class GetService {
    constructor(private endpoint: string, private http: HttpClient){ }

    Get<T>(id:number): Observable<T> {
        return this.http.get<T>(this.endpoint + "/" + id);
    }

    GetList<T>(): Observable<T[]> {
        return this.http.get<T[]>(this.endpoint);
    }

    ChangeEndPoint(newEndPoint: string) {
        if (!newEndPoint) {
            throw new Error("The new endpoint should not be empty or null.");
        }

        this.endpoint = newEndPoint;
    }
}

@Injectable()
export class CrudService<T>
    extends OnlyGetService<T>
    implements ICrudService<T>  {

    constructor(endpoint: string, http: HttpClient) {
        super(endpoint, http);
    }

    Save(data: T): Observable<any> {
        return this.http.post<any>(this.endpoint, data);
    }

    Update(id: number, data: T): Observable<any> {
        return this.http.put<any>(this.endpoint + '/' + id, data);
    }

    Remove(id: number): Observable<any> {
        return this.http.delete<any>(this.endpoint + '/' + id);
    }
}