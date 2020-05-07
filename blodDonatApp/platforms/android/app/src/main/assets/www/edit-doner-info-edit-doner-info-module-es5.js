function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-doner-info-edit-doner-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditDonerInfoEditDonerInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Edit Doner Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <form novalidate (ngSubmit)=\"signup(userData)\" [formGroup]=\"signupform\">\n      <!-- name -->\n      <ion-item>\n        <ion-label position=\"floating\">Name </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userData.name\" formControlName=\"name\" [class.error1]=\"!signupform.controls.name.valid && signupform.controls.name.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('name').hasError('minlength') || signupform.get('name').hasError('maxlength') ||signupform.get('name').hasError('pattern') ||signupform.get('name').hasError('required') ) && signupform.get('name').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('required') && signupform.get('name').touched\">\n          Please input your name\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('minlength') && signupform.get('name').touched\">\n          Minimum 4 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('maxlength') && signupform.get('name').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('name').hasError('pattern') && signupform.get('name').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n<!-- email -->\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" readonly [(ngModel)]=\"userData.email\" formControlName=\"email\" [class.error1]=\"!signupform.controls.email.valid && signupform.controls.email.dirty\" (click)=\"presentAlertConfirm('you can not change you email')\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('email').hasError('minlength') || signupform.get('email').hasError('pattern') ||signupform.get('email').hasError('required') ) && signupform.get('email').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('required') && signupform.get('email').touched\">\n          Please input your email\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('pattern') && signupform.get('email').touched\">\n          Email address invalid\n        </div>\n      </ion-item>\n<!-- bloodgroupname -->\n      <ion-item>\n        <ion-label position=\"floating\">bloodGroupname </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userData.bloodGroupName\" formControlName=\"bloodGroupName\" [class.error1]=\"!signupform.controls.bloodGroupName.valid && signupform.controls.bloodGroupName.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('bloodGroupName').hasError('minlength') || signupform.get('bloodGroupName').hasError('maxlength') ||signupform.get('bloodGroupName').hasError('pattern') ||signupform.get('bloodGroupName').hasError('required') ) && signupform.get('bloodGroupName').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('required') && signupform.get('bloodGroupName').touched\">\n          Please input blodgroup name\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('minlength') && signupform.get('bloodGroupName').touched\">\n          Minimum 1 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('maxlength') && signupform.get('bloodGroupName').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('bloodGroupName').hasError('pattern') && signupform.get('bloodGroupName').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n     \n<!-- phonenumber -->\n<ion-item>\n  <ion-label position=\"floating\">phoneNumber </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.phoneNumber\" formControlName=\"phoneNumber\" [class.error1]=\"!signupform.controls.phoneNumber.valid && signupform.controls.phoneNumber.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('phoneNumber').hasError('minlength') || signupform.get('phoneNumber').hasError('maxlength') ||signupform.get('phoneNumber').hasError('pattern') ||signupform.get('phoneNumber').hasError('required') ) && signupform.get('phoneNumber').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('required') && signupform.get('phoneNumber').touched\">\n    Please input valid phone number\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('minlength') && signupform.get('bloodGroupName').touched\">\n    Minimum 1 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('maxlength') && signupform.get('phoneNumber').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('phoneNumber').hasError('pattern') && signupform.get('phoneNumber').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- countryname -->\n\n<ion-item>\n  <ion-label position=\"floating\">countryName </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.countryName\" formControlName=\"countryName\" [class.error1]=\"!signupform.controls.countryName.valid && signupform.controls.countryName.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('countryName').hasError('minlength') || signupform.get('countryName').hasError('maxlength') ||signupform.get('countryName').hasError('pattern') ||signupform.get('countryName').hasError('required') ) && signupform.get('countryName').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('required') && signupform.get('countryName').touched\">\n    Please input country Name\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('minlength') && signupform.get('countryName').touched\">\n    Minimum 1 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('maxlength') && signupform.get('countryName').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('countryName').hasError('pattern') && signupform.get('countryName').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- statename -->\n<ion-item>\n  <ion-label position=\"floating\">stateName </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.stateName\" formControlName=\"stateName\" [class.error1]=\"!signupform.controls.stateName.valid && signupform.controls.stateName.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('stateName').hasError('minlength') || signupform.get('stateName').hasError('maxlength') ||signupform.get('stateName').hasError('pattern') ||signupform.get('stateName').hasError('required') ) && signupform.get('stateName').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('required') && signupform.get('stateName').touched\">\n    Please input state name\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('minlength') && signupform.get('stateName').touched\">\n    Minimum 4 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('maxlength') && signupform.get('stateName').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('stateName').hasError('pattern') && signupform.get('stateName').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n\n<!-- districtName -->\n\n<ion-item>\n  <ion-label position=\"floating\">districtname </ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"userData.districtname\" formControlName=\"districtname\" [class.error1]=\"!signupform.controls.districtname.valid && signupform.controls.districtname.dirty\"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf=\"( signupform.get('districtname').hasError('minlength') || signupform.get('districtname').hasError('maxlength') ||signupform.get('districtname').hasError('pattern') ||signupform.get('districtname').hasError('required') ) && signupform.get('districtname').touched\">\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('required') && signupform.get('districtname').touched\">\n    Please input district name \n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('minlength') && signupform.get('districtname').touched\">\n    Minimum 3 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('maxlength') && signupform.get('districtname').touched\">\n    Maximum 30 characters\n  </div>\n  <div class=\"error\" *ngIf=\"signupform.get('districtname').hasError('pattern') && signupform.get('districtname').touched\">\n    Just use alphabet character\n  </div>\n</ion-item>\n<div class=\"button-inline\">\n\n  <ion-button type=\"submit\" color=\"primary\" [disabled]=\"signupform.invalid\">SAVE</ion-button>\n</div>\n    </form>\n  </ion-list>\n</ion-content>\n\n \n";
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(Http, loadingController, alertController, route) {
        _classCallCheck(this, AuthService);

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

      _createClass(AuthService, [{
        key: "present",
        value: function present() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingController.create({
                      message: "please wait"
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loadingController.dismiss().then(function () {});

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: "Confirm!",
                      message: msg,
                      buttons: [// {
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
                        handler: function handler() {//  console.log("Confirm Okay");
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updatedDataSelection",
        value: function updatedDataSelection(data) {
          this.dataSource.next(data);
        }
      }, {
        key: "updatedUserData",
        value: function updatedUserData(data) {
          this.showuser.next(data);
        }
      }, {
        key: "userLogin",
        value: function userLogin(data) {
          return this.Http.post("".concat(this.url, "/user_group"), data);
        }
      }, {
        key: "useredit",
        value: function useredit(data) {
          return this.Http.post("".concat(this.url, "/user_group/edit"), data);
        }
      }, {
        key: "deleteuser",
        value: function deleteuser(email) {
          return this.Http.post("".concat(this.url, "/user_group/remove"), {
            email: email
          });
        }
      }, {
        key: "getBoodGroupData",
        value: function getBoodGroupData() {
          return this.Http.get("".concat(this.url, "/blood_Group"));
        }
      }, {
        key: "getcounty",
        value: function getcounty(bloodGroupName) {
          return this.Http.post("".concat(this.url, "/country_group"), {
            bloodGroupName: bloodGroupName
          });
        }
      }, {
        key: "getstate",
        value: function getstate(countryName) {
          return this.Http.get("".concat(this.url, "/state_group?", "countryName", "=").concat(countryName));
        }
      }, {
        key: "getdisrrict",
        value: function getdisrrict(distnamrName) {
          return this.Http.get("".concat(this.url, "/district_group?", "statename", "=").concat(distnamrName));
        }
      }, {
        key: "user",
        value: function user(distdata) {
          delete distdata._id;
          delete distdata.__v;
          distdata["blodGroup"] = this.data.source["_value"];
          return this.Http.post("".concat(this.url, "/user_group/getuser"), distdata);
        }
      }, {
        key: "login",
        value: function login(logindata) {
          return this.Http.post("".concat(this.url, "/email_data/login"), logindata);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/edit-doner-info/edit-doner-info-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/edit-doner-info/edit-doner-info-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EditDonerInfoPageRoutingModule */

  /***/
  function srcAppEditDonerInfoEditDonerInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDonerInfoPageRoutingModule", function () {
      return EditDonerInfoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-doner-info.page */
    "./src/app/edit-doner-info/edit-doner-info.page.ts");

    var routes = [{
      path: '',
      component: _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_3__["EditDonerInfoPage"]
    }];

    var EditDonerInfoPageRoutingModule = function EditDonerInfoPageRoutingModule() {
      _classCallCheck(this, EditDonerInfoPageRoutingModule);
    };

    EditDonerInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditDonerInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit-doner-info/edit-doner-info.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/edit-doner-info/edit-doner-info.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditDonerInfoPageModule */

  /***/
  function srcAppEditDonerInfoEditDonerInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDonerInfoPageModule", function () {
      return EditDonerInfoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _edit_doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-doner-info-routing.module */
    "./src/app/edit-doner-info/edit-doner-info-routing.module.ts");
    /* harmony import */


    var _edit_doner_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-doner-info.page */
    "./src/app/edit-doner-info/edit-doner-info.page.ts");

    var EditDonerInfoPageModule = function EditDonerInfoPageModule() {
      _classCallCheck(this, EditDonerInfoPageModule);
    };

    EditDonerInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _edit_doner_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDonerInfoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      declarations: [_edit_doner_info_page__WEBPACK_IMPORTED_MODULE_6__["EditDonerInfoPage"]]
    })], EditDonerInfoPageModule);
    /***/
  },

  /***/
  "./src/app/edit-doner-info/edit-doner-info.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/edit-doner-info/edit-doner-info.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditDonerInfoEditDonerInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error {\n  color: #df3e3e;\n  font-size: 11px;\n}\n\n.error1 {\n  color: #4b4b4b;\n  border-bottom: 1px solid #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1kb25lci1pbmZvL0g6XFxkYXRhXFxpb25pY1xca2FtYWFsWmluZGFnaVxcYmxvZERvbmF0QXBwL3NyY1xcYXBwXFxlZGl0LWRvbmVyLWluZm9cXGVkaXQtZG9uZXItaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtZG9uZXItaW5mby9lZGl0LWRvbmVyLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1kb25lci1pbmZvL2VkaXQtZG9uZXItaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigyMjMsIDYyLCA2Mik7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3IxIHtcclxuICAgIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICB9IiwiLmVycm9yIHtcbiAgY29sb3I6ICNkZjNlM2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmVycm9yMSB7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit-doner-info/edit-doner-info.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/edit-doner-info/edit-doner-info.page.ts ***!
    \*********************************************************/

  /*! exports provided: EditDonerInfoPage */

  /***/
  function srcAppEditDonerInfoEditDonerInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDonerInfoPage", function () {
      return EditDonerInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditDonerInfoPage = /*#__PURE__*/function () {
      function EditDonerInfoPage(route, service, router, loadingController, alertController) {
        _classCallCheck(this, EditDonerInfoPage);

        this.route = route;
        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isLoading = false;
        this.userdata = []; //
        //userdat={}

        this.userData = {
          "name": "",
          "email": "",
          "bloodGroupName": "",
          "phoneNumber": "",
          "countryName": "",
          "stateName": "",
          "districtname": ""
        }; //userData = { "name": "", "email": "", "bloodGroupName": "", "phoneNumber": "" ,"countryName": "", "stateName": "", "districtname": "" };

        this.data = [];
        this.datafromHome();
      }

      _createClass(EditDonerInfoPage, [{
        key: "present",
        value: function present() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = true;
                    _context4.next = 3;
                    return this.loadingController.create({
                      message: "please wait"
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this2.isLoading) {
                          a.dismiss().then(function () {
                            return console.log("abort presenting");
                          });
                        }
                      });
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = false;
                    _context5.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log("dismissed");
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: "Confirm!",
                      message: msg,
                      buttons: [{
                        text: "Okay",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Okay");
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "datafromHome",
        value: function datafromHome() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.route.params.subscribe(function (params) {
                      _this3.data = JSON.parse(params['data']);
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData.name = this.data[0].userName;
          this.userData.email = this.data[0].email;
          this.userData.bloodGroupName = this.data[0].bloodGroupName;
          this.userData.phoneNumber = this.data[0].phoneNumber;
          this.userData.countryName = this.data[0].countryName;
          this.userData.stateName = this.data[0].stateName;
          this.userData.districtname = this.data[0].stateName;
          var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
          this.signupform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(EMAILPATTERN)]),
            bloodGroupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]),
            countryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            stateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            districtname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
          });
        }
      }, {
        key: "signup",
        value: function signup(userData) {
          var _this4 = this;

          userData['_id'] = this.data[0]._id;
          this.present();
          console.log(userData, "userData userData");
          this.service.useredit(userData).subscribe(function (data) {
            console.log(data, "data");

            if (data['statusCode'] == 200 && data['result']) {
              _this4.dismiss();

              _this4.userdata = [];

              _this4.userdata.push(data['result']);

              _this4.service.updatedUserData(true);

              _this4.router.navigate(["/home", JSON.stringify(_this4.userdata)]);
            }
          }, function (error) {
            _this4.dismiss();

            console.log(error);
            return _this4.presentAlertConfirm(error['message']);
          });
        }
      }]);

      return EditDonerInfoPage;
    }();

    EditDonerInfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    EditDonerInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-doner-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-doner-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-doner-info/edit-doner-info.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-doner-info.page.scss */
      "./src/app/edit-doner-info/edit-doner-info.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], EditDonerInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-doner-info-edit-doner-info-module-es5.js.map