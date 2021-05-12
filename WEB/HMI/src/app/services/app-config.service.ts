
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    private host: string = "https://a591e761.ngrok.io/";
    private baseUrl: string = this.host + "api/v1/";

    Users: string = this.baseUrl + "users";
    Helicopters:string = this.baseUrl + "helicopters";
    Hardware: string = this.baseUrl + "hardware";
    Software: string = this.baseUrl + "software";
    HelicopterLogs: string = this.baseUrl + "logs/helicopters";    
    GSSLogs: string = this.baseUrl + "logs/gss";
    wACSCertificates: string = this.baseUrl + "certificates/wacs"; 
    GSSCertificates: string = this.baseUrl + "certificates/gss"; 
    ExportedFiles: string = this.baseUrl + "gamf";
    UploadMeta: string = this.baseUrl + "gamf/meta";
    UploadFile: string = this.baseUrl + "gamf/import";
    FileStatus: string = this.baseUrl + "gamf/status";
    Login: string = this.baseUrl + "login";
}