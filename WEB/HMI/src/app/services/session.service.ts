import { Injectable } from '@angular/core';
import { CookiesService } from './cookies.service'; 

export interface ISessionService {
  /**Almacena el token en los cookies */
  Set(Token: string) : void ;
  
  /**Obtiene el token tal y como fue almacenado */
  GetToken() : string;
  
  /**Obtiene el Id del usuario que esta loggeado actualmente */
  GetUser() : number | null;
}

@Injectable()
export class SessionService implements ISessionService {

  constructor(private cookiesService: CookiesService) { }

  public Set(Token: string): void {
    this.cookiesService.Set('session', Token);
  }

  public GetToken(): string {
    let session = this.cookiesService.Get<string>('session');
    
    if(session){
      return session;
    }

    return '';
  }

  public GetUser(): number | null{
    var token = this.GetToken();
    if(token != ''){
      return parseInt(token.split(";")[0])
    }

    return null;
  }
}