webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n\n.header-row{\n    background-color: #f5f5f5;\n}\n.header-row th {\n    text-align: center;\n}\n\n.table-body-centered {\n}\n\n.table-body-centered td {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-menu></nav-menu>\n<div class='container'>\n    <alert></alert>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_hardwarepn_hardwarelist_component__ = __webpack_require__("../../../../../src/app/components/hardwarepn/hardwarelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_hardwarepn_hardwareedit_component__ = __webpack_require__("../../../../../src/app/components/hardwarepn/hardwareedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hardwarepn_hardwareadd_component__ = __webpack_require__("../../../../../src/app/components/hardwarepn/hardwareadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_helicopters_helicopterlist_component__ = __webpack_require__("../../../../../src/app/components/helicopters/helicopterlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_helicopters_helicopteredit_component__ = __webpack_require__("../../../../../src/app/components/helicopters/helicopteredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_helicopters_helicopteradd_component__ = __webpack_require__("../../../../../src/app/components/helicopters/helicopteradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_softwarepn_softwarelist_component__ = __webpack_require__("../../../../../src/app/components/softwarepn/softwarelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_softwarepn_softwareedit_component__ = __webpack_require__("../../../../../src/app/components/softwarepn/softwareedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_softwarepn_softwareadd_component__ = __webpack_require__("../../../../../src/app/components/softwarepn/softwareadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_users_userlist_component__ = __webpack_require__("../../../../../src/app/components/users/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_users_useredit_component__ = __webpack_require__("../../../../../src/app/components/users/useredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_users_useradd_component__ = __webpack_require__("../../../../../src/app/components/users/useradd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_logmanagement_logmanagement_component__ = __webpack_require__("../../../../../src/app/components/logmanagement/logmanagement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_airground_airground_component__ = __webpack_require__("../../../../../src/app/components/airground/airground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_gamf_exported_gamf_exported_component__ = __webpack_require__("../../../../../src/app/components/gamf-exported/gamf-exported.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_gamf_import_gamf_import_component__ = __webpack_require__("../../../../../src/app/components/gamf-import/gamf-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_software_service__ = __webpack_require__("../../../../../src/app/services/software.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_logmanagement_service__ = __webpack_require__("../../../../../src/app/services/logmanagement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_airground_service__ = __webpack_require__("../../../../../src/app/services/airground.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_gamf_service__ = __webpack_require__("../../../../../src/app/services/gamf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_polling_service__ = __webpack_require__("../../../../../src/app/services/polling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_interceptor_service__ = __webpack_require__("../../../../../src/app/services/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_cookies_service__ = __webpack_require__("../../../../../src/app/services/cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { HomeComponent } from './components/home/home.component';

















//Services


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navmenu_navmenu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_hardwarepn_hardwareedit_component__["a" /* HardwareEditComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_hardwarepn_hardwarelist_component__["a" /* HardwareListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_hardwarepn_hardwareadd_component__["a" /* HardwareAddComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_softwarepn_softwareedit_component__["a" /* SoftwareEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_softwarepn_softwarelist_component__["a" /* SoftwareListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_softwarepn_softwareadd_component__["a" /* SoftwareAddComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_helicopters_helicopteredit_component__["a" /* HelicopterEditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_helicopters_helicopterlist_component__["a" /* HelicopterListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_helicopters_helicopteradd_component__["a" /* HelicopterAddComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_users_userlist_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_users_useredit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_users_useradd_component__["a" /* UserAddComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_logmanagement_logmanagement_component__["a" /* LogmanagementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_airground_airground_component__["a" /* AirgroundComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_gamf_exported_gamf_exported_component__["a" /* GamfExportedComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_gamf_import_gamf_import_component__["a" /* GamfImportComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpClientXsrfModule */].withOptions({
                cookieName: "X-XSRF-TOKEN-COOKIE",
                headerName: "X-XSRF-TOKEN-HEADER"
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_41_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_41_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_41_ngx_bootstrap__["c" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["a" /* CookieModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'fleet-management', pathMatch: 'full' },
                {
                    path: 'fleet-management', canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_12__components_helicopters_helicopterlist_component__["a" /* HelicopterListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: 'add',
                            component: __WEBPACK_IMPORTED_MODULE_14__components_helicopters_helicopteradd_component__["a" /* HelicopterAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: ':hid',
                            component: __WEBPACK_IMPORTED_MODULE_13__components_helicopters_helicopteredit_component__["a" /* HelicopterEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: ':hid/hardware', canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]],
                            children: [
                                {
                                    path: '',
                                    component: __WEBPACK_IMPORTED_MODULE_9__components_hardwarepn_hardwarelist_component__["a" /* HardwareListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                },
                                {
                                    path: 'add',
                                    component: __WEBPACK_IMPORTED_MODULE_11__components_hardwarepn_hardwareadd_component__["a" /* HardwareAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                },
                                {
                                    path: ':id',
                                    component: __WEBPACK_IMPORTED_MODULE_10__components_hardwarepn_hardwareedit_component__["a" /* HardwareEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                }
                            ]
                        },
                        {
                            path: ':hid/software', canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]],
                            children: [
                                {
                                    path: '',
                                    component: __WEBPACK_IMPORTED_MODULE_15__components_softwarepn_softwarelist_component__["a" /* SoftwareListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                },
                                {
                                    path: 'add',
                                    component: __WEBPACK_IMPORTED_MODULE_17__components_softwarepn_softwareadd_component__["a" /* SoftwareAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                },
                                {
                                    path: ':id',
                                    component: __WEBPACK_IMPORTED_MODULE_16__components_softwarepn_softwareedit_component__["a" /* SoftwareEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                                }
                            ]
                        }
                    ]
                },
                // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */] },
                { path: 'logManagement', component: __WEBPACK_IMPORTED_MODULE_21__components_logmanagement_logmanagement_component__["a" /* LogmanagementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]] },
                { path: 'airGround', component: __WEBPACK_IMPORTED_MODULE_22__components_airground_airground_component__["a" /* AirgroundComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]] },
                {
                    path: 'gamf',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: '',
                            redirectTo: 'exported',
                            pathMatch: 'full',
                            canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: 'exported',
                            component: __WEBPACK_IMPORTED_MODULE_23__components_gamf_exported_gamf_exported_component__["a" /* GamfExportedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: 'import',
                            component: __WEBPACK_IMPORTED_MODULE_24__components_gamf_import_gamf_import_component__["a" /* GamfImportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        }
                    ]
                },
                {
                    path: 'users', canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_18__components_users_userlist_component__["a" /* UserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: 'add',
                            component: __WEBPACK_IMPORTED_MODULE_20__components_users_useradd_component__["a" /* UserAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        },
                        {
                            path: ':id',
                            component: __WEBPACK_IMPORTED_MODULE_19__components_users_useredit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */]]
                        }
                    ]
                },
                { path: '**', redirectTo: 'fleet-management' }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__services_app_config_service__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_36__services_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_35__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_37__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_27__services_users_service__["b" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_27__services_users_service__["a" /* CreateUserService */],
            __WEBPACK_IMPORTED_MODULE_34__services_polling_service__["a" /* PollingService */],
            __WEBPACK_IMPORTED_MODULE_28__services_helicopter_service__["b" /* HelicopterService */],
            __WEBPACK_IMPORTED_MODULE_28__services_helicopter_service__["a" /* HelicopterCrudService */],
            __WEBPACK_IMPORTED_MODULE_29__services_hardware_service__["a" /* HardwarePartNumberService */],
            __WEBPACK_IMPORTED_MODULE_30__services_software_service__["a" /* SoftwarePartNumberService */],
            __WEBPACK_IMPORTED_MODULE_31__services_logmanagement_service__["a" /* LogmanagementService */],
            __WEBPACK_IMPORTED_MODULE_32__services_airground_service__["a" /* AirgroundService */],
            __WEBPACK_IMPORTED_MODULE_39__services_cookies_service__["a" /* CookiesService */],
            __WEBPACK_IMPORTED_MODULE_40__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_33__services_gamf_service__["a" /* GamfService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_38__services_interceptor_service__["a" /* InterceptorService */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/airground/airground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/airground/airground.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li><a [routerLink]=\"['/home']\">Home</a></li>\n  <li class=\"active\">Air-Ground Key Status</li>\n</ol>\n<hr>\n<div class=\"form-inline\">\n  <div class=\"form-group\">\n      <label for=\"cmbLogs\">Select the Certificates to view</label>\n      <select class=\"form-control\" name=\"\" id=\"cmbCertificates\" [(ngModel)]=\"certificateToView\">\n            <option *ngFor=\"let l of certficateSelectorItems\" [ngValue]=\"l.id\">{{l.name}}</option>\n      </select>\n      <button class=\"btn btn-default\" (click)=\"LoadCertificates()\">Select</button>\n  </div>\n  <div class=\"form-group pull-right\" *ngIf=\"certificateToView == 1\">\n      <!-- <a [routerLink]=\"['/gamf/import']\" class=\"btn btn-default pull-right\">Import a New Certificate</a> -->\n      <a class=\"btn btn-default pull-right\">Import a New Certificate</a>\n  </div>\n</div>\n<br>\n<div class=\"table-responsive\">\n    <table class=\"table table-bordered table-hovered\" *ngIf=\"certificateToView == 0 &amp;&amp; certificateList &amp;&amp; certificateList.length > 0\">\n      <thead>\n        <tr class=\"header-row\">\n          <th>H/C Type</th>\n          <th>H/C SN</th>\n          <th>Name</th>\n          <th>Serial</th>\n          <th>Client Key</th>\n          <th>Issuer</th>\n          <th>CRL Installed Status</th>\n          <th>CRL Valid Status</th>\n          <th>Subject</th>\n          <th>Status</th>\n          <th>Expiration Date</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-body-centered\">\n        <tr *ngFor=\"let c of certificateList\">\n         <td>{{c.type}}</td>\n         <td>{{c.serialNumber}}</td>\n         <td>{{c.name}}</td>\n         <td>{{c.serial}}</td>\n         <td>{{c.clientKey}}</td>\n         <td>{{c.issuer}}</td>\n         <td>{{c.cRLInstalledStatus}}</td>\n         <td>{{c.cRLValidStatus}}</td>\n         <td>{{c.subject}}</td>\n         <td>{{c.status}}</td>\n         <td>{{c.expirationDate}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-bordered table-hovered\" *ngIf=\"certificateToView == 1 &amp;&amp; certificateList &amp;&amp; certificateList.length > 0\">\n        <thead>\n          <tr class=\"header-row\">\n            <th>Name</th>\n            <th>Serial</th>\n            <th>air-Ground Server Key</th>\n            <th>Issuer</th>\n            <th>Subject</th>\n            <th>Status</th>\n            <th>Expiration Date</th>\n          </tr>\n        </thead>\n        <tbody class=\"table-body-centered\">\n          <tr *ngFor=\"let c of certificateList\">\n              <td>{{c.name}}</td>\n              <td>{{c.serial}}</td>\n              <td>{{c.airGroundServerKey}}</td>\n              <td>{{c.issuer}}</td>\n              <td>{{c.subject}}</td>\n              <td>{{c.status}}</td>\n              <td>{{c.expirationDate}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/airground/airground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_airground_service__ = __webpack_require__("../../../../../src/app/services/airground.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_enums_ICertificateToView__ = __webpack_require__("../../../../../src/app/models/enums/ICertificateToView.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirgroundComponent = (function () {
    function AirgroundComponent(service, config) {
        this.service = service;
        this.config = config;
        this._certificateToView = __WEBPACK_IMPORTED_MODULE_2__models_enums_ICertificateToView__["a" /* CertificateToView */].wACS;
        this.certficateSelectorItems = [
            {
                id: 0,
                name: 'wACS air-ground certificates'
            },
            {
                id: 1,
                name: 'GSS certificates'
            }
        ];
    }
    Object.defineProperty(AirgroundComponent.prototype, "certificateToView", {
        get: function () {
            return this._certificateToView;
        },
        set: function (value) {
            this._certificateToView = value;
            this.certificateList = [];
        },
        enumerable: true,
        configurable: true
    });
    AirgroundComponent.prototype.ngOnInit = function () {
    };
    AirgroundComponent.prototype.LoadCertificates = function () {
        var _this = this;
        var url = this.certificateToView == __WEBPACK_IMPORTED_MODULE_2__models_enums_ICertificateToView__["a" /* CertificateToView */].GSS
            ? this.config.GSSCertificates : this.config.wACSCertificates;
        this.service.ChangeEndPoint(url);
        var callback = function (data) {
            _this.certificateList = data;
        };
        var errorCallback = function (e) { return console.log(e); };
        if (this.certificateToView == __WEBPACK_IMPORTED_MODULE_2__models_enums_ICertificateToView__["a" /* CertificateToView */].GSS) {
            this.getSubs = this.service.GetList()
                .subscribe(callback, errorCallback);
        }
        else {
            this.getSubs = this.service.GetList()
                .subscribe(callback, errorCallback);
        }
    };
    AirgroundComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
    };
    return AirgroundComponent;
}());
AirgroundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-airground',
        template: __webpack_require__("../../../../../src/app/components/airground/airground.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/airground/airground.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_airground_service__["a" /* AirgroundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_airground_service__["a" /* AirgroundService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _b || Object])
], AirgroundComponent);

var _a, _b;
//# sourceMappingURL=airground.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/components/alert/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer *ngIf=\"ShowFooter\" class=\"footer navbar-static-bottom\" style=\"text-align: center;\">\n    <hr>\n        Astronautics Corporation of America <br>\n        Version 1.0.0.0\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(sessionService) {
        this.sessionService = sessionService;
    }
    Object.defineProperty(FooterComponent.prototype, "ShowFooter", {
        get: function () {
            var token = this.sessionService.GetToken();
            return token != "";
        },
        enumerable: true,
        configurable: true
    });
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gamf-exported/gamf-exported.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gamf-exported/gamf-exported.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li><a [routerLink]=\"['/home']\">Home</a></li>\n  <li class=\"active\">GAMF - List of Exported Data</li>\n</ol>\n<hr>\n<br>\n<div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <label for=\"txtFileName\">File Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"txtFileName\" [(ngModel)]=\"filterParams.fileName\">\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbFileType\">File Type</label>\n      <select class=\"form-control\" id=\"cmbFileType\" [(ngModel)]=\"filterParams.fileType\">\n        <option *ngFor=\"let t of FileTypeSelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"txtSourceApplication\">Source Application</label>\n      <input type=\"text\" class=\"form-control\" id=\"txtSourceApplication\" [(ngModel)]=\"filterParams.sourceApplication\" />\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <label for=\"cmbTargetApplication\">Target Application</label>\n      <select class=\"form-control\" id=\"cmbTargetApplication\" [(ngModel)]=\"filterParams.destinationApplication\">\n        <option *ngFor=\"let t of TargetApplicationSelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbDestinationDomain\">Target Domain</label>\n      <select class=\"form-control\" id=\"cmbDestinationDomain\" [(ngModel)]=\"filterParams.destinationDomain\">\n        <option *ngFor=\"let t of TargetDomainSelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbPriority\">Priority</label>\n      <select class=\"form-control\" id=\"cmbPriority\" [(ngModel)]=\"filterParams.priority\">\n        <option *ngFor=\"let t of PrioritySelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <label>Data Received From</label>\n      <input type=\"text\" value=\"{{ filterParams.from | date:'yMd'}}\" class=\"form-control\" bsDatepicker [(bsValue)]=\"filterParams.from\">\n    </div>\n    <div class=\"col-lg-4\" [ngClass]=\"{'has-error': !ValidRange}\">\n      <label>To</label>\n      <input type=\"text\" value=\"{{filterParams.to | date:'yMd'}}\" class=\"form-control\" bsDatepicker [(bsValue)]=\"filterParams.to\">\n    </div>\n  </div>\n  <div class=\"row margin-top-5\">\n    <div class=\"col-lg-4\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"Search()\" [disabled]=\"!ValidRange\">Search</button>\n        <button type=\"button\" class=\"btn btn-default\">Clear</button>\n    </div>\n    <div class=\"col-lg-8\">\n        <a [routerLink]=\"['/gamf/import']\" class=\"btn btn-default pull-right\">Import File</a>\n    </div>\n  </div>\n</div>\n<br>\n<div *ngIf=\"!ValidRange\" class=\"alert alert-danger\">Please select a valid date range.</div>\n<div *ngIf=\"searchInProgress\">Search in progress. Please wait</div>\n<div class=\"table-responsive\" *ngIf=\"!searchInProgress &amp;&amp; searchResult &amp;&amp; searchResult.length > 0\">\n  <table class=\"table table-bordered table-hovered\">\n    <thead>\n      <tr class=\"header-row\">\n        <th>H/C Type</th>\n        <th>H/C SN</th>\n        <th>File Name</th>\n        <th>Type</th>\n        <th>Date Received</th>\n        <th>Priority</th>\n        <th>Destination Application</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-body-centered\">\n      <tr *ngFor=\"let e of searchResult\">\n        <td>{{e.helicopterType}}</td>\n        <td>{{e.helicopterSerialNumber}}</td>\n        <td>{{e.fileName}}</td>\n        <td>{{e.fileType}}</td>\n        <td>{{e.dateReceived}}</td>\n        <td>{{e.priority}}</td>\n        <td>{{e.destinationApplication}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gamf-exported/gamf-exported.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamfExportedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__ = __webpack_require__("../../../../../src/app/services/gamf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamfExportedComponent = (function () {
    function GamfExportedComponent(service) {
        this.service = service;
        this.filterParams = {
            destinationApplication: "",
            fileName: "",
            from: new Date(),
            to: new Date(),
            priority: "",
            fileType: "",
            destinationDomain: "",
            sourceApplication: ""
        };
        this.searchInProgress = false;
    }
    Object.defineProperty(GamfExportedComponent.prototype, "ValidRange", {
        get: function () {
            var dateFrom = new Date(this.filterParams.from.toLocaleDateString());
            var dateTo = new Date(this.filterParams.to.toLocaleDateString());
            var valid = this.filterParams
                && this.filterParams.from
                && this.filterParams.to
                && dateTo.getTime() >= dateFrom.getTime();
            return valid;
        },
        enumerable: true,
        configurable: true
    });
    GamfExportedComponent.prototype.ngOnInit = function () {
        this.PrioritySelectItems = this.service.GetPriorityList();
        this.FileTypeSelectItems = this.service.GetFileTypeList();
        this.TargetDomainSelectItems = this.service.GetTargetDomainList();
        this.TargetApplicationSelectItems = this.service.GetTargetApplicationList();
    };
    GamfExportedComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
    };
    GamfExportedComponent.prototype.Search = function () {
        var _this = this;
        this.searchInProgress = true;
        var modelSearch = {
            to: this.filterParams.to.toLocaleDateString(),
            from: this.filterParams.from.toLocaleDateString(),
            destinationApplication: this.filterParams.destinationApplication,
            fileName: this.filterParams.fileName,
            fileType: this.filterParams.fileType,
            priority: this.filterParams.priority,
            destinationDomain: this.filterParams.destinationDomain,
            sourceApplication: this.filterParams.sourceApplication
        };
        this.getSubs = this.service.Search(modelSearch)
            .subscribe(function (data) {
            _this.searchResult = data;
            _this.searchInProgress = false;
        }, function (e) {
            console.log(e);
            _this.searchInProgress = false;
        });
    };
    return GamfExportedComponent;
}());
GamfExportedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gamf-exported',
        template: __webpack_require__("../../../../../src/app/components/gamf-exported/gamf-exported.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gamf-exported/gamf-exported.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__["a" /* GamfService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__["a" /* GamfService */]) === "function" && _a || Object])
], GamfExportedComponent);

var _a;
//# sourceMappingURL=gamf-exported.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gamf-import/gamf-import.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-file {\n    position: relative;\n    overflow: hidden;\n}\n.btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gamf-import/gamf-import.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li><a [routerLink]=\"['/home']\">Home</a></li>\n  <li class=\"active\">GAMF - Import File</li>\n</ol>\n<hr>\n<br>\n<div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"input-group\">\n        <div class=\"input-group-btn\" id=\"sizing-addon2\">\n          <label class=\"btn btn-default\">\n            Select File...\n            <input type=\"file\" class=\"form-control\" id=\"txtFileName\" style=\"display: none\" (change)=\"onSelectFiles($event)\">\n          </label>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fileName\" aria-describedby=\"sizing-addon2\" readonly>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <label for=\"cmbLogType\">Select Helicopter</label>\n      <select class=\"form-control\" id=\"cmbHelicopter\" [(ngModel)]=\"selectedHelicopter\">\n            <option *ngFor=\"let h of helicopterList\" [value]=\"h.id\">{{h.type}} - {{h.serialNumber}}</option>\n          </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbFileType\">File Type</label>\n      <select class=\"form-control\" id=\"cmbFileType\" [(ngModel)]=\"metadata.fileType\">\n          <option *ngFor=\"let t of FileTypeSelectItems\" [value]=\"t\">{{t}}</option>\n        </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"txtSourceApplication\">Source Application</label>\n      <input type=\"text\" class=\"form-control\" id=\"txtSourceApplication\" [(ngModel)]=\"metadata.sourceApplication\" />\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <label for=\"txtDestinationApplication\">Target Application</label>\n      <select class=\"form-control\" id=\"cmbTargetApplication\" [(ngModel)]=\"metadata.destinationApplication\">\n        <option *ngFor=\"let t of TargetApplicationSelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbDestinationDomain\">Target Domain</label>\n      <select class=\"form-control\" id=\"cmbDestinationDomain\" [(ngModel)]=\"metadata.destinationDomain\">\n        <option *ngFor=\"let t of TargetDomainSelectItems\" [value]=\"t\">{{t}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label for=\"cmbPriority\">Priority</label>\n      <select class=\"form-control\" id=\"cmbPriority\" [(ngModel)]=\"metadata.priority\">\n          <option *ngFor=\"let t of PrioritySelectItems\" [value]=\"t\">{{t}}</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"row margin-top-5\">\n    <div class=\"col-lg-4\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"Upload()\" [disabled]=\"!file &amp;&amp; !selectedHelicopter\">Import File</button>\n      <button type=\"button\" class=\"btn btn-default\">Clear</button>\n    </div>\n  </div>\n</div>\n<br>\n<!-- Put a progress bar here -->\n<div *ngIf=\"uploadingFile\">\n  Uploading file. Please wait.\n  <progressbar [animate]=\"true\" [value]=\"uploadProgress\" type=\"info\"><b>{{uploadProgress}}%</b></progressbar>\n</div>\n\n<h3>GAMF - Real Time Transfer Status</h3>\n<hr>\n\n<!-- <div class=\"table-responsive\" *ngIf=\"!searchInProgress &amp;&amp; searchResult &amp;&amp; searchResult.length > 0\"> -->\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hovered\">\n    <thead>\n      <tr class=\"header-row\">\n        <th>File Name</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-body-centered\">\n      <tr *ngFor=\"let f of FileList\">\n        <td>{{f.fileName}}</td>\n        <td>{{f.status}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gamf-import/gamf-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamfImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__ = __webpack_require__("../../../../../src/app/services/gamf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_polling_service__ = __webpack_require__("../../../../../src/app/services/polling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamfImportComponent = (function () {
    function GamfImportComponent(helicopterService, service, config, pollingService) {
        this.helicopterService = helicopterService;
        this.service = service;
        this.config = config;
        this.pollingService = pollingService;
        this.uploadingFile = false;
        this.metadata = {
            destinationApplication: "",
            fileName: "",
            fileType: "",
            hCSerialNumber: "",
            hCType: "",
            priority: "",
            sourceApplication: "",
            helicopterId: 0
        };
    }
    Object.defineProperty(GamfImportComponent.prototype, "selectedHelicopter", {
        get: function () {
            var _this = this;
            if (this._selectedHelicopter) {
                this.selectedId = this.selectedHelicopter.id;
                this.pollingSubs.unsubscribe();
                var url = this.config.FileStatus + "?helicopterId=" + this.selectedHelicopter.id;
                this.pollingSubs = this.pollingService.Listening(url)
                    .subscribe(function (d) {
                    _this.FileList = d;
                });
            }
            //this.selectedId = this._selectedHelicopter.id;
            return this._selectedHelicopter;
        },
        enumerable: true,
        configurable: true
    });
    GamfImportComponent.prototype.ngOnInit = function () {
        this.PrioritySelectItems = this.service.GetPriorityList();
        this.FileTypeSelectItems = this.service.GetFileTypeList();
        this.TargetDomainSelectItems = this.service.GetTargetDomainList();
        this.TargetApplicationSelectItems = this.service.GetTargetApplicationList();
        this.loadHelicopters();
    };
    GamfImportComponent.prototype.ngOnDestroy = function () {
        if (this.getHCSubs) {
            this.getHCSubs.unsubscribe();
        }
        if (this.saveMetaSubs) {
            this.saveMetaSubs.unsubscribe();
        }
        if (this.pollingSubs) {
            this.pollingSubs.unsubscribe();
        }
    };
    GamfImportComponent.prototype.loadHelicopters = function () {
        var _this = this;
        this.getHCSubs = this.helicopterService.GetList()
            .subscribe(function (data) {
            _this.helicopterList = data;
        }, function (e) {
            console.log(e);
        });
    };
    GamfImportComponent.prototype.onSelectFiles = function (event) {
        console.log("file selected!");
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    GamfImportComponent.prototype.Upload = function () {
        var _this = this;
        if (!this.file) {
            console.log("Please select a file first.");
            return;
        }
        if (!this.selectedHelicopter) {
            console.log('Please select an helicopter');
            return;
        }
        this.metadata.hCSerialNumber = this.selectedHelicopter.serialNumber;
        this.metadata.hCType = this.selectedHelicopter.type;
        this.metadata.fileName = this.file.name;
        this.metadata.helicopterId = this.selectedHelicopter.id;
        //Add validations for the metadata object here!
        this.service.ChangeEndPoint(this.config.UploadMeta);
        this.saveMetaSubs = this.service.SaveMetadata(this.metadata)
            .subscribe(function () {
            //if 200 OK Code, then upload file
            console.log("Metadata saved. Procced with uploading file...");
            console.log("Start uploading file: " + _this.file.name);
            _this.uploadingFile = true;
            var req = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["g" /* HttpRequest */]("POST", _this.config.UploadFile + "?helicopterId=" + _this.selectedHelicopter.id, _this.file, { reportProgress: true });
            _this.service.http.request(req).subscribe(function (event) {
                if (event.type == __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpEventType */].UploadProgress) {
                    if (event.total) {
                        _this.uploadProgress = Math.round(100 * event.loaded / event.total);
                        console.log("Uploading file: " + _this.uploadProgress + "% uploaded");
                    }
                }
                else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["h" /* HttpResponse */]) {
                    _this.uploadProgress = 0;
                    _this.uploadingFile = false;
                    console.log("File uploaded!");
                }
            });
        }, function (e) {
            console.log(e);
            _this.uploadingFile = false;
            _this.uploadProgress = 0;
        });
    };
    return GamfImportComponent;
}());
GamfImportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gamf-import',
        template: __webpack_require__("../../../../../src/app/components/gamf-import/gamf-import.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gamf-import/gamf-import.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__["b" /* HelicopterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__["b" /* HelicopterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__["a" /* GamfService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gamf_service__["a" /* GamfService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__["a" /* AppConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_polling_service__["a" /* PollingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_polling_service__["a" /* PollingService */]) === "function" && _d || Object])
], GamfImportComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gamf-import.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwareadd.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid, 'hardware']\">Hardware PN List</a></li>        \n        <li class=\"active\">Add</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['name'].valid}\">\n            <label for=\"txtPartName\">Hardware Part Name</label>\n            <input id=\"txtPartName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['name']\">\n            <div *ngIf=\"form.controls['name'].hasError('required') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                The field Hardware Part Name is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['name'].hasError('minlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Hardware Part Name length should be up to 6 characters.\n            </div> -->\n            <!-- <div *ngIf=\"form.controls['name'].hasError('maxlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Hardware Part Name length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['number'].valid}\">\n            <label for=\"txtPartNumber\">Hardware Part Number</label>\n            <input id=\"txtPartNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['number']\">\n            <div *ngIf=\"form.controls['number'].hasError('required') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['number'].hasError('minlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['number'].hasError('maxlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwareadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HardwareAddComponent = (function () {
    function HardwareAddComponent(formBuilder, service, location, router) {
        var _this = this;
        this.service = service;
        this.location = location;
        this.form = formBuilder.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            number: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        router.params.subscribe(function (params) { return _this.hid = +params['hid']; });
    }
    HardwareAddComponent.prototype.ngOnDestroy = function () {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    };
    HardwareAddComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        if (model) {
            model.helicopterId = this.hid;
            this.addSubs = this.service.Save(model)
                .subscribe(function () {
                _this.goBack();
            }, function (e) {
                console.log(e);
            });
        }
    };
    HardwareAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HardwareAddComponent;
}());
HardwareAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hardwareadd',
        template: __webpack_require__("../../../../../src/app/components/hardwarepn/hardwareadd.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__["a" /* HardwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__["a" /* HardwarePartNumberService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], HardwareAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hardwareadd.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwareedit.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid, 'hardware']\">Hardware PN List</a></li>        \n        <li class=\"active\">Edit</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['name'].valid}\">\n            <label for=\"txtPartName\">Hardware Part Name</label>\n            <input id=\"txtPartName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['name']\">\n            <div *ngIf=\"form.controls['name'].hasError('required') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                The field Hardware Part Name is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['name'].hasError('minlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Hardware Part Name length should be up to 6 characters.\n            </div> -->\n            <!-- <div *ngIf=\"form.controls['name'].hasError('maxlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Hardware Part Name length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['number'].valid}\">\n            <label for=\"txtPartNumber\">Hardware Part Number</label>\n            <input id=\"txtPartNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['number']\">\n            <div *ngIf=\"form.controls['number'].hasError('required') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['number'].hasError('minlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['number'].hasError('maxlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Hardware Part Number length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwareedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HardwareEditComponent = (function () {
    function HardwareEditComponent(formBuilder, service, location, router) {
        var _this = this;
        this.service = service;
        this.location = location;
        this.form = formBuilder.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            number: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        router.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.hid = +params['hid'];
            _this.getSub = _this.service.Get(_this.id)
                .subscribe(function (h) {
                _this.hid = h.helicopterId;
                _this.form = formBuilder.group({
                    name: [h.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
                    number: [h.number, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
                });
            }, function (e) {
                console.log(e);
            });
        });
    }
    HardwareEditComponent.prototype.ngOnDestroy = function () {
        if (this.getSub) {
            this.getSub.unsubscribe();
        }
        if (this.editSubs) {
            this.editSubs.unsubscribe();
        }
    };
    HardwareEditComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        if (model) {
            model.helicopterId = this.hid;
            this.editSubs = this.service.Update(this.id, model)
                .subscribe(function () {
                _this.goBack();
            }, function (e) {
                console.log(e);
            });
        }
    };
    HardwareEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HardwareEditComponent;
}());
HardwareEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hardwareedit',
        template: __webpack_require__("../../../../../src/app/components/hardwarepn/hardwareedit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__["a" /* HardwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hardware_service__["a" /* HardwarePartNumberService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], HardwareEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hardwareedit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwarelist.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li class=\"active\">Hardware PN List</li>\n    </ol>\n    <hr>\n    <form class=\"form-inline\">\n            <div class=\"form-group\">\n              <label>Hardware Part Name</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Hardware Part Number</label>\n              <input type=\"email\" class=\"form-control\">\n            </div>\n    \n            <button type=\"button\" class=\"btn btn-default\">Search</button>\n            <button type=\"button\" class=\"btn btn-default\">Clear</button>\n            <a [routerLink]=\"['add']\" class=\"pull-right\"> <i class=\"glyphicon glyphicon-plus\"></i> New Hardware Part</a>\n          </form>\n        <br>\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-stripped\">\n            <thead>\n                <tr class=\"header-row\">\n                    <th>Hardware Part Name</th>\n                    <th>Hardware Part Number</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody class=\"table-body-centered\">\n                <tr *ngFor=\"let h of list\">\n                    <td>{{h.name}}</td>\n                    <td>{{h.number}}</td>\n                    <td>\n                        <a [routerLink]=\"['/fleet-management', hid, 'hardware', h.id]\">\n                            <i class=\"glyphicon glyphicon-edit\"></i>\n                        </a>\n                        <a (click)=\"confirmModal.show()\">\n                            <i class=\"glyphicon glyphicon-trash\"></i>\n                        </a>\n                        <div class=\"modal fade\" bsModal #confirmModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                        aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-sm\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title pull-left\">Confirm delete?</h4>\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmModal.hide()\">\n                             <span aria-hidden=\"true\">&times;</span>\n                             </button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    do you want to remove the hardware part number?\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button class=\"btn btn-default\" (click)=\"Remove(h.id, confirmModal)\">Yes</button>\n                                    <button class=\"btn btn-default\" (click)=\"confirmModal.hide()\">Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/hardwarepn/hardwarelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hardware_service__ = __webpack_require__("../../../../../src/app/services/hardware.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HardwareListComponent = (function () {
    function HardwareListComponent(location, router, service) {
        var _this = this;
        this.location = location;
        this.service = service;
        router.params.subscribe(function (params) {
            _this.hid = +params['hid'];
            _this.load();
        });
    }
    HardwareListComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
        if (this.remSubs) {
            this.remSubs.unsubscribe();
        }
    };
    HardwareListComponent.prototype.goBack = function () {
        this.location.back();
    };
    HardwareListComponent.prototype.Remove = function (id, confirmModal) {
        var _this = this;
        this.remSubs = this.service.Remove(id).subscribe(function () {
            confirmModal.hide();
            _this.load();
        }, function (e) {
            console.log(e);
            confirmModal.hide();
        });
    };
    HardwareListComponent.prototype.load = function () {
        var _this = this;
        this.service.GetByHelicopter(this.hid).subscribe(function (data) {
            _this.list = data;
        }, function (err) { return console.log(err); });
    };
    return HardwareListComponent;
}());
HardwareListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hardwarelist',
        template: __webpack_require__("../../../../../src/app/components/hardwarepn/hardwarelist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_hardware_service__["a" /* HardwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_hardware_service__["a" /* HardwarePartNumberService */]) === "function" && _c || Object])
], HardwareListComponent);

var _a, _b, _c;
//# sourceMappingURL=hardwarelist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopteradd.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li class=\"active\">Add</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['type'].valid}\">\n            <label for=\"txtType\">Type</label>\n            <input id=\"txtType\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['type']\">\n            <div *ngIf=\"form.controls['type'].hasError('required') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                The field Type is required.\n            </div>\n            <div *ngIf=\"form.controls['type'].hasError('minlength') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                    The field Type length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['type'].hasError('maxlength') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                    The field Type length should be less than 25 characters.\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['serialNumber'].valid}\">\n            <label for=\"txtSerialNumber\">Serial Number</label>\n            <input id=\"txtSerialNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['serialNumber']\">\n            <div *ngIf=\"form.controls['serialNumber'].hasError('required') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number is required.\n            </div>\n            <div *ngIf=\"form.controls['serialNumber'].hasError('minlength') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['serialNumber'].hasError('maxlength') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number length should be less than 25 characters.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopteradd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelicopterAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelicopterAddComponent = (function () {
    function HelicopterAddComponent(helicopterService, location, formBuilder) {
        this.helicopterService = helicopterService;
        this.location = location;
        this.form = formBuilder.group({
            type: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
            serialNumber: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])]
        });
    }
    HelicopterAddComponent.prototype.ngOnDestroy = function () {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    };
    HelicopterAddComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        this.addSubs = this.helicopterService.Save(model).subscribe(function () {
            _this.location.back();
        });
    };
    HelicopterAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HelicopterAddComponent;
}());
HelicopterAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'helicopteradd',
        template: __webpack_require__("../../../../../src/app/components/helicopters/helicopteradd.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__["a" /* HelicopterCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__["a" /* HelicopterCrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], HelicopterAddComponent);

var _a, _b, _c;
//# sourceMappingURL=helicopteradd.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopteredit.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li class=\"active\">Edit</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['type'].valid}\">\n            <label for=\"txtType\">Type</label>\n            <input id=\"txtType\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['type']\">\n            <div *ngIf=\"form.controls['type'].hasError('required') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                The field Type is required.\n            </div>\n            <div *ngIf=\"form.controls['type'].hasError('minlength') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                    The field Type length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['type'].hasError('maxlength') &amp;&amp; form.controls['type'].touched\" class=\"text-danger\">\n                    The field Type length should be less than 25 characters.\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['serialNumber'].valid}\">\n            <label for=\"txtSerialNumber\">Serial Number</label>\n            <input id=\"txtSerialNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['serialNumber']\">\n            <div *ngIf=\"form.controls['serialNumber'].hasError('required') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number is required.\n            </div>\n            <div *ngIf=\"form.controls['serialNumber'].hasError('minlength') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['serialNumber'].hasError('maxlength') &amp;&amp; form.controls['serialNumber'].touched\" class=\"text-danger\">\n                    The field Serial Number length should be less than 25 characters.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopteredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelicopterEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelicopterEditComponent = (function () {
    function HelicopterEditComponent(helicopterService, route, location, formBuilder) {
        var _this = this;
        this.helicopterService = helicopterService;
        this.route = route;
        this.location = location;
        this.form = formBuilder.group({
            type: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
            serialNumber: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])]
        });
        this.route.params.subscribe(function (params) {
            _this.hid = +params['hid'];
            _this.getSub = _this.helicopterService.Get(_this.hid).subscribe(function (h) {
                _this.form = formBuilder.group({
                    type: [h.type, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
                    serialNumber: [h.serialNumber, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])]
                });
            }, function (e) {
                console.log(e);
            });
        });
    }
    HelicopterEditComponent.prototype.ngOnDestroy = function () {
        if (this.getSub) {
            this.getSub.unsubscribe();
        }
        if (this.editSubs) {
            this.editSubs.unsubscribe();
        }
    };
    HelicopterEditComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        this.editSubs = this.helicopterService.Update(this.hid, model)
            .subscribe(function () {
            _this.goBack();
        }, function (e) {
            console.log(e);
        });
    };
    HelicopterEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HelicopterEditComponent;
}());
HelicopterEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'helicopteredit',
        template: __webpack_require__("../../../../../src/app/components/helicopters/helicopteredit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__["a" /* HelicopterCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_helicopter_service__["a" /* HelicopterCrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], HelicopterEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=helicopteredit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopterlist.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <li class=\"active\">Fleet Management</li>\n</ol>\n<hr>\n<form class=\"form-inline\">\n    <div class=\"form-group\">\n        <label>H/C Type</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>H/C SN</label>\n        <input type=\"email\" class=\"form-control\">\n    </div>\n\n    <button type=\"button\" class=\"btn btn-default\">Search</button>\n    <button type=\"button\" class=\"btn btn-default\">Clear</button>\n    <a [routerLink]=\"['add']\" class=\"pull-right\"> <i class=\"glyphicon glyphicon-plus\"></i> New Helicopter</a>\n</form>\n<br>\n<div class=\"table-responsive\">\n    <table class=\"table table-bordered table-stripped\">\n        <thead>\n            <tr class=\"header-row\">\n                <th>H/C Type</th>\n                <th>H/C SN</th>\n                <th>wACS Health</th>\n                <th>Interface Status</th>\n                <th>Last Known Location</th>\n                <th>Hardware PN</th>\n                <th>Software PN</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody class=\"table-body-centered\">\n            <tr *ngFor=\"let h of helicopters\">\n                <td>{{h.type}}</td>\n                <td>{{h.serialNumber}}</td>\n                <td>{{h.wACSHealth}}</td>\n                <td>{{h.interfaceStatus}}</td>\n                <td>\n                    <span *ngIf=\"h.lastKnownLocation\">({{h.lastKnownLocation.latitude}}, {{h.lastKnownLocation.longitude}})</span>\n\n                </td>\n                <td>\n                    <a [routerLink]=\"['/fleet-management', h.id, 'hardware']\" class=\"btn btn-default\">View HW PN</a>\n                </td>\n                <td>\n                    <a [routerLink]=\"['/fleet-management', h.id, 'software']\" class=\"btn btn-default\">View SW PN</a>\n                </td>\n                <td>\n                    <a [routerLink]=\"['/fleet-management', h.id]\">\n                        <i class=\"glyphicon glyphicon-edit\"></i>\n                    </a>\n                    <a (click)=\"confirmModal.show()\">\n                        <i class=\"glyphicon glyphicon-trash\"></i>\n                    </a>\n                    <div class=\"modal fade\" bsModal #confirmModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                        aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-sm\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title pull-left\">Confirm delete?</h4>\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmModal.hide()\">\n                             <span aria-hidden=\"true\">&times;</span>\n                             </button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    do you want to remove the helicopter?\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button class=\"btn btn-default\" (click)=\"Remove(h.id, confirmModal)\">Yes</button>\n                                    <button class=\"btn btn-default\" (click)=\"confirmModal.hide()\">Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/helicopters/helicopterlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelicopterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_polling_service__ = __webpack_require__("../../../../../src/app/services/polling.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelicopterListComponent = (function () {
    function HelicopterListComponent(service, pollingService, config) {
        this.service = service;
        this.pollingService = pollingService;
        this.config = config;
    }
    HelicopterListComponent.prototype.ngOnInit = function () {
        this.LoadHelicopters();
    };
    HelicopterListComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
        if (this.remSub) {
            this.remSub.unsubscribe();
        }
    };
    HelicopterListComponent.prototype.LoadHelicopters = function () {
        var _this = this;
        this.getSubs = this.pollingService.Listening(this.config.Helicopters)
            .subscribe(function (h) {
            _this.helicopters = h;
        }, function (e) {
            console.log(e);
        });
    };
    HelicopterListComponent.prototype.Remove = function (id, confirmModal) {
        var _this = this;
        this.remSub = this.service.Remove(id).subscribe(function () {
            confirmModal.hide();
            _this.LoadHelicopters();
        }, function (e) {
            console.log(e);
            confirmModal.hide();
        });
    };
    return HelicopterListComponent;
}());
HelicopterListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'helicopterlist',
        template: __webpack_require__("../../../../../src/app/components/helicopters/helicopterlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__["a" /* HelicopterCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_helicopter_service__["a" /* HelicopterCrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_polling_service__["a" /* PollingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_polling_service__["a" /* PollingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_config_service__["a" /* AppConfig */]) === "function" && _c || Object])
], HelicopterListComponent);

var _a, _b, _c;
//# sourceMappingURL=helicopterlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6 col-md-offset-3\">\n    <h2>Astronautics Corporation of America</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid &amp;&amp; Login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted &amp;&amp; !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted &amp;&amp; !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted &amp;&amp; !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted &amp;&amp; !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n    </form>\n</div> -->\n\n<div class=\"card card-container\">\n    <div style=\"text-align: center\">\n        Astronautics Corporation of America \n    </div>\n    <br>\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid &amp;&amp; Login()\" #f=\"ngForm\" novalidate class=\"form-signin\">\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted &amp;&amp; !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input id=\"inputEmail\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted &amp;&amp; !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted &amp;&amp; !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted &amp;&amp; !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <!-- <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button> -->\n            <button [disabled]=\"loading\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div class=\"form-group\" style=\"text-align: center\">\n                Version 1.0.0.0\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.Logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.Login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error("username or password is wrong. Please try again.");
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/logmanagement/logmanagement.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li><a [routerLink]=\"['/home']\">Home</a></li>\n  <li class=\"active\">Log Management</li>\n</ol>\n<hr>\n<div class=\"form-inline\">\n    <label for=\"cmbLogs\">Select the Logs to view</label>\n    <select class=\"form-control\" name=\"\" id=\"cmbLogs\" [(ngModel)]=\"ToView\">\n      <option *ngFor=\"let l of logsToView\" [ngValue]=\"l.id\">{{l.name}}</option>\n    </select>      \n</div>\n<br>\n<div class=\"form-inline\" *ngIf=\"toView != undefined\">\n    <div class=\"form-group\" *ngIf=\"ToView == 0\">\n        <label for=\"cmbLogType\">Select Helicopter</label>\n        <select class=\"form-control\" id=\"cmbHelicopter\" [(ngModel)]=\"selectedHelicopter\">\n          <option *ngFor=\"let h of helicopterList\" [value]=\"h.id\">{{h.type}} - {{h.serialNumber}}</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"cmbLogType\">Log Type</label>\n        <select class=\"form-control\" id=\"cmbLogType\" [(ngModel)]=\"filterParams.logType\">\n          <option *ngFor=\"let t of logTypes\" [value]=\"t.id\">{{t.name}}</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label>From</label>\n          <input type=\"text\" class=\"form-control\"\n            value=\"{{ filterParams.from | date:'yMd'}}\"\n            bsDatepicker [(bsValue)]=\"filterParams.from\">\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !ValidRange}\">\n        <label>To</label>\n        <input type=\"text\" \n        value=\"{{filterParams.to | date:'yMd'}}\" \n        class=\"form-control\"\n        bsDatepicker [(bsValue)]=\"filterParams.to\">\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"Search()\" [disabled]=\"!ValidRange || !ValidHelicopter\">Search</button>\n    <button type=\"button\" class=\"btn btn-default\">Clear</button>    \n  </div>\n  <br>\n  <div *ngIf=\"!ValidRange\" class=\"alert alert-danger\">Please select a valid date range.</div>\n  <div *ngIf=\"!ValidHelicopter\" class=\"alert alert-danger\">Please select an helicopter.</div>\n  <div *ngIf=\"searchInProgress\">Search in progress. Please wait</div>\n  <div class=\"table-responsive\" *ngIf=\"!searchInProgress &amp;&amp; searchResult &amp;&amp; searchResult.length > 0\">\n    <table class=\"table table-bordered table-hovered\">\n      <thead>\n        <tr class=\"header-row\">\n          <th>Select</th>\n          <th>Log File Name</th>\n          <th>Log Size</th>\n          <th>Log Date</th>\n          <th>Software Version</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-body-centered\">\n        <tr *ngFor=\"let log of searchResult\">\n          <td>\n            <input type=\"checkbox\" [(ngModel)]=\"log.selected\">\n          </td>\n          <td>{{log.logFileName}}</td>\n          <td>{{log.logSize}}</td>\n          <td>{{log.logDate}}</td>\n          <td>{{log.softwareVersion}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n        <button class=\"btn btn-default pull-right\">\n          Export\n        </button>\n      </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/logmanagement/logmanagement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogmanagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_enums_ILogToView__ = __webpack_require__("../../../../../src/app/models/enums/ILogToView.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_enums_ILogType__ = __webpack_require__("../../../../../src/app/models/enums/ILogType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logmanagement_service__ = __webpack_require__("../../../../../src/app/services/logmanagement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helicopter_service__ = __webpack_require__("../../../../../src/app/services/helicopter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogmanagementComponent = (function () {
    function LogmanagementComponent(searchService, helicopterService, config) {
        this.searchService = searchService;
        this.helicopterService = helicopterService;
        this.config = config;
        this.searchInProgress = false;
        this.filterParams = {
            from: new Date(),
            to: new Date(),
            logType: __WEBPACK_IMPORTED_MODULE_2__models_enums_ILogType__["a" /* LogType */].System
        };
        this.searchEndPoint = this.config.HelicopterLogs;
        this.logsToView = [
            {
                id: 0,
                name: "H/C Logs"
            },
            {
                id: 1,
                name: "GSS Logs"
            }
        ];
        this.logTypes = [
            {
                id: 0,
                name: "System"
            },
            {
                id: 1,
                name: "Security"
            }
        ];
    }
    Object.defineProperty(LogmanagementComponent.prototype, "ToView", {
        get: function () {
            return this.toView;
        },
        set: function (value) {
            this.searchEndPoint = (value == __WEBPACK_IMPORTED_MODULE_1__models_enums_ILogToView__["a" /* LogToView */].Helicopters)
                ? this.config.HelicopterLogs
                : this.config.GSSLogs;
            this.searchResult = [];
            this.toView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogmanagementComponent.prototype, "ValidRange", {
        get: function () {
            var dateFrom = new Date(this.filterParams.from.toLocaleDateString());
            var dateTo = new Date(this.filterParams.to.toLocaleDateString());
            var valid = this.filterParams
                && this.filterParams.from
                && this.filterParams.to
                && dateTo.getTime() >= dateFrom.getTime();
            return valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogmanagementComponent.prototype, "ValidHelicopter", {
        get: function () {
            if (this.ToView == null || this.ToView == undefined) {
                return true;
            }
            if (this.ToView == __WEBPACK_IMPORTED_MODULE_1__models_enums_ILogToView__["a" /* LogToView */].GSS)
                return true;
            return this.selectedHelicopter != null;
        },
        enumerable: true,
        configurable: true
    });
    LogmanagementComponent.prototype.ngOnInit = function () {
        this.loadHelicopters();
    };
    LogmanagementComponent.prototype.Search = function () {
        var _this = this;
        this.searchInProgress = true;
        this.searchService.ChangeEndPoint(this.searchEndPoint);
        var modelSearch = {
            to: this.filterParams.to.toLocaleDateString(),
            from: this.filterParams.from.toLocaleDateString(),
            logType: this.filterParams.logType
        };
        if (this.ToView == __WEBPACK_IMPORTED_MODULE_1__models_enums_ILogToView__["a" /* LogToView */].Helicopters) {
            modelSearch.helicopterId = this.selectedHelicopter;
        }
        this.searchSubs = this.searchService.Search(modelSearch)
            .subscribe(function (data) {
            _this.searchResult = data;
            _this.searchInProgress = false;
        }, function (e) {
            console.log(e);
            _this.searchInProgress = false;
        });
    };
    LogmanagementComponent.prototype.ngOnDestroy = function () {
        if (this.searchSubs) {
            this.searchSubs.unsubscribe();
        }
        if (this.getHCSubs) {
            this.getHCSubs.unsubscribe();
        }
    };
    LogmanagementComponent.prototype.loadHelicopters = function () {
        var _this = this;
        this.getHCSubs = this.helicopterService.GetList()
            .subscribe(function (data) {
            _this.helicopterList = data;
        }, function (e) {
            console.log(e);
        });
    };
    return LogmanagementComponent;
}());
LogmanagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logmanagement',
        template: __webpack_require__("../../../../../src/app/components/logmanagement/logmanagement.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_logmanagement_service__["a" /* LogmanagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_logmanagement_service__["a" /* LogmanagementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_helicopter_service__["b" /* HelicopterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_helicopter_service__["b" /* HelicopterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_config_service__["a" /* AppConfig */]) === "function" && _c || Object])
], LogmanagementComponent);

var _a, _b, _c;
//# sourceMappingURL=logmanagement.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #9EA1A3;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n/* .main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default' *ngIf=\"ShowMenu\">\r\n    <div class=\"container\">\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">HMI</a>\r\n        </div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class=\"nav navbar-nav\">\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fleet-management']\">Fleet Management</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/logManagement']\">Log Management</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/airGround']\"> Air-Ground Key Status</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/gamf']\">GAMF</a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/users']\">Users</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{UserName}} <b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a (click)=\"Logout()\">Log out</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavMenuComponent = (function () {
    function NavMenuComponent(authenticationService, sessionService, router) {
        this.authenticationService = authenticationService;
        this.sessionService = sessionService;
        this.router = router;
    }
    Object.defineProperty(NavMenuComponent.prototype, "ShowMenu", {
        get: function () {
            var token = this.sessionService.GetToken();
            return token != "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavMenuComponent.prototype, "UserName", {
        get: function () {
            var userName = "";
            var storedUser = localStorage.getItem("currentUser");
            if (storedUser && storedUser != "") {
                var u = JSON.parse(storedUser);
                userName = u.username;
            }
            return userName;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.Fake = function () { };
    NavMenuComponent.prototype.Logout = function () {
        this.authenticationService.Logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url } });
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nav-menu',
        template: __webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], NavMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=navmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwareadd.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid, '/software']\">Software PN List</a></li>        \n        <li class=\"active\">Add</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['name'].valid}\">\n            <label for=\"txtPartName\">Software Part Name</label>\n            <input id=\"txtPartName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['name']\">\n            <div *ngIf=\"form.controls['name'].hasError('required') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                The field Software Part Name is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['name'].hasError('minlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Software Part Name length should be up to 6 characters.\n            </div> -->\n            <!-- <div *ngIf=\"form.controls['name'].hasError('maxlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Software Part Name length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['number'].valid}\">\n            <label for=\"txtPartNumber\">Software Part Number</label>\n            <input id=\"txtPartNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['number']\">\n            <div *ngIf=\"form.controls['number'].hasError('required') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['number'].hasError('minlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['number'].hasError('maxlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwareadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwareAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_software_service__ = __webpack_require__("../../../../../src/app/services/software.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoftwareAddComponent = (function () {
    function SoftwareAddComponent(formBuilder, service, location, router) {
        var _this = this;
        this.service = service;
        this.location = location;
        this.form = formBuilder.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            number: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        router.params.subscribe(function (params) { return _this.hid = +params['hid']; });
    }
    SoftwareAddComponent.prototype.ngOnDestroy = function () {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    };
    SoftwareAddComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        if (model) {
            model.helicopterId = this.hid;
            this.addSubs = this.service.Save(model)
                .subscribe(function () {
                _this.goBack();
            }, function (e) {
                console.log(e);
            });
        }
    };
    SoftwareAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SoftwareAddComponent;
}());
SoftwareAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'softwareadd',
        template: __webpack_require__("../../../../../src/app/components/softwarepn/softwareadd.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_software_service__["a" /* SoftwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_software_service__["a" /* SoftwarePartNumberService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], SoftwareAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=softwareadd.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwareedit.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid, '/software']\">Software PN List</a></li>        \n        <li class=\"active\">Edit</li>\n    </ol>\n    <hr>\n    <form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['name'].valid}\">\n            <label for=\"txtPartName\">Software Part Name</label>\n            <input id=\"txtPartName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['name']\">\n            <div *ngIf=\"form.controls['name'].hasError('required') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                The field Software Part Name is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['name'].hasError('minlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Software Part Name length should be up to 6 characters.\n            </div> -->\n            <!-- <div *ngIf=\"form.controls['name'].hasError('maxlength') &amp;&amp; form.controls['name'].touched\" class=\"text-danger\">\n                    The field Software Part Name length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['number'].valid}\">\n            <label for=\"txtPartNumber\">Software Part Number</label>\n            <input id=\"txtPartNumber\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['number']\">\n            <div *ngIf=\"form.controls['number'].hasError('required') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number is required.\n            </div>\n            <!-- <div *ngIf=\"form.controls['number'].hasError('minlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number length should be up to 6 characters.\n            </div>\n            <div *ngIf=\"form.controls['number'].hasError('maxlength') &amp;&amp; form.controls['number'].touched\" class=\"text-danger\">\n                    The field Software Part Number length should be less than 25 characters.\n            </div> -->\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n            <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwareedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwareEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_software_service__ = __webpack_require__("../../../../../src/app/services/software.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoftwareEditComponent = (function () {
    function SoftwareEditComponent(formBuilder, service, location, router) {
        var _this = this;
        this.service = service;
        this.location = location;
        this.form = formBuilder.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            number: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        router.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.hid = +params['hid'];
            _this.getSubs = _this.service.Get(_this.id)
                .subscribe(function (h) {
                _this.hid = h.helicopterId;
                _this.form = formBuilder.group({
                    name: [h.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
                    number: [h.number, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
                });
            }, function (e) {
                console.log(e);
            });
        });
    }
    SoftwareEditComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
        if (this.editSubs) {
            this.editSubs.unsubscribe();
        }
    };
    SoftwareEditComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        if (model) {
            model.helicopterId = this.hid;
            this.editSubs = this.service.Update(this.id, model)
                .subscribe(function () {
                _this.goBack();
            }, function (e) {
                console.log(e);
            });
        }
    };
    SoftwareEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SoftwareEditComponent;
}());
SoftwareEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'softwareedit',
        template: __webpack_require__("../../../../../src/app/components/softwarepn/softwareedit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_software_service__["a" /* SoftwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_software_service__["a" /* SoftwarePartNumberService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], SoftwareEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=softwareedit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwarelist.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/fleet-management']\">Fleet Management</a></li>\n        <li><a [routerLink]=\"['/fleet-management', hid]\">{{hid}}</a></li>\n        <li class=\"active\">Software PN List</li>\n    </ol>\n    <hr>\n    <form class=\"form-inline\">\n            <div class=\"form-group\">\n              <label>Software Part Name</label>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Software Part Number</label>\n              <input type=\"email\" class=\"form-control\">\n            </div>\n    \n            <button type=\"button\" class=\"btn btn-default\">Search</button>\n            <button type=\"button\" class=\"btn btn-default\">Clear</button>\n            <a [routerLink]=\"['add']\" class=\"pull-right\"> <i class=\"glyphicon glyphicon-plus\"></i> New Software Part</a>\n          </form>\n        <br>\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-stripped\">\n            <thead>\n                <tr class=\"header-row\">\n                    <th>Software Part Name</th>\n                    <th>Software Part Number</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody class=\"table-body-centered\">\n                <tr *ngFor=\"let h of list\">\n                    <td>{{h.name}}</td>\n                    <td>{{h.number}}</td>\n                    <td>\n                        <a [routerLink]=\"['/fleet-management', hid, 'software', h.id]\">\n                            <i class=\"glyphicon glyphicon-edit\"></i>\n                        </a>\n                        <a (click)=\"confirmModal.show()\">\n                                <i class=\"glyphicon glyphicon-trash\"></i>\n                            </a>\n                        <div class=\"modal fade\" bsModal #confirmModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                            aria-hidden=\"true\">\n                            <div class=\"modal-dialog modal-sm\">\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <h4 class=\"modal-title pull-left\">Confirm delete?</h4>\n                                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmModal.hide()\">\n                                     <span aria-hidden=\"true\">&times;</span>\n                                     </button>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        do you want to remove the software part number?\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                        <button class=\"btn btn-default\" (click)=\"Remove(h.id, confirmModal)\">Yes</button>\n                                        <button class=\"btn btn-default\" (click)=\"confirmModal.hide()\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/softwarepn/softwarelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwareListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_software_service__ = __webpack_require__("../../../../../src/app/services/software.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoftwareListComponent = (function () {
    function SoftwareListComponent(location, router, service) {
        var _this = this;
        this.location = location;
        this.service = service;
        router.params.subscribe(function (params) {
            _this.hid = +params['hid'];
            _this.load();
        });
    }
    SoftwareListComponent.prototype.ngonDestroy = function () {
        if (this.getSub) {
            this.getSub.unsubscribe();
        }
        if (this.remSub) {
            this.remSub.unsubscribe();
        }
    };
    SoftwareListComponent.prototype.goBack = function () {
        this.location.back();
    };
    SoftwareListComponent.prototype.Remove = function (id, confirmModal) {
        var _this = this;
        this.remSub = this.service.Remove(id)
            .subscribe(function () {
            confirmModal.hide();
            _this.load();
        }, function (e) { return console.log; });
    };
    SoftwareListComponent.prototype.load = function () {
        var _this = this;
        this.getSub = this.service.GetByHelicopter(this.hid)
            .subscribe(function (list) {
            _this.list = list;
        }, function (e) {
            console.log(e);
        });
    };
    return SoftwareListComponent;
}());
SoftwareListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'softwarelist',
        template: __webpack_require__("../../../../../src/app/components/softwarepn/softwarelist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_software_service__["a" /* SoftwarePartNumberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_software_service__["a" /* SoftwarePartNumberService */]) === "function" && _c || Object])
], SoftwareListComponent);

var _a, _b, _c;
//# sourceMappingURL=softwarelist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/useradd.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <li><a [routerLink]=\"['/users']\">Users</a></li>\n    <li class=\"active\">Add</li>\n</ol>\n<hr>\n<form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['userName'].valid}\">\n        <label for=\"txtUserName\">Username</label>\n        <input id=\"txtUserName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['userName']\">\n        <div *ngIf=\"form.controls['userName'].hasError('required') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n            The field Username is required.\n        </div>\n        <div *ngIf=\"form.controls['userName'].hasError('minlength') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n                The field Username length should be up to 6 characters.\n        </div>\n        <div *ngIf=\"form.controls['userName'].hasError('maxlength') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n                The field Username length should be less than 25 characters.\n        </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['email'].valid}\">\n        <label for=\"txtEmail\">Email</label>\n        <input id=\"txtEmail\" type=\"email\" class=\"form-control\" [formControl]=\"form.controls['email']\">\n        <div *ngIf=\"form.controls['email'].hasError('required') &amp;&amp; form.controls['email'].touched\" class=\"text-danger\">\n                The field Email is required.\n        </div>\n        <div *ngIf=\"form.controls['email'].hasError('email') &amp;&amp; form.controls['email'].touched\" class=\"text-danger\">\n                The field Email is not an email.\n        </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['role'].valid}\">\n        <label for=\"cmbRole\"></label>\n        <select name=\"Role\" class=\"form-control\" id=\"cmbRole\" [formControl]=\"form.controls['role']\">\n            <option value=\"0\">Admin</option>\n            <option value=\"1\">Standard</option>\n        </select>\n        <div *ngIf=\"form.controls['role'].hasError('required') &amp;&amp; form.controls['role'].touched\" class=\"text-danger\">\n                The field Role is required.\n        </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['password'].valid &amp;&amp; form.controls['password'].touched}\">\n        <label for=\"txtPassword\">Password</label>\n        <input id=\"txtPassword\" type=\"password\" class=\"form-control\" [formControl]=\"form.controls['password']\">\n        <div *ngIf=\"form.controls['password'].hasError('required') &amp;&amp; form.controls['password'].touched\" class=\"text-danger\">\n                The field Password is required.\n        </div>\n        <div *ngIf=\"form.controls['password'].hasError('minlength') &amp;&amp; form.controls['password'].touched\" class=\"text-danger\">\n                The field Password length should be up to 6 characters.\n        </div>\n    </div>\n    <!-- <div class=\"form-group\" [hidden]=\"!Password.valid\"> -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['confirmPassword'].valid}\">\n        <label>Confirm Password</label>\n        <input id=\"txtConfirmPassword\" type=\"password\" class=\"form-control\" [formControl]=\"form.controls['confirmPassword']\">\n        <div *ngIf=\"form.controls['confirmPassword'].hasError('required') &amp;&amp; form.controls['confirmPassword'].touched\" class=\"text-danger\">\n                The field Confirm Password is required.\n        </div>\n        <div *ngIf=\"form.controls['confirmPassword'].hasError('minlength') &amp;&amp; form.controls['confirmPassword'].touched\" class=\"text-danger\">\n                The field Confirm Password length should be up to 6 characters.\n        </div>\n        <div *ngIf=\"form.controls['confirmPassword'].hasError('MatchPassword') &amp;&amp; form.controls['confirmPassword'].touched\" class=\"text-danger\">\n                The password does not match.\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n        <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users/useradd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_enums_IUserRole__ = __webpack_require__("../../../../../src/app/models/enums/IUserRole.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_password_validator__ = __webpack_require__("../../../../../src/app/validators/password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAddComponent = (function () {
    function UserAddComponent(formBuilder, usersService, location) {
        this.usersService = usersService;
        this.location = location;
        this.form = formBuilder.group({
            userName: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
            email: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            role: [__WEBPACK_IMPORTED_MODULE_1__models_enums_IUserRole__["a" /* UserRole */].Standard, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPassword: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_4__validators_password_validator__["a" /* PasswordValidator */].MatchPassword
        });
    }
    UserAddComponent.prototype.ngOnDestroy = function () {
        if (this.addSubs) {
            this.addSubs.unsubscribe();
        }
    };
    UserAddComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        this.addSubs = this.usersService.Save(model)
            .subscribe(function () {
            console.log("User saved!");
            _this.location.back();
        }, function (e) {
            console.log(e);
        });
    };
    UserAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'useradd',
        template: __webpack_require__("../../../../../src/app/components/users/useradd.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["b" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _c || Object])
], UserAddComponent);

var _a, _b, _c;
//# sourceMappingURL=useradd.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/useredit.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/users']\">Users</a></li>\n        <li class=\"active\">Edit</li>\n</ol>\n<hr>\n<form [formGroup]=\"form\" (ngSubmit)=\"Save(form.value)\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['userName'].valid}\">\n                <label for=\"txtUserName\">Username</label>\n                <input id=\"txtUserName\" type=\"text\" class=\"form-control\" [formControl]=\"form.controls['userName']\">\n                <div *ngIf=\"form.controls['userName'].hasError('required') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n                        The field Username is required.\n                </div>\n                <div *ngIf=\"form.controls['userName'].hasError('minlength') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n                        The field Username length should be up to 6 characters.\n                </div>\n                <div *ngIf=\"form.controls['userName'].hasError('maxlength') &amp;&amp; form.controls['userName'].touched\" class=\"text-danger\">\n                        The field Username length should be less than 25 characters.\n                </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['email'].valid}\">\n                <label for=\"txtEmail\">Email</label>\n                <input id=\"txtEmail\" type=\"email\" class=\"form-control\" [formControl]=\"form.controls['email']\">\n                <div *ngIf=\"form.controls['email'].hasError('required') &amp;&amp; form.controls['email'].touched\" class=\"text-danger\">\n                        The field Email is required.\n                </div>\n                <div *ngIf=\"form.controls['email'].hasError('email') &amp;&amp; form.controls['email'].touched\" class=\"text-danger\">\n                        The field Email is not an email.\n                </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !form.controls['role'].valid}\">\n                <label for=\"cmbRole\"></label>\n                <select name=\"Role\" class=\"form-control\" id=\"cmbRole\" [formControl]=\"form.controls['role']\">\n                <option value=\"0\">Admin</option>\n                <option value=\"1\">Standard</option>\n            </select>\n                <div *ngIf=\"form.controls['role'].hasError('required') &amp;&amp; form.controls['role'].touched\" class=\"text-danger\">\n                        The field Role is required.\n                </div>\n        </div>\n        <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-default\">Save</button>\n                <button type=\"reset\" class=\"btn btn-default\" (click)=\"goBack()\">Clear</button>\n        </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users/useredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = (function () {
    function UserEditComponent(usersService, route, location, formBuilder) {
        var _this = this;
        this.usersService = usersService;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            userName: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
            email: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            role: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.route.params.subscribe(function (params) {
            _this.userId = +params['id'];
            console.log(_this.userId);
            _this.editSubs = _this.usersService.Get(_this.userId)
                .subscribe(function (u) {
                _this.user = u;
                _this.form = _this.formBuilder.group({
                    userName: [_this.user.userName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)])],
                    email: [_this.user.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
                    role: [_this.user.role, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
                });
            }, function (e) {
                console.log(e);
            });
        });
    }
    UserEditComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
        if (this.editSubs) {
            this.editSubs.unsubscribe();
        }
    };
    UserEditComponent.prototype.Save = function (form) {
        var _this = this;
        var model = form;
        this.editSubs = this.usersService.Update(this.userId, model)
            .subscribe(function () {
            console.log("User updated!");
            _this.location.back();
        }, function (e) {
            console.log(e);
        });
    };
    UserEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'useredit',
        template: __webpack_require__("../../../../../src/app/components/users/useredit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* CreateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* CreateUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], UserEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=useredit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <li class=\"active\">Users</li>\n</ol>\n<hr>\n\n<form class=\"form-inline\">\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Role</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <button type=\"button\" class=\"btn btn-default\">Search</button>\n    <button type=\"button\" class=\"btn btn-default\">Clear</button>\n    <a [routerLink]=\"['add']\" class=\"pull-right\"> <i class=\"glyphicon glyphicon-plus\"></i> New User</a>\n</form>\n<br>\n<div class=\"table-responsive\">\n    <table class=\"table table-bordered table-stripped\">\n        <thead>\n            <tr class=\"header-row\">\n                <th>User Name</th>\n                <th>Email</th>\n                <th>Role</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody class=\"table-body-centered\">\n            <tr>\n                <tr>\n                    <tr *ngFor=\"let u of users\">\n                        <td>{{u.userName}}</td>\n                        <td>{{u.email}}</td>\n                        <td>{{u.role == 0 ? 'Admin' : 'Standard'}}</td>\n                        <td>\n                            <a [routerLink]=\"['/users', u.id]\">\n                        <i class=\"glyphicon glyphicon-edit\"></i>\n                    </a>\n                            <a (click)=\"confirmModal.show()\">\n                            <i class=\"glyphicon glyphicon-trash\"></i>\n                        </a>\n                            <div class=\"modal fade\" bsModal #confirmModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                                aria-hidden=\"true\">\n                                <div class=\"modal-dialog modal-sm\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h4 class=\"modal-title pull-left\">Confirm delete?</h4>\n                                            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmModal.hide()\">\n                                 <span aria-hidden=\"true\">&times;</span>\n                                 </button>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            do you want to remove the user?\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                            <button class=\"btn btn-default\" (click)=\"Remove(u.id, confirmModal)\">Yes</button>\n                                            <button class=\"btn btn-default\" (click)=\"confirmModal.hide()\">Cancel</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/users/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        if (this.getSubs) {
            this.getSubs.unsubscribe();
        }
        if (this.remSubs) {
            this.remSubs.unsubscribe();
        }
    };
    UserListComponent.prototype.onEditUser = function (user) {
        this.router.navigate(['/users/', user.id, '/edit']);
    };
    UserListComponent.prototype.Remove = function (id, confirmModal) {
        var _this = this;
        this.remSubs = this.usersService.Remove(id)
            .subscribe(function () {
            confirmModal.hide();
            _this.LoadUsers();
        }, function (e) {
            console.log(e);
        });
    };
    UserListComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.getSubs = this.usersService.GetList()
            .subscribe(function (u) {
            _this.users = u;
        }, function (e) {
            console.log(e);
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'userlist',
        template: __webpack_require__("../../../../../src/app/components/users/userlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["b" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=userlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/enums/ICertificateToView.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificateToView; });
var CertificateToView;
(function (CertificateToView) {
    CertificateToView[CertificateToView["wACS"] = 0] = "wACS";
    CertificateToView[CertificateToView["GSS"] = 1] = "GSS";
})(CertificateToView || (CertificateToView = {}));
//# sourceMappingURL=ICertificateToView.js.map

/***/ }),

/***/ "../../../../../src/app/models/enums/ILogToView.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogToView; });
var LogToView;
(function (LogToView) {
    LogToView[LogToView["Helicopters"] = 0] = "Helicopters";
    LogToView[LogToView["GSS"] = 1] = "GSS";
})(LogToView || (LogToView = {}));
//# sourceMappingURL=ILogToView.js.map

/***/ }),

/***/ "../../../../../src/app/models/enums/ILogType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogType; });
var LogType;
(function (LogType) {
    LogType[LogType["System"] = 0] = "System";
    LogType[LogType["Security"] = 1] = "Security";
})(LogType || (LogType = {}));
//# sourceMappingURL=ILogType.js.map

/***/ }),

/***/ "../../../../../src/app/models/enums/IUserRole.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRole; });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Standard"] = 1] = "Standard";
})(UserRole || (UserRole = {}));
//# sourceMappingURL=IUserRole.js.map

/***/ }),

/***/ "../../../../../src/app/services/airground.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirgroundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirgroundService = (function (_super) {
    __extends(AirgroundService, _super);
    function AirgroundService(config, http) {
        return _super.call(this, config.wACSCertificates, http) || this;
    }
    return AirgroundService;
}(__WEBPACK_IMPORTED_MODULE_3__crud_service__["b" /* GetService */]));
AirgroundService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], AirgroundService);

var _a, _b;
//# sourceMappingURL=airground.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = (function () {
    function AppConfig() {
        this.host = "http://localhost:5000/";
        this.baseUrl = this.host + "api/v1/";
        this.Users = this.baseUrl + "users";
        this.Helicopters = this.baseUrl + "helicopters";
        this.Hardware = this.baseUrl + "hardware";
        this.Software = this.baseUrl + "software";
        this.HelicopterLogs = this.baseUrl + "logs/helicopters";
        this.GSSLogs = this.baseUrl + "logs/gss";
        this.wACSCertificates = this.baseUrl + "certificates/wacs";
        this.GSSCertificates = this.baseUrl + "certificates/gss";
        this.ExportedFiles = this.baseUrl + "gamf";
        this.UploadMeta = this.baseUrl + "gamf/meta";
        this.UploadFile = this.baseUrl + "gamf/import";
        this.FileStatus = this.baseUrl + "gamf/status";
        this.Login = this.baseUrl + "login";
    }
    return AppConfig;
}());
AppConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AppConfig);

//# sourceMappingURL=app-config.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var token = this.sessionService.GetToken();
        if (localStorage.getItem("currentUser") && token && token != "") {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(config, http, sessionService) {
        this.config = config;
        this.http = http;
        this.sessionService = sessionService;
    }
    AuthenticationService.prototype.Login = function (user, password) {
        var _this = this;
        return this.http.post(this.config.Login, { user: user, password: password })
            .map(function (data) {
            if (data.logged) {
                localStorage.setItem("currentUser", JSON.stringify(data));
                _this.sessionService.Set(data.token);
            }
            return data;
        });
    };
    AuthenticationService.prototype.Logout = function () {
        localStorage.removeItem("currentUser");
        this.sessionService.Set("");
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */]) === "function" && _c || Object])
], AuthenticationService);

var _a, _b, _c;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cookies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CookiesService = (function () {
    function CookiesService(cookieService) {
        this.cookieService = cookieService;
    }
    CookiesService.prototype.Get = function (name) {
        if (!this.cookieService.get(name)) {
            return null;
        }
        return this.cookieService.getObject(name);
    };
    CookiesService.prototype.Set = function (name, value) {
        this.cookieService.putObject(name, value);
    };
    return CookiesService;
}());
CookiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object])
], CookiesService);

var _a;
//# sourceMappingURL=cookies.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OnlyGetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchService = (function () {
    function SearchService(endpoint, http) {
        this.endpoint = endpoint;
        this.http = http;
    }
    SearchService.prototype.Search = function (params) {
        //let url = this.endpoint + this.buildUrlWIthParameters(params);
        var parameters = this.buildUrlWIthParameters(params);
        //return this.http.get<T[]>(url,);
        return this.http.get(this.endpoint, { params: parameters });
    };
    SearchService.prototype.ChangeEndPoint = function (newEndPoint) {
        if (!newEndPoint) {
            throw new Error("The new endpoint should not be empty or null.");
        }
        this.endpoint = newEndPoint;
    };
    SearchService.prototype.buildUrlWIthParameters = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpParams */]();
        for (var p in data) {
            if (data.hasOwnProperty(p)) {
                var val = data[p];
                params = params.set(p, val);
            }
        }
        return params;
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SearchService);

var OnlyGetService = (function () {
    function OnlyGetService(endpoint, http) {
        this.endpoint = endpoint;
        this.http = http;
    }
    OnlyGetService.prototype.Get = function (id) {
        return this.http.get(this.endpoint + "/" + id);
    };
    OnlyGetService.prototype.GetList = function () {
        return this.http.get(this.endpoint);
    };
    OnlyGetService.prototype.ChangeEndPoint = function (newEndPoint) {
        if (!newEndPoint) {
            throw new Error("The new endpoint should not be empty or null.");
        }
        this.endpoint = newEndPoint;
    };
    return OnlyGetService;
}());
OnlyGetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], OnlyGetService);

var GetService = (function () {
    function GetService(endpoint, http) {
        this.endpoint = endpoint;
        this.http = http;
    }
    GetService.prototype.Get = function (id) {
        return this.http.get(this.endpoint + "/" + id);
    };
    GetService.prototype.GetList = function () {
        return this.http.get(this.endpoint);
    };
    GetService.prototype.ChangeEndPoint = function (newEndPoint) {
        if (!newEndPoint) {
            throw new Error("The new endpoint should not be empty or null.");
        }
        this.endpoint = newEndPoint;
    };
    return GetService;
}());
GetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], GetService);

var CrudService = (function (_super) {
    __extends(CrudService, _super);
    function CrudService(endpoint, http) {
        return _super.call(this, endpoint, http) || this;
    }
    CrudService.prototype.Save = function (data) {
        return this.http.post(this.endpoint, data);
    };
    CrudService.prototype.Update = function (id, data) {
        return this.http.put(this.endpoint + '/' + id, data);
    };
    CrudService.prototype.Remove = function (id) {
        return this.http.delete(this.endpoint + '/' + id);
    };
    return CrudService;
}(OnlyGetService));
CrudService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object])
], CrudService);

var _a, _b, _c, _d;
//# sourceMappingURL=crud.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/gamf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamfService = (function (_super) {
    __extends(GamfService, _super);
    function GamfService(config, http) {
        var _this = _super.call(this, config.ExportedFiles, http) || this;
        //private PrioritySelectItems: string[] = ['Low', 'Medium', 'High', 'Immediate'];
        _this.PrioritySelectItems = ['LOW', 'MED', 'HGH', 'IMM'];
        _this.FileTypeSelectItems = ['FLS', 'USR', 'OWF', 'HCF', 'SYS', 'SEC'];
        _this.TargetDomainSelectItems = ['AVCS', 'OOW', 'GOW'];
        _this.TargetApplicationSelectItems = ['FMS', 'AMC', 'DMAU', 'ACS', 'MISP', 'MFDAU', 'MNT', 'GNDA', 'OWA'];
        return _this;
    }
    GamfService.prototype.SaveMetadata = function (model) {
        return this.http.post(this.endpoint, model);
    };
    GamfService.prototype.GetPriorityList = function () {
        return this.PrioritySelectItems;
    };
    GamfService.prototype.GetFileTypeList = function () {
        return this.FileTypeSelectItems;
    };
    GamfService.prototype.GetTargetDomainList = function () {
        return this.TargetDomainSelectItems;
    };
    GamfService.prototype.GetTargetApplicationList = function () {
        return this.TargetApplicationSelectItems;
    };
    return GamfService;
}(__WEBPACK_IMPORTED_MODULE_3__crud_service__["d" /* SearchService */]));
GamfService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], GamfService);

var _a, _b;
//# sourceMappingURL=gamf.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hardware.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwarePartNumberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HardwarePartNumberService = (function (_super) {
    __extends(HardwarePartNumberService, _super);
    function HardwarePartNumberService(config, http) {
        return _super.call(this, config.Hardware, http) || this;
    }
    HardwarePartNumberService.prototype.GetByHelicopter = function (helicopterId) {
        var url = this.endpoint + '/' + helicopterId + '/list';
        return this.http.get(url);
    };
    return HardwarePartNumberService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));
HardwarePartNumberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], HardwarePartNumberService);

var _a, _b;
//# sourceMappingURL=hardware.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/helicopter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HelicopterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelicopterCrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelicopterService = (function (_super) {
    __extends(HelicopterService, _super);
    function HelicopterService(config, http) {
        return _super.call(this, config.Helicopters, http) || this;
    }
    return HelicopterService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["c" /* OnlyGetService */]));
HelicopterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], HelicopterService);

var HelicopterCrudService = (function (_super) {
    __extends(HelicopterCrudService, _super);
    function HelicopterCrudService(config, http) {
        return _super.call(this, config.Helicopters, http) || this;
    }
    return HelicopterCrudService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));
HelicopterCrudService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object])
], HelicopterCrudService);

var _a, _b, _c, _d;
//# sourceMappingURL=helicopter.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptorService = (function () {
    function InterceptorService(sessionService) {
        this.sessionService = sessionService;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        var authHeader = this.sessionService.GetToken();
        var authRequest = req.clone({ headers: req.headers.set("Authorization", authHeader) });
        return next.handle(authRequest);
    };
    return InterceptorService;
}());
InterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object])
], InterceptorService);

var _a;
//# sourceMappingURL=interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/logmanagement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogmanagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogmanagementService = (function (_super) {
    __extends(LogmanagementService, _super);
    function LogmanagementService(config, http) {
        return _super.call(this, config.HelicopterLogs, http) || this;
    }
    return LogmanagementService;
}(__WEBPACK_IMPORTED_MODULE_3__crud_service__["d" /* SearchService */]));
LogmanagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], LogmanagementService);

var _a, _b;
//# sourceMappingURL=logmanagement.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/polling.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollingService = (function () {
    function PollingService(http) {
        this.http = http;
        this.intervalTime = 5000;
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(0, this.intervalTime);
    }
    PollingService.prototype.Listening = function (url) {
        var _this = this;
        if (!url) {
            throw new Error("The url is undefined");
        }
        return this.timer.flatMap(function (i) { return _this.http.get(url); });
    };
    return PollingService;
}());
PollingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], PollingService);

var _a;
//# sourceMappingURL=polling.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookies_service__ = __webpack_require__("../../../../../src/app/services/cookies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = (function () {
    function SessionService(cookiesService) {
        this.cookiesService = cookiesService;
    }
    SessionService.prototype.Set = function (Token) {
        this.cookiesService.Set('session', Token);
    };
    SessionService.prototype.GetToken = function () {
        var session = this.cookiesService.Get('session');
        if (session) {
            return session;
        }
        return '';
    };
    SessionService.prototype.GetUser = function () {
        var token = this.GetToken();
        if (token != '') {
            return parseInt(token.split(";")[0]);
        }
        return null;
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cookies_service__["a" /* CookiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cookies_service__["a" /* CookiesService */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/software.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwarePartNumberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoftwarePartNumberService = (function (_super) {
    __extends(SoftwarePartNumberService, _super);
    function SoftwarePartNumberService(config, http) {
        return _super.call(this, config.Software, http) || this;
    }
    SoftwarePartNumberService.prototype.GetByHelicopter = function (helicopterId) {
        var url = this.endpoint + '/' + helicopterId + '/list';
        return this.http.get(url);
    };
    return SoftwarePartNumberService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));
SoftwarePartNumberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], SoftwarePartNumberService);

var _a, _b;
//# sourceMappingURL=software.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__ = __webpack_require__("../../../../../src/app/services/app-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(config, http) {
        return _super.call(this, config.Users, http) || this;
    }
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], UsersService);

var CreateUserService = (function (_super) {
    __extends(CreateUserService, _super);
    function CreateUserService(config, http) {
        return _super.call(this, config.Users, http) || this;
    }
    return CreateUserService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));
CreateUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_config_service__["a" /* AppConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object])
], CreateUserService);

var _a, _b, _c, _d;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/validators/password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.MatchPassword = function (AC) {
        var passwordControl = AC.get('password');
        var confirmPasswordControl = AC.get('confirmPassword');
        if (passwordControl != null && confirmPasswordControl != null) {
            var password = passwordControl.value;
            var confirmPassword = confirmPasswordControl.value;
            if (password != confirmPassword) {
                console.log('false');
                confirmPasswordControl.setErrors({ MatchPassword: true });
            }
        }
        else {
            return null;
        }
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map