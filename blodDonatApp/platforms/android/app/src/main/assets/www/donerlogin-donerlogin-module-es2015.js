(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donerlogin-donerlogin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title  class=\"title\">doner Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class=\"label-cl green-bg acct-sct item-row\" style=\"position:fixed\">\n  <ion-card>\n  <h2 class=\"center-col\">Create An Account</h2>\n  <form #f=\"ngForm\" (ngSubmit)=\"signUp(f)\">\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input type=\"text\" name=\"name\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"usernameError\">Invalid Username</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"emailError\">Invalid E-mail</p> -->\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"Password\" name=\"password\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"passwordLengthError\">Invalid Password</p> -->\n    <ion-item>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"Password\" name=\"confirm_password\" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">phoneNumber</ion-label>\n      <ion-input type=\"number\" name=\"phoneNumber\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"phonenumberError\">Invalid phoneNumber</p> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">bloodGroupName</ion-label>\n      <ion-input type=\"text\" name=\"bloodGroupName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"emailError\">Invalid bloodGroupName</p>  -->\n \n    <ion-item>\n      <ion-label position=\"floating\">districtName</ion-label>\n      <ion-input type=\"text\" name=\"districtName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"districtNameError\">Invalid DistrictName</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">State Name</ion-label>\n      <ion-input type=\"text\" name=\"StateName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"StateNameError\">Invalid StateName</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">country Name</ion-label>\n      <ion-input type=\"text\" name=\"countryname\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"countrynameError\">Invalid countrytName</p> -->\n\n    \n   \n    <div class=\"button-inline\">\n      <ion-button color=\"success\"[disabled]=\"!f.valid\"(click)=\"signUp(f)\">Register</ion-button>\n    </div>\n  </form>\n</ion-card>\n</ion-content>\n");

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
        this.url = "http://192.168.0.100:5000";
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

/***/ "./src/app/donerlogin/donerlogin-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/donerlogin/donerlogin-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DonerloginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerloginPageRoutingModule", function() { return DonerloginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _donerlogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donerlogin.page */ "./src/app/donerlogin/donerlogin.page.ts");




const routes = [
    {
        path: '',
        component: _donerlogin_page__WEBPACK_IMPORTED_MODULE_3__["DonerloginPage"]
    }
];
let DonerloginPageRoutingModule = class DonerloginPageRoutingModule {
};
DonerloginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonerloginPageRoutingModule);



/***/ }),

/***/ "./src/app/donerlogin/donerlogin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/donerlogin/donerlogin.module.ts ***!
  \*************************************************/
/*! exports provided: DonerloginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerloginPageModule", function() { return DonerloginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _donerlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donerlogin-routing.module */ "./src/app/donerlogin/donerlogin-routing.module.ts");
/* harmony import */ var _donerlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donerlogin.page */ "./src/app/donerlogin/donerlogin.page.ts");







let DonerloginPageModule = class DonerloginPageModule {
};
DonerloginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donerlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerloginPageRoutingModule"]
        ],
        declarations: [_donerlogin_page__WEBPACK_IMPORTED_MODULE_6__["DonerloginPage"]]
    })
], DonerloginPageModule);



/***/ }),

/***/ "./src/app/donerlogin/donerlogin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/donerlogin/donerlogin.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-inline {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZXJsb2dpbi9IOlxcZGF0YVxcaW9uaWNcXGthbWFhbFppbmRhZ2lcXGJsb2REb25hdEFwcC9zcmNcXGFwcFxcZG9uZXJsb2dpblxcZG9uZXJsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmVybG9naW4vZG9uZXJsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kb25lcmxvZ2luL2RvbmVybG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idXR0b24taW5saW5le1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufSIsIi5idXR0b24taW5saW5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/donerlogin/donerlogin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/donerlogin/donerlogin.page.ts ***!
  \***********************************************/
/*! exports provided: DonerloginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerloginPage", function() { return DonerloginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DonerloginPage = class DonerloginPage {
    constructor(service, loadingController, alertController, router) {
        this.service = service;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.isLoading = false;
        this.usersuccesData = [];
    }
    ngOnInit() { }
    present() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController
                .create({
                message: "please wait",
            })
                .then((a) => {
                a.present().then(() => {
                    console.log("presented");
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
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    signUp(f) {
        if (f.form.value.password !== f.form.value.confirm_password) {
            return this.presentAlertConfirm("password and confirm password does not match");
        }
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(f.form.value.email) ==
            false) {
            return this.presentAlertConfirm("please fill valid email");
        }
        this.service.userLogin(f.form.value).subscribe((data) => {
            if (data['statusCode'] == 200 && data['message'] == "item saved to the database") {
                this.usersuccesData = [];
                data['fromlogin'];
                this.usersuccesData.push(data['result']);
                this.router.navigate([
                    "/home",
                    JSON.stringify(this.usersuccesData),
                ]);
            }
            else {
                return this.presentAlertConfirm(" user not register something went wrong!");
            }
        }, error => {
            console.log(error);
            return this.presentAlertConfirm(error.error.message);
        });
    }
};
DonerloginPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DonerloginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-donerlogin",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donerlogin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donerlogin.page.scss */ "./src/app/donerlogin/donerlogin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DonerloginPage);



/***/ })

}]);
//# sourceMappingURL=donerlogin-donerlogin-module-es2015.js.map