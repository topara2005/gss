import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ILoginResult } from '../../models/ILoginResult';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {

    public get ShowMenu(): boolean {
        let token = this.sessionService.GetToken();
        return token != "";
    }

    public get UserName() : string {
        let userName: string = "";
        let storedUser = localStorage.getItem("currentUser");

        if(storedUser && storedUser != ""){
            let u: ILoginResult = JSON.parse(storedUser);
            userName = u.username;
        }
        
        return userName;
    }

    public Fake(){}

    constructor(
        private authenticationService: AuthenticationService,
        private sessionService: SessionService,
        private router: Router){

    }
   
    Logout(){
        this.authenticationService.Logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }});
    }
}
