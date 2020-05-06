function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donerlogin-donerlogin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonerloginDonerloginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title  class=\"title\">doner Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class=\"label-cl green-bg acct-sct item-row\" style=\"position:fixed\">\n  <ion-card>\n  <h2 class=\"center-col\">Create An Account</h2>\n  <form #f=\"ngForm\" (ngSubmit)=\"signUp(f)\">\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input type=\"text\" name=\"name\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"usernameError\">Invalid Username</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"emailError\">Invalid E-mail</p> -->\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"Password\" name=\"password\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"passwordLengthError\">Invalid Password</p> -->\n    <ion-item>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"Password\" name=\"confirm_password\" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">phoneNumber</ion-label>\n      <ion-input type=\"number\" name=\"phoneNumber\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"phonenumberError\">Invalid phoneNumber</p> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">bloodGroupName</ion-label>\n      <ion-input type=\"text\" name=\"bloodGroupName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"emailError\">Invalid bloodGroupName</p>  -->\n \n    <ion-item>\n      <ion-label position=\"floating\">districtName</ion-label>\n      <ion-input type=\"text\" name=\"districtName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"districtNameError\">Invalid DistrictName</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">State Name</ion-label>\n      <ion-input type=\"text\" name=\"StateName\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"StateNameError\">Invalid StateName</p> -->\n\n\n    <ion-item>\n      <ion-label position=\"floating\">country Name</ion-label>\n      <ion-input type=\"text\" name=\"countryname\" ngModel required></ion-input>\n    </ion-item>\n    <!-- <p style=\"color:red;text-align: left\" *ngIf=\"countrynameError\">Invalid countrytName</p> -->\n\n    \n   \n    <div class=\"button-inline\">\n      <ion-button color=\"success\"[disabled]=\"!f.valid\"(click)=\"signUp(f)\">Register</ion-button>\n    </div>\n  </form>\n</ion-card>\n</ion-content>\n";
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
  "./src/app/donerlogin/donerlogin-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/donerlogin/donerlogin-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DonerloginPageRoutingModule */

  /***/
  function srcAppDonerloginDonerloginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerloginPageRoutingModule", function () {
      return DonerloginPageRoutingModule;
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


    var _donerlogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./donerlogin.page */
    "./src/app/donerlogin/donerlogin.page.ts");

    var routes = [{
      path: '',
      component: _donerlogin_page__WEBPACK_IMPORTED_MODULE_3__["DonerloginPage"]
    }];

    var DonerloginPageRoutingModule = function DonerloginPageRoutingModule() {
      _classCallCheck(this, DonerloginPageRoutingModule);
    };

    DonerloginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DonerloginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/donerlogin/donerlogin.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/donerlogin/donerlogin.module.ts ***!
    \*************************************************/

  /*! exports provided: DonerloginPageModule */

  /***/
  function srcAppDonerloginDonerloginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerloginPageModule", function () {
      return DonerloginPageModule;
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


    var _donerlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./donerlogin-routing.module */
    "./src/app/donerlogin/donerlogin-routing.module.ts");
    /* harmony import */


    var _donerlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./donerlogin.page */
    "./src/app/donerlogin/donerlogin.page.ts");

    var DonerloginPageModule = function DonerloginPageModule() {
      _classCallCheck(this, DonerloginPageModule);
    };

    DonerloginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donerlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerloginPageRoutingModule"]],
      declarations: [_donerlogin_page__WEBPACK_IMPORTED_MODULE_6__["DonerloginPage"]]
    })], DonerloginPageModule);
    /***/
  },

  /***/
  "./src/app/donerlogin/donerlogin.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/donerlogin/donerlogin.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonerloginDonerloginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-inline {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZXJsb2dpbi9IOlxcZGF0YVxcaW9uaWNcXGthbWFhbFppbmRhZ2lcXGJsb2REb25hdEFwcC9zcmNcXGFwcFxcZG9uZXJsb2dpblxcZG9uZXJsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvbmVybG9naW4vZG9uZXJsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kb25lcmxvZ2luL2RvbmVybG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idXR0b24taW5saW5le1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufSIsIi5idXR0b24taW5saW5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/donerlogin/donerlogin.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/donerlogin/donerlogin.page.ts ***!
    \***********************************************/

  /*! exports provided: DonerloginPage */

  /***/
  function srcAppDonerloginDonerloginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerloginPage", function () {
      return DonerloginPage;
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

    var DonerloginPage = /*#__PURE__*/function () {
      function DonerloginPage(service, loadingController, alertController, router) {
        _classCallCheck(this, DonerloginPage);

        this.service = service;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.isLoading = false;
        this.usersuccesData = [];
      }

      _createClass(DonerloginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
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
                        console.log("presented");

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

          if (f.form.value.password !== f.form.value.confirm_password) {
            return this.presentAlertConfirm("password and confirm password does not match");
          }

          if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(f.form.value.email) == false) {
            return this.presentAlertConfirm("please fill valid email");
          }

          this.service.userLogin(f.form.value).subscribe(function (data) {
            if (data['statusCode'] == 200 && data['message'] == "item saved to the database") {
              _this3.usersuccesData = [];
              data['fromlogin'];

              _this3.usersuccesData.push(data['result']);

              _this3.router.navigate(["/home", JSON.stringify(_this3.usersuccesData)]);
            } else {
              return _this3.presentAlertConfirm(" user not register something went wrong!");
            }
          }, function (error) {
            console.log(error);
            return _this3.presentAlertConfirm(error.error.message);
          });
        }
      }]);

      return DonerloginPage;
    }();

    DonerloginPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DonerloginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-donerlogin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./donerlogin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donerlogin/donerlogin.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./donerlogin.page.scss */
      "./src/app/donerlogin/donerlogin.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DonerloginPage);
    /***/
  }
}]);
//# sourceMappingURL=donerlogin-donerlogin-module-es5.js.map