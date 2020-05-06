(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doner-country-doner-country-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-country/doner-country.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doner-country/doner-country.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">donerCountry</ion-title>\n  </ion-toolbar>\n  <ion-toolbar aria-colcount=\"danger\" class=\"toolbar\">\n    <ion-title class=\"note\">\n      <h4>please select Country </h4>\n  </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"countrystate\">\n          <ion-list>\n            <ion-item *ngFor=\"let country of countryData\">\n              <ion-label class=\"blodfor\" (click)=\"getstate(country)\">{{country}}\n                <input class=\"blodfor1\" name=\"country\" type=\"radio\"/>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-card class=\"footer\" >\n    <ion-button color=\"secondary\" (click)=\"goback()\">back</ion-button>\n    <ion-button class=\"nextbutton\"  color=\"success\" (click)=\"goStatePage()\">next</ion-button>\n  </ion-card>\n</ion-footer>");

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

/***/ "./src/app/doner-country/doner-country-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/doner-country/doner-country-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DonerCountryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerCountryPageRoutingModule", function() { return DonerCountryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doner_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doner-country.page */ "./src/app/doner-country/doner-country.page.ts");




const routes = [
    {
        path: '',
        component: _doner_country_page__WEBPACK_IMPORTED_MODULE_3__["DonerCountryPage"]
    }
];
let DonerCountryPageRoutingModule = class DonerCountryPageRoutingModule {
};
DonerCountryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonerCountryPageRoutingModule);



/***/ }),

/***/ "./src/app/doner-country/doner-country.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/doner-country/doner-country.module.ts ***!
  \*******************************************************/
/*! exports provided: DonerCountryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerCountryPageModule", function() { return DonerCountryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _doner_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doner-country-routing.module */ "./src/app/doner-country/doner-country-routing.module.ts");
/* harmony import */ var _doner_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doner-country.page */ "./src/app/doner-country/doner-country.page.ts");







let DonerCountryPageModule = class DonerCountryPageModule {
};
DonerCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doner_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerCountryPageRoutingModule"]
        ],
        declarations: [_doner_country_page__WEBPACK_IMPORTED_MODULE_6__["DonerCountryPage"]]
    })
], DonerCountryPageModule);



/***/ }),

/***/ "./src/app/doner-country/doner-country.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/doner-country/doner-country.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmVyLWNvdW50cnkvZG9uZXItY291bnRyeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/doner-country/doner-country.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/doner-country/doner-country.page.ts ***!
  \*****************************************************/
/*! exports provided: DonerCountryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerCountryPage", function() { return DonerCountryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let DonerCountryPage = class DonerCountryPage {
    constructor(service, router, loadingController, alertController, route, nav) {
        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.nav = nav;
        this.showState = false;
        this.cdata = [];
        this.countryData = [];
        this.route.params.subscribe((params) => {
            this.activUserData = JSON.parse(params.data);
        }, (error) => {
            console.log(error);
        });
    }
    goback() {
        this.nav.back();
    }
    ngOnInit() {
        this.getContryData(this.activUserData);
    }
    getContryData(blod) {
        this.service.present();
        this.cdata = [];
        this.countryData = [];
        localStorage.removeItem("blod");
        localStorage.setItem("blod", blod);
        this.service.updatedDataSelection(blod);
        this.service.getcounty(blod).subscribe((data) => {
            if (data["statusCode"] == 200) {
                this.cdata = data["data"];
                this.cdata.forEach((elem) => {
                    if (!this.countryData.find((o) => o == elem["countryName"])) {
                        this.countryData.push(elem["countryName"]);
                    }
                });
                this.service.dismiss();
            }
        }, (error) => {
            this.service.dismiss();
        });
    }
    getstate(country) {
        this.editinfo = " ";
        this.editinfo = country;
        if (this.editinfo != "") {
            this.showState = true;
        }
        this.showState = false;
    }
    goStatePage() {
        this.router.navigate(["/doner-state", JSON.stringify(this.editinfo)]);
    }
};
DonerCountryPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
DonerCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-doner-country",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doner-country.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-country/doner-country.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doner-country.page.scss */ "./src/app/doner-country/doner-country.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], DonerCountryPage);



/***/ })

}]);
//# sourceMappingURL=doner-country-doner-country-module-es2015.js.map