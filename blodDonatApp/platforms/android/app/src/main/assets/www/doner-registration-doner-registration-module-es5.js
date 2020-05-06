function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doner-registration-doner-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-registration/doner-registration.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doner-registration/doner-registration.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonerRegistrationDonerRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title  class=\"title\">doner login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class=\"label-cl green-bg acct-sct item-row\" style=\"position:fixed\">\n  <ion-card>\n  \n  <form #f=\"ngForm\" (ngSubmit)=\"signUp(f)\">\n    \n\n    <ion-item>\n      <h4>please enter</h4>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"emailError\">Invalid E-mail</p> -->\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"Password\" name=\"password\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"passwordLengthError\">Invalid Password</p> -->\n\n    <div class=\"button-inline\">\n      <ion-button color=\"success\"[disabled]=\"!f.valid\"(click)=\"signUp(f)\">login</ion-button>\n    </div>\n  </form>\n</ion-card>\n</ion-content>\n";
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
        this.url = "http://192.168.1.103:5000";
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
  "./src/app/doner-registration/doner-registration-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/doner-registration/doner-registration-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DonerRegistrationPageRoutingModule */

  /***/
  function srcAppDonerRegistrationDonerRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerRegistrationPageRoutingModule", function () {
      return DonerRegistrationPageRoutingModule;
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


    var _doner_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./doner-registration.page */
    "./src/app/doner-registration/doner-registration.page.ts");

    var routes = [{
      path: '',
      component: _doner_registration_page__WEBPACK_IMPORTED_MODULE_3__["DonerRegistrationPage"]
    }];

    var DonerRegistrationPageRoutingModule = function DonerRegistrationPageRoutingModule() {
      _classCallCheck(this, DonerRegistrationPageRoutingModule);
    };

    DonerRegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DonerRegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/doner-registration/doner-registration.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/doner-registration/doner-registration.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DonerRegistrationPageModule */

  /***/
  function srcAppDonerRegistrationDonerRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerRegistrationPageModule", function () {
      return DonerRegistrationPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _doner_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./doner-registration-routing.module */
    "./src/app/doner-registration/doner-registration-routing.module.ts");
    /* harmony import */


    var _doner_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doner-registration.page */
    "./src/app/doner-registration/doner-registration.page.ts");

    var DonerRegistrationPageModule = function DonerRegistrationPageModule() {
      _classCallCheck(this, DonerRegistrationPageModule);
    };

    DonerRegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doner_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerRegistrationPageRoutingModule"]],
      declarations: [_doner_registration_page__WEBPACK_IMPORTED_MODULE_6__["DonerRegistrationPage"]]
    })], DonerRegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/doner-registration/doner-registration.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/doner-registration/doner-registration.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonerRegistrationDonerRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-inline {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZXItcmVnaXN0cmF0aW9uL0g6XFxkYXRhXFxpb25pY1xca2FtYWFsWmluZGFnaVxcYmxvZERvbmF0QXBwL3NyY1xcYXBwXFxkb25lci1yZWdpc3RyYXRpb25cXGRvbmVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmVyLXJlZ2lzdHJhdGlvbi9kb25lci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZG9uZXItcmVnaXN0cmF0aW9uL2RvbmVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWlubGluZXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn0iLCIuYnV0dG9uLWlubGluZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/doner-registration/doner-registration.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/doner-registration/doner-registration.page.ts ***!
    \***************************************************************/

  /*! exports provided: DonerRegistrationPage */

  /***/
  function srcAppDonerRegistrationDonerRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerRegistrationPage", function () {
      return DonerRegistrationPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DonerRegistrationPage = /*#__PURE__*/function () {
      function DonerRegistrationPage(service, router, loadingController, alertController) {
        _classCallCheck(this, DonerRegistrationPage);

        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isLoading = false;
        this.userdata = [];
        this.userarraydata = [];
      }

      _createClass(DonerRegistrationPage, [{
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
                        handler: function handler() {}
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
        key: "signUp",
        value: function signUp(f) {
          var _this3 = this;

          if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(f.form.value.email) == false) {
            return this.presentAlertConfirm("please fill valid email");
          }

          this.service.login(f.form.value).subscribe(function (data) {
            if (data['statusCode'] == 200 && data['data']) {
              _this3.userdata = [];

              _this3.userdata.push(data['data']);

              _this3.service.updatedUserData(true);

              _this3.router.navigate(["/home", JSON.stringify(_this3.userdata)]);
            }
          }, function (error) {
            return _this3.presentAlertConfirm(error.error['message']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DonerRegistrationPage;
    }();

    DonerRegistrationPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    DonerRegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doner-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doner-registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-registration/doner-registration.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doner-registration.page.scss */
      "./src/app/doner-registration/doner-registration.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], DonerRegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=doner-registration-doner-registration-module-es5.js.map