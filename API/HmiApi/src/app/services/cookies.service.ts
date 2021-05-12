import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

export interface ICookieService {
  Get<T>(name: string): T | null;
  Set<T>(name: string, value: T): void;
}

@Injectable()
export class CookiesService implements ICookieService {

  constructor(private cookieService: CookieService) { }

  public Get<T>(name: string): T | null {
    if (!this.cookieService.get(name)) {
      return null;
    }

    return this.cookieService.getObject(name) as T;
  }

  public Set<T>(name: string, value: T) {
    this.cookieService.putObject(name, value);
  }
}