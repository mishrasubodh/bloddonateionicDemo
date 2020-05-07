(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doner-info-doner-info-module"],{

/***/ "./node_modules/@ionic-native/call-number/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var CallNumber = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
    CallNumber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CallNumber);
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztJQW5CSixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBaEN2QjtFQWdDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDYWxsIE51bWJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDYWxsIGEgbnVtYmVyIGRpcmVjdGx5IGZyb20geW91ciBDb3Jkb3ZhL0lvbmljIGFwcGxpY2F0aW9uLlxuICogKipOT1RFKio6IFRoZSBpT1MgU2ltdWxhdG9yIChhbmQgbWF5YmUgQW5kcm9pZCBTaW11bGF0b3JzKSBkbyBub3QgcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIHBob25lIHN1YnN5c3RlbS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbnVtYmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTnVtYmVyOiBDYWxsTnVtYmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jYWxsTnVtYmVyLmNhbGxOdW1iZXIoXCIxODAwMTAxMDEwMVwiLCB0cnVlKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0xhdW5jaGVkIGRpYWxlciEnLCByZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgZGlhbGVyJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbE51bWJlcicsXG4gIHBsdWdpbjogJ2NhbGwtbnVtYmVyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5DYWxsTnVtYmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Sb2hmb3Noby9Db3Jkb3ZhQ2FsbE51bWJlclBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-info/doner-info.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doner-info/doner-info.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">donerInfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-grid>\n    <div *ngFor=\"let d of data;  let i = index\">\n      \n      \n          <ion-row (click)=\"showinfo(d)\">\n            <ion-col *ngIf=\"data\" size=\"3\">\n              <ion-list>\n                <ion-item class=\"usrname\">\n                  <ion-label>{{d.bloodGroupName}}</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col *ngIf=\"data\" size=\"9\">\n              <ion-list>\n                <ion-item class=\"username\">\n                  <ion-label class=\"blodfor\">{{d.userName}} </ion-label>\n                  <span class=\"blodfor\">{{d.phoneNumber}}</span>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n  \n        <ion-grid class=\"sharegrid\">\n          <ion-row>\n            <ion-col size=\"4\" (click)=\"calldoner(d)\">\n              <img class=\"imgclass\" src=\"../../assets/img/phon.png\" alt=\"Smiley face\" height=\"42\" width=\"42\">\n              <ion-label class=\"call\">Call</ion-label>\n            </ion-col>\n            <ion-col size=\"4\" (click)=\"messagedoner(d)\">\n              <img class=\"imgclass\" src=\"../../assets/img/messae.jpg\" alt=\"Smiley face\" height=\"42\" width=\"42\">\n              <ion-label class=\"message\">Message</ion-label>\n            </ion-col>\n            <ion-col size=\"4\" (click)=\"sharedoner(d)\">\n              <img class=\"imgclass\" src=\"../../assets/img/share1.jpg\" alt=\"Smiley face\" height=\"42\" width=\"42\">\n              <ion-label class=\"Share\">Share</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n    </div>\n  </ion-grid>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/doner-info/doner-info-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/doner-info/doner-info-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DonerInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerInfoPageRoutingModule", function() { return DonerInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doner_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doner-info.page */ "./src/app/doner-info/doner-info.page.ts");




const routes = [
    {
        path: '',
        component: _doner_info_page__WEBPACK_IMPORTED_MODULE_3__["DonerInfoPage"]
    }
];
let DonerInfoPageRoutingModule = class DonerInfoPageRoutingModule {
};
DonerInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonerInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/doner-info/doner-info.module.ts":
/*!*************************************************!*\
  !*** ./src/app/doner-info/doner-info.module.ts ***!
  \*************************************************/
/*! exports provided: DonerInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerInfoPageModule", function() { return DonerInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doner-info-routing.module */ "./src/app/doner-info/doner-info-routing.module.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _doner_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doner-info.page */ "./src/app/doner-info/doner-info.page.ts");








let DonerInfoPageModule = class DonerInfoPageModule {
};
DonerInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerInfoPageRoutingModule"],
        ],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]],
        declarations: [_doner_info_page__WEBPACK_IMPORTED_MODULE_7__["DonerInfoPage"]],
    })
], DonerInfoPageModule);



/***/ }),

/***/ "./src/app/doner-info/doner-info.page.scss":
/*!*************************************************!*\
  !*** ./src/app/doner-info/doner-info.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 48px;\n}\n\n.blood {\n  background-color: #dc6969;\n}\n\n.username {\n  background-color: #dc6a6a;\n}\n\nion-item.usrname {\n  --background: url('photoblod.jpg') 0 0/100% 100% no-repeat;\n}\n\n.imgclass {\n  max-width: 100%;\n  border: 0;\n  width: 74%;\n}\n\n.call {\n  padding-left: 20px;\n}\n\n.message {\n  padding-left: 6px;\n}\n\n.Share {\n  padding-left: 16px;\n}\n\n.sharegrid {\n  border-style: double;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZXItaW5mby9IOlxcZGF0YVxcaW9uaWNcXGthbWFhbFppbmRhZ2lcXGJsb2REb25hdEFwcC9zcmNcXGFwcFxcZG9uZXItaW5mb1xcZG9uZXItaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmVyLWluZm8vZG9uZXItaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLDBEQUFBO0FDR0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QUREQTtFQUNJLG9CQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9kb25lci1pbmZvL2RvbmVyLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLmJsb29ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjNjk2OTtcclxufVxyXG4udXNlcm5hbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2YTZhO1xyXG59XHJcbmlvbi1pdGVtLnVzcm5hbWV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9waG90b2Jsb2QuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG4uaW1nY2xhc3N7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogNzQlO1xyXG59XHJcblxyXG4uY2FsbHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ubWVzc2FnZXtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcbi5TaGFyZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuLnNoYXJlZ3JpZHtcclxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG59IiwiaW9uLWltZyB7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJsb29kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjNjk2OTtcbn1cblxuLnVzZXJuYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjNmE2YTtcbn1cblxuaW9uLWl0ZW0udXNybmFtZSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9waG90b2Jsb2QuanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uaW1nY2xhc3Mge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDc0JTtcbn1cblxuLmNhbGwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5TaGFyZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnNoYXJlZ3JpZCB7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/doner-info/doner-info.page.ts":
/*!***********************************************!*\
  !*** ./src/app/doner-info/doner-info.page.ts ***!
  \***********************************************/
/*! exports provided: DonerInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonerInfoPage", function() { return DonerInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sms_sms_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sms/sms.page */ "./src/app/sms/sms.page.ts");
/* harmony import */ var _share_share_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/share.page */ "./src/app/share/share.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");







let DonerInfoPage = class DonerInfoPage {
    constructor(route, callNumber, modalController) {
        this.route = route;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.items = [];
        this.route.params.subscribe((params) => {
            this.data = JSON.parse(params["data"]);
        });
    }
    ngOnInit() {
    }
    showinfo(donerdata) {
        console.log("click on user");
        //   jQuery(function($) {
        //   $( document ).ready(function() {
        //     $('.collapse').on('show.bs.collapse', function () {
        //       $('.collapse').not(this).collapse('hide');
        //     });
        //   });
        // });
    }
    calldoner(d) {
        this.callNumber.callNumber(d.phoneNumber, true)
            .then((res) => console.log("Launched dialer!", res))
            .catch((err) => console.log("Error launching dialer", err));
    }
    messagedoner(d) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _sms_sms_page__WEBPACK_IMPORTED_MODULE_4__["SmsPage"],
                cssClass: "my-custom-modal-css",
                componentProps: {
                    number: d.phoneNumber,
                },
            });
            return yield modal.present();
        });
    }
    sharedoner(d) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _share_share_page__WEBPACK_IMPORTED_MODULE_5__["SharePage"],
                cssClass: "y-custom-modal-css",
                componentProps: {
                    data: d,
                },
            });
            return yield modal.present();
        });
    }
};
DonerInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DonerInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-doner-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doner-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-info/doner-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doner-info.page.scss */ "./src/app/doner-info/doner-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], DonerInfoPage);



/***/ })

}]);
//# sourceMappingURL=doner-info-doner-info-module-es2015.js.map