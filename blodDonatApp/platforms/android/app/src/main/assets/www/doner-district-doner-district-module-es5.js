function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doner-district-doner-district-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-district/doner-district.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doner-district/doner-district.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonerDistrictDonerDistrictPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"title\">doner District</ion-title>\n  </ion-toolbar>\n  <ion-toolbar aria-colcount=\"danger\" class=\"toolbar\">\n    <ion-title class=\"note\">\n      <h4>please select District </h4>\n  </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"countrystate\">\n          <ion-list>\n            <ion-item *ngFor=\"let dist of districtdata\">\n              <ion-label class=\"blodfor\" (click)=\"getuserchecked(dist)\">{{dist}}\n                <input class=\"blodfor1\" name=\"dist\" type=\"radio\" />\n              </ion-label>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-card class=\"footer\" >\n    <ion-button color=\"secondary\" (click)=\"goback()\">back</ion-button>\n    <ion-button expand=\"block\" class=\"nextbutton\" color=\"success\" (click)=\"getuser()\" [disabled]=\"!showuser\">search doner</ion-button>\n  </ion-card>\n</ion-footer>";
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
  "./src/app/doner-district/doner-district-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/doner-district/doner-district-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DonerDistrictPageRoutingModule */

  /***/
  function srcAppDonerDistrictDonerDistrictRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerDistrictPageRoutingModule", function () {
      return DonerDistrictPageRoutingModule;
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


    var _doner_district_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./doner-district.page */
    "./src/app/doner-district/doner-district.page.ts");

    var routes = [{
      path: '',
      component: _doner_district_page__WEBPACK_IMPORTED_MODULE_3__["DonerDistrictPage"]
    }];

    var DonerDistrictPageRoutingModule = function DonerDistrictPageRoutingModule() {
      _classCallCheck(this, DonerDistrictPageRoutingModule);
    };

    DonerDistrictPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DonerDistrictPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/doner-district/doner-district.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/doner-district/doner-district.module.ts ***!
    \*********************************************************/

  /*! exports provided: DonerDistrictPageModule */

  /***/
  function srcAppDonerDistrictDonerDistrictModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerDistrictPageModule", function () {
      return DonerDistrictPageModule;
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


    var _doner_district_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./doner-district-routing.module */
    "./src/app/doner-district/doner-district-routing.module.ts");
    /* harmony import */


    var _doner_district_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doner-district.page */
    "./src/app/doner-district/doner-district.page.ts");

    var DonerDistrictPageModule = function DonerDistrictPageModule() {
      _classCallCheck(this, DonerDistrictPageModule);
    };

    DonerDistrictPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doner_district_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonerDistrictPageRoutingModule"]],
      declarations: [_doner_district_page__WEBPACK_IMPORTED_MODULE_6__["DonerDistrictPage"]]
    })], DonerDistrictPageModule);
    /***/
  },

  /***/
  "./src/app/doner-district/doner-district.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/doner-district/doner-district.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonerDistrictDonerDistrictPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmVyLWRpc3RyaWN0L2RvbmVyLWRpc3RyaWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/doner-district/doner-district.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/doner-district/doner-district.page.ts ***!
    \*******************************************************/

  /*! exports provided: DonerDistrictPage */

  /***/
  function srcAppDonerDistrictDonerDistrictPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonerDistrictPage", function () {
      return DonerDistrictPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var DonerDistrictPage = /*#__PURE__*/function () {
      function DonerDistrictPage(service, router, loadingController, alertController, route, nav) {
        var _this2 = this;

        _classCallCheck(this, DonerDistrictPage);

        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.nav = nav;
        this.ddata = [];
        this.singledist = [];
        this.districtdata = [];
        this.userdata = [];
        this.showuser = false;
        this.route.params.subscribe(function (params) {
          _this2.activUserData = JSON.parse(params.data);
        }, function (error) {
          console.log(error);
        });
      }

      _createClass(DonerDistrictPage, [{
        key: "goback",
        value: function goback() {
          this.nav.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getdistrictdata(this.activUserData);
        }
      }, {
        key: "getdistrictdata",
        value: function getdistrictdata(distName) {
          var _this3 = this;

          localStorage.removeItem("dist");
          localStorage.setItem("dist", distName);
          this.service.present();
          this.ddata = [];
          this.districtdata = [];
          this.service.getdisrrict(distName).subscribe(function (data) {
            if (data["statusCode"] == 200) {
              _this3.ddata = data["data"];

              _this3.ddata.forEach(function (elem) {
                if (!_this3.districtdata.find(function (o) {
                  return o == elem["districtName"];
                })) {
                  _this3.districtdata.push(elem["districtName"]);
                }
              });

              _this3.showuser = false;

              _this3.service.dismiss();
            }
          }, function (error) {
            _this3.service.dismiss();
          });
        }
      }, {
        key: "getuserchecked",
        value: function getuserchecked(checkeduser) {
          this.checuser = "";
          this.checuser = checkeduser;

          if (this.checuser != "") {
            this.showuser = true;
          } else {
            this.showuser = false;
          }
        }
      }, {
        key: "getuser",
        value: function getuser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.singledist = [];
                    _context4.next = 3;
                    return this.ddata.find(function (o) {
                      return o["districtName"] == _this4.checuser;
                    });

                  case 3:
                    this.singledist = _context4.sent;

                    if (this.singledist) {
                      this.service.user(this.singledist).subscribe(function (data) {
                        if (data["statusCode"] == 200) {
                          _this4.userdata = data["result"];

                          if (_this4.userdata.length > 0) {
                            _this4.router.navigate(["/doner-info", JSON.stringify(_this4.userdata)]);
                          } else {
                            return _this4.service.presentAlertConfirm(data["message"]);
                          }
                        }
                      });
                    }

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return DonerDistrictPage;
    }();

    DonerDistrictPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    DonerDistrictPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-doner-district",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doner-district.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doner-district/doner-district.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doner-district.page.scss */
      "./src/app/doner-district/doner-district.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], DonerDistrictPage);
    /***/
  }
}]);
//# sourceMappingURL=doner-district-doner-district-module-es5.js.map