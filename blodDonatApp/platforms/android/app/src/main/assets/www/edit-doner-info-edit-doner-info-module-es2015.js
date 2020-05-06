(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-doner-info-edit-doner-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Edit Doner Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <form novalidate (ngSubmit)=\"signup(userData)\" [formGroup]=\"signupform\">\n      <!-- name -->\n      <ion-item>\n        <ion-label position=\"floating\">Name </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userData.name\" formControlName=\"name\" [class.error1]=\"!signupform.controls.name.valid && signupform.controls.name.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('name').hasError('minlength') || signupform.get('name').hasError('maxlength') ||signupform.get('name').hasError('pattern') ||signupform.get('name').hasError('required') ) && signupform.get('name').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('required') && signupform.get('name').touched\">\n          Please input your name\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('minlength') && signupform.get('name').touched\">\n          Minimum 4 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('maxlength') && signupform.get('name').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('pattern') && signupform.get('name').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n<!-- email -->\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" readonly [(ngModel)]=\"userData.email\" formControlName=\"email\" [class.error1]=\"!signupform.controls.email.valid && signupform.controls.email.dirty\" (click)=\"presentAlertConfirm('you can not change you email')\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('email').hasError('minlength') || signupform.get('email').hasError('pattern') ||signupform.get('email').hasError('required') ) && signupform.get('email').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('required') && signupform.get('email').touched\">\n          Please input your email\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('pattern') && signupform.get('email').touched\">\n          Email address invalid\n        </div>\n      </ion-item>\n<!-- bloodgroupname -->\n      <ion-item>\n        <ion-label position=\"floating\">bloodGroupname </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userData.bloodGroupName\" formControlName=\"bloodGroupName\" [class.error1]=\"!signupform.controls.bloodGroupName.valid && signupform.controls.bloodGroupName.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('bloodGroupName').hasError('minlength') || signupform.get('bloodGroupName').hasError('maxlength') ||signupform.get('bloodGroupName').hasError('pattern') ||signupform.get('bloodGroupName').hasError('required') ) && signupform.get('bloodGroupName').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('required') && signupform.get('bloodGroupName').touched\">\n          Please input blodgroup name\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('minlength') && signupform.get('bloodGroupName').touched\">\n          Minimum 1 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('maxlength') && signupform.get('bloodGroupName').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('pattern') && signupform.get('bloodGroupName').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n     \n<!-- phonenumber -->\n<ion-item>\n  <ion-label position=\"floating\">phoneNumber </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.phoneNumber\" formControlName=\"phoneNumber\" [class.error1]=\"!signupform.controls.phoneNumber.valid && signupform.controls.phoneNumber.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('phoneNumber').hasError('minlength') || signupform.get('phoneNumber').hasError('maxlength') ||signupform.get('phoneNumber').hasError('pattern') ||signupform.get('phoneNumber').hasError('required') ) && signupform.get('phoneNumber').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('required') && signupform.get('phoneNumber').touched\">\n    Please input valid phone number\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('minlength') && signupform.get('bloodGroupName').touched\">\n    Minimum 1 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('maxlength') && signupform.get('phoneNumber').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('pattern') && signupform.get('phoneNumber').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- countryname -->\n\n<ion-item>\n  <ion-label position=\"floating\">countryName </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.countryName\" formControlName=\"countryName\" [class.error1]=\"!signupform.controls.countryName.valid && signupform.controls.countryName.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('countryName').hasError('minlength') || signupform.get('countryName').hasError('maxlength') ||signupform.get('countryName').hasError('pattern') ||signupform.get('countryName').hasError('required') ) && signupform.get('countryName').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('required') && signupform.get('countryName').touched\">\n    Please input country Name\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('minlength') && signupform.get('countryName').touched\">\n    Minimum 1 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('maxlength') && signupform.get('countryName').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('pattern') && signupform.get('countryName').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- statename -->\n<ion-item>\n  <ion-label position=\"floating\">stateName </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.stateName\" formControlName=\"stateName\" [class.error1]=\"!signupform.controls.stateName.valid && signupform.controls.stateName.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('stateName').hasError('minlength') || signupform.get('stateName').hasError('maxlength') ||signupform.get('stateName').hasError('pattern') ||signupform.get('stateName').hasError('required') ) && signupform.get('stateName').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('required') && signupform.get('stateName').touched\">\n    Please input state name\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('minlength') && signupform.get('stateName').touched\">\n    Minimum 4 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('maxlength') && signupform.get('stateName').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('pattern') && signupform.get('stateName').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- districtName -->\n\n<ion-item>\n  <ion-label position=\"floating\">districtname </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.districtname\" formControlName=\"districtname\" [class.error1]=\"!signupform.controls.districtname.valid && signupform.controls.districtname.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('districtname').hasError('minlength') || signupform.get('districtname').hasError('maxlength') ||signupform.get('districtname').hasError('pattern') ||signupform.get('districtname').hasError('required') ) && signupform.get('districtname').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('required') && signupform.get('districtname').touched\">\n    Please input district name \n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('minlength') && signupform.get('districtname').touched\">\n    Minimum 3 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('maxlength') && signupform.get('districtname').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('pattern') && signupform.get('districtname').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n<div class=\"button-inline\">\n\n  <ion-button type=\"submit\" color=\"primary\" [disabled]=\"signupform.invalid\">SAVE</ion-button>\n</div>\n    </form>\n  </ion-list>\n</ion-content>\n\n \n");

/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AuthService = class AuthService {
    constructor(Http, loadingController, alertController, route) {
        this.Http = Http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.isLoading = false;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.data = this.dataSource.asObservable();
        this.showuser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.showUserData = this.showuser.asObservable();
        this.url = "http://192.168.1.103:5000";
    }
    present() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController
                .create({
                message: "please wait",
            })
                .then((a) => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => { });
                    }
                });
            });
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController
                .dismiss()
                .then(() => { });
        });
    }
    presentAlertConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm!",
                message: msg,
                buttons: [
                    // {
                    //   text: 'Cancel',
                    //   role: 'cancel',
                    //   cssClass: 'secondary',
                    //   handler: (blah) => {
                    //     console.log('Confirm Cancel: blah');
                    //   }
                    // },
                    {
                        text: "Okay",
                        cssClass: "secondary",
                        handler: () => {
                            //  console.log("Confirm Okay");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    updatedDataSelection(data) {
        this.dataSource.next(data);
    }
    updatedUserData(data) {
        this.showuser.next(data);
    }
    userLogin(data) {
        return this.Http.post(`${this.url}/user_group`, data);
    }
    useredit(data) {
        return this.Http.post(`${this.url}/user_group/edit`, data);
    }
    deleteuser(email) {
        return this.Http.post(`${this.url}/user_group/remove`, { email });
    }
    getBoodGroupData() {
        return this.Http.get(`${this.url}/blood_Group`);
    }
    getcounty(bloodGroupName) {
        return this.Http.post(`${this.url}/country_group`, { bloodGroupName });
    }
    getstate(countryName) {
        return this.Http.get(`${this.url}/state_group?${`countryName`}=${countryName}`);
    }
    getdisrrict(distnamrName) {
        return this.Http.get(`${this.url}/district_group?${`statename`}=${distnamrName}`);
    }
    user(distdata) {
        delete distdata._id;
        delete distdata.__v;
        distdata["blodGroup"] = this.data.source["_value"];
        return this.Http.post(`${this.url}/user_group/getuser`, distdata);
    }
    login(logindata) {
        return this.Http.post(`${this.url}/email_data/login`, logindata);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], AuthService);



/***/ }),

/***/ "./src/app/edit-doner-info/edit-doner-info-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/edit-doner-info/edit-doner-info-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditDonerInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDonerInfoPageRoutingModule", function() { return EditDonerInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-doner-info.page */ "./src/app/edit-doner-info/edit-doner-info.page.ts");




const routes = [
    {
        path: '',
        component: _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_3__["EditDonerInfoPage"]
    }
];
let EditDonerInfoPageRoutingModule = class EditDonerInfoPageRoutingModule {
};
EditDonerInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditDonerInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-doner-info/edit-doner-info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit-doner-info/edit-doner-info.module.ts ***!
  \***********************************************************/
/*! exports provided: EditDonerInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDonerInfoPageModule", function() { return EditDonerInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-doner-info-routing.module */ "./src/app/edit-doner-info/edit-doner-info-routing.module.ts");
/* harmony import */ var _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-doner-info.page */ "./src/app/edit-doner-info/edit-doner-info.page.ts");







let EditDonerInfoPageModule = class EditDonerInfoPageModule {
};
EditDonerInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _edit_doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDonerInfoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_edit_doner_info_page__WEBPACK_IMPORTED_MODULE_6__["EditDonerInfoPage"]]
    })
], EditDonerInfoPageModule);



/***/ }),

/***/ "./src/app/edit-doner-info/edit-doner-info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/edit-doner-info/edit-doner-info.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  color: #df3e3e;\n  font-size: 11px;\n}\n\n.error1 {\n  color: #4b4b4b;\n  border-bottom: 1px solid #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1kb25lci1pbmZvL0g6XFxkYXRhXFxpb25pY1xca2FtYWFsWmluZGFnaVxcYmxvZERvbmF0QXBwL3NyY1xcYXBwXFxlZGl0LWRvbmVyLWluZm9cXGVkaXQtZG9uZXItaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtZG9uZXItaW5mby9lZGl0LWRvbmVyLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1kb25lci1pbmZvL2VkaXQtZG9uZXItaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigyMjMsIDYyLCA2Mik7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3IxIHtcclxuICAgIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICB9IiwiLmVycm9yIHtcbiAgY29sb3I6ICNkZjNlM2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmVycm9yMSB7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMDAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit-doner-info/edit-doner-info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit-doner-info/edit-doner-info.page.ts ***!
  \*********************************************************/
/*! exports provided: EditDonerInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDonerInfoPage", function() { return EditDonerInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");








let EditDonerInfoPage = class EditDonerInfoPage {
    constructor(route, service, router, loadingController, alertController) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isLoading = false;
        this.userdata = [];
        //
        //userdat={}
        this.userData = { "name": "", "email": "", "bloodGroupName": "", "phoneNumber": "", "countryName": "", "stateName": "", "districtname": "" };
        //userData = { "name": "", "email": "", "bloodGroupName": "", "phoneNumber": "" ,"countryName": "", "stateName": "", "districtname": "" };
        this.data = [];
        this.datafromHome();
    }
    present() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController
                .create({
                message: "please wait",
            })
                .then((a) => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log("abort presenting"));
                    }
                });
            });
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController
                .dismiss()
                .then(() => console.log("dismissed"));
        });
    }
    presentAlertConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm!",
                message: msg,
                buttons: [
                    {
                        text: "Okay",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Okay");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    datafromHome() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.route.params.subscribe(params => {
                this.data = JSON.parse(params['data']);
            });
        });
    }
    ngOnInit() {
        this.userData.name = this.data[0].userName;
        this.userData.email = this.data[0].email;
        this.userData.bloodGroupName = this.data[0].bloodGroupName;
        this.userData.phoneNumber = this.data[0].phoneNumber;
        this.userData.countryName = this.data[0].countryName;
        this.userData.stateName = this.data[0].stateName;
        this.userData.districtname = this.data[0].stateName;
        let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(EMAILPATTERN)]),
            bloodGroupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]),
            countryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            stateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            districtname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
        });
    }
    signup(userData) {
        userData['_id'] = this.data[0]._id;
        this.present();
        console.log(userData, "userData userData");
        this.service.useredit(userData).subscribe((data) => {
            console.log(data, "data");
            if (data['statusCode'] == 200 && data['result']) {
                this.dismiss();
                this.userdata = [];
                this.userdata.push(data['result']);
                this.service.updatedUserData(true);
                this.router.navigate([
                    "/home",
                    JSON.stringify(this.userdata),
                ]);
            }
        }, error => {
            this.dismiss();
            console.log(error);
            return this.presentAlertConfirm(error['message']);
        });
    }
};
EditDonerInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditDonerInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-doner-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-doner-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-doner-info.page.scss */ "./src/app/edit-doner-info/edit-doner-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], EditDonerInfoPage);



/***/ })

}]);
//# sourceMappingURL=edit-doner-info-edit-doner-info-module-es2015.js.map