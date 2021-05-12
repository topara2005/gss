import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config.service';
import { SearchService, ISearchable } from './crud.service';
import { Observable } from 'rxjs/Observable';
import { IExportedData, IFileMetadata } from '../models/IGAMF';

export interface IGamfService {
  GetPriorityList(): string[];
  GetFileTypeList(): string[];
  GetTargetDomainList(): string[];
  SaveMetadata(model: IFileMetadata): Observable<void>;
}

@Injectable()
export class GamfService
  extends SearchService<IExportedData>
  implements IGamfService {

  //private PrioritySelectItems: string[] = ['Low', 'Medium', 'High', 'Immediate'];
  private PrioritySelectItems: string[] = ['LOW', 'MED', 'HGH', 'IMM'];
  private FileTypeSelectItems: string[] = ['FLS', 'USR', 'OWF', 'HCF', 'SYS', 'SEC'];
  private TargetDomainSelectItems: string[] = ['AVCS', 'OOW', 'GOW'];
  private TargetApplicationSelectItems : string[] = ['FMS', 'AMC', 'DMAU', 'ACS', 'MISP', 'MFDAU', 'MNT', 'GNDA', 'OWA'];

  constructor(config: AppConfig, http: HttpClient) {
    super(config.ExportedFiles, http);
  }

  SaveMetadata(model: IFileMetadata): Observable<void> {
    return this.http.post<void>(this.endpoint, model);
  }

  GetPriorityList(): string[] {
    return this.PrioritySelectItems;
  }

  GetFileTypeList(): string[] {
    return this.FileTypeSelectItems;
  }

  GetTargetDomainList(): string[] {
    return this.TargetDomainSelectItems;
  }

  GetTargetApplicationList(): string[] {
    return this.TargetApplicationSelectItems;
  }
}