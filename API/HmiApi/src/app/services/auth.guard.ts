import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private sessionService: SessionService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let token = this.sessionService.GetToken();
        if(localStorage.getItem("currentUser") && token && token != ""){
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        return false;
    }
}