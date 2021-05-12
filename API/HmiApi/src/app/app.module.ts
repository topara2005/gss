import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
// import { HomeComponent } from './components/home/home.component';
import { HardwareListComponent } from './components/hardwarepn/hardwarelist.component';
import { HardwareEditComponent } from './components/hardwarepn/hardwareedit.component';
import { HardwareAddComponent } from './components/hardwarepn/hardwareadd.component';
import { HelicopterListComponent } from './components/helicopters/helicopterlist.component';
import { HelicopterEditComponent } from './components/helicopters/helicopteredit.component';
import { HelicopterAddComponent } from './components/helicopters/helicopteradd.component';
import { SoftwareListComponent } from './components/softwarepn/softwarelist.component';
import { SoftwareEditComponent } from './components/softwarepn/softwareedit.component';
import { SoftwareAddComponent } from './components/softwarepn/softwareadd.component';
import { UserListComponent } from './components/users/userlist.component';
import { UserEditComponent } from './components/users/useredit.component';
import { UserAddComponent } from './components/users/useradd.component';
import { LogmanagementComponent } from './components/logmanagement/logmanagement.component';
import { AirgroundComponent } from './components/airground/airground.component';
import { GamfExportedComponent } from './components/gamf-exported/gamf-exported.component';
import { GamfImportComponent } from './components/gamf-import/gamf-import.component';
import { LoginComponent } from './components/login/login.component';

//Services
import { AppConfig } from './services/app-config.service';
import { UsersService, CreateUserService } from './services/users.service';
import { HelicopterService, HelicopterCrudService } from './services/helicopter.service';
import { HardwarePartNumberService } from './services/hardware.service';
import { SoftwarePartNumberService } from './services/software.service';
import { LogmanagementService } from './services/logmanagement.service';
import { AirgroundService } from './services/airground.service';
import { GamfService } from './services/gamf.service';
import { PollingService } from './services/polling.service';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';
import { CookiesService } from './services/cookies.service';
import { SessionService } from './services/session.service';

import { ModalModule, BsDatepickerModule, ProgressbarModule } from 'ngx-bootstrap';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HardwareEditComponent,
        HardwareListComponent,
        HardwareAddComponent,
        SoftwareEditComponent,
        SoftwareListComponent,
        SoftwareAddComponent,
        HelicopterEditComponent,
        HelicopterListComponent,
        HelicopterAddComponent,
        UserListComponent,
        UserEditComponent,
        UserAddComponent,
        LogmanagementComponent,
        AirgroundComponent,
        GamfExportedComponent,
        GamfImportComponent,
        LoginComponent,
        AlertComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: "X-XSRF-TOKEN-COOKIE",
            headerName: "X-XSRF-TOKEN-HEADER"
        }),
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ProgressbarModule.forRoot(),
        CookieModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'fleet-management', pathMatch: 'full' },
            {
                path: 'fleet-management', canActivate: [AuthGuard],
                children:
                [
                    {
                        path: '',
                        component: HelicopterListComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: 'add',
                        component: HelicopterAddComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: ':hid',
                        component: HelicopterEditComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: ':hid/hardware', canActivate: [AuthGuard],
                        children:
                        [
                            {
                                path: '',
                                component: HardwareListComponent, canActivate: [AuthGuard]
                            },
                            {
                                path: 'add',
                                component: HardwareAddComponent, canActivate: [AuthGuard]
                            },
                            {
                                path: ':id',
                                component: HardwareEditComponent, canActivate: [AuthGuard]
                            }
                        ]
                    },
                    {
                        path: ':hid/software', canActivate: [AuthGuard],
                        children:
                        [
                            {
                                path: '',
                                component: SoftwareListComponent, canActivate: [AuthGuard]
                            },
                            {
                                path: 'add',
                                component: SoftwareAddComponent, canActivate: [AuthGuard]
                            },
                            {
                                path: ':id',
                                component: SoftwareEditComponent, canActivate: [AuthGuard]
                            }
                        ]
                    }
                ]
            },
            // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'logManagement', component: LogmanagementComponent, canActivate: [AuthGuard] },
            { path: 'airGround', component: AirgroundComponent, canActivate: [AuthGuard] },
            {
                path: 'gamf',
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'exported',
                        pathMatch: 'full',
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'exported',
                        component: GamfExportedComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: 'import',
                        component: GamfImportComponent, canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'users', canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: UserListComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: 'add',
                        component: UserAddComponent, canActivate: [AuthGuard]
                    },
                    {
                        path: ':id',
                        component: UserEditComponent, canActivate: [AuthGuard]
                    }
                ]
            },
            { path: '**', redirectTo: 'fleet-management' }
        ])
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UsersService,
        CreateUserService,
        PollingService,
        HelicopterService,
        HelicopterCrudService,
        HardwarePartNumberService,
        SoftwarePartNumberService,
        LogmanagementService,
        AirgroundService,
        CookiesService,
        SessionService,
        GamfService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
