webpackJsonp([3],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__(150);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, loader, newsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.newsService = newsService;
        this.news1Url = "https://dev-labs.000webhostapp.com/api/v1/news";
        // news1Url = "api/v1/news";
        this.news = [];
    }
    NewsPage.prototype.openUrl = function (url) {
        window.open(url, '_system', 'location=yes');
    };
    NewsPage.prototype.createLoader = function () {
        return this.loader.create({
            spinner: 'hide',
            content: "Loading Please Wait...",
            duration: 20000
        });
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.createLoader();
        loading.present();
        this.newsService.getNews(this.news1Url).subscribe(function (res) {
            _this.news = res.data.twitter;
            console.log(_this.news);
            //this.news = this.news.concat(res.data.wordpress);
            _this.news = _this.news.sort(function (a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
            _this.news.forEach(function (nws) {
                nws.text = nws.text.replace(/&\w+;\s*/g, ' ');
            });
            loading.dismiss();
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/jeandanieldaumont/eja/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title text-center>Actualités</ion-title>\n\n    <ion-buttons right>\n        <button ion-button icon-only style="color: #ebebeb">\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <div padding text-center>\n    <img src="assets/imgs/me_voici.png" alt="">\n  </div>\n\n    <!-- <ion-card *ngFor="let nws of news">\n      <ion-card-content>\n        {{nws.text}}\n      </ion-card-content>\n      <ion-row>\n          <ion-col align-self-center text-left>\n            <ion-note>\n              {{nws.created_at| date:\'short\'}}\n            </ion-note>\n          </ion-col>\n          <ion-avatar>\n           </ion-avatar>\n          <ion-col ion-button clear text-right (click)="openUrl(nws.url)">\n              Lire la suite\n          </ion-col>\n        </ion-row>\n    </ion-card> -->\n\n    <ion-card *ngFor="let nws of news">\n      <img src="{{nws.images}}"/>\n      <ion-card-content>\n        <ion-card-title>\n          {{nws.text}}\n          </ion-card-title>\n          <ion-row>\n            <ion-col align-self-center text-left>\n              <ion-note>\n                {{nws.created_at| date:\'short\'}}\n              </ion-note>\n            </ion-col>\n            <ion-col ion-button clear text-right (click)="openUrl(nws.url)">\n                Lire la suite\n            </ion-col>\n          </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n  <!-- <div text-center>\n\n    <h2 style="font-weight:lighter !important">Bientot les JIJ 2019</h2>\n    <p text-wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n\n  </div>\n\n  <div padding text-center>\n    <button ion-button icon-start round>\n        <ion-icon name="ios-paper-plane"></ion-icon>\n        INSCRIPTION\n      </button>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/jeandanieldaumont/eja/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=3.js.map