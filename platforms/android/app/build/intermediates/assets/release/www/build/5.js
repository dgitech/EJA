webpackJsonp([5],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPageModule", function() { return InformationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informations__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationsPageModule = /** @class */ (function () {
    function InformationsPageModule() {
    }
    InformationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__informations__["a" /* InformationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__informations__["a" /* InformationsPage */]),
            ],
        })
    ], InformationsPageModule);
    return InformationsPageModule;
}());

//# sourceMappingURL=informations.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InformationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationsPage = /** @class */ (function () {
    function InformationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InformationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationsPage');
    };
    InformationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informations',template:/*ion-inline-start:"/Users/jeandanieldaumont/eja/src/pages/informations/informations.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title text-center> JIJ 2019</ion-title>\n    <ion-buttons right>\n        <button ion-button icon-only style="color: #ebebeb">\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="icontent">\n      <img style="display: block" src="assets/imgs/person.jpg" alt="">\n      <ion-slides autoplay="4500" loop="true">\n          <ion-slide>\n            <div text-center padding>\n                <h1>HERE I AM</h1>\n                <p>« Me voici » – c’est ainsi que Dieu me parle ! </p>\n            </div>\n          </ion-slide>\n          <ion-slide>\n          <div text-center padding>\n                <h1>HERE I AM</h1>\n                <p>« Me voici » – c’est ainsi que je réponds lorsque Dieu m’appelle !</p>\n          </div>\n          </ion-slide>\n          <ion-slide>\n          <div text-center padding>\n                <h1>HERE I AM</h1>\n                <p>« Me voici » – ma position actuelle !</p>\n          </div>\n          </ion-slide>\n          <ion-slide>\n          <div text-center padding>\n                <h1>HERE I AM</h1>\n                <p>« Me voici » – mon souhait de m’investir au sein de ma communauté !</p>\n          </div>\n          </ion-slide>\n          <ion-slide>\n          <div text-center padding>\n                <h1>JIJ 2019</h1>\n                <p>Suivez nous sur les réseaux sociaux et www.espacejeunes.org</p>\n          </div>\n          </ion-slide>\n      </ion-slides>\n      <ion-grid>\n          <ion-row  style="border-top: solid 0.56px;background-color: #488aff; color: #ffffff">\n              <ion-col padding text-center >\n                    <img class="animated pulse" src="assets/imgs/insta.png" href="www.dgitech.fr" alt="">\n              </ion-col>\n              <ion-col padding text-center>\n                  <img class="animated pulse" src="assets/imgs/fb.png" alt="">\n              </ion-col>\n            </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeandanieldaumont/eja/src/pages/informations/informations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InformationsPage);
    return InformationsPage;
}());

//# sourceMappingURL=informations.js.map

/***/ })

});
//# sourceMappingURL=5.js.map