webpackJsonp([7],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CguPageModule", function() { return CguPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgu__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CguPageModule = /** @class */ (function () {
    function CguPageModule() {
    }
    CguPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cgu__["a" /* CguPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cgu__["a" /* CguPage */]),
            ],
        })
    ], CguPageModule);
    return CguPageModule;
}());

//# sourceMappingURL=cgu.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CguPage; });
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
 * Generated class for the CguPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CguPage = /** @class */ (function () {
    function CguPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CguPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CguPage');
    };
    CguPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cgu',template:/*ion-inline-start:"/Users/jeandanieldaumont/eja/src/pages/cgu/cgu.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title text-center>Politique de confidentialité</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n <p><b>Qui sommes-nous&nbsp;?</b></p>\n<p>L&rsquo;adresse de notre site Web est&nbsp;: http://www.espacejeunes.org.</p>\n<p>Utilisation des donn&eacute;es personnelles collect&eacute;es</p>\n<p><strong>Commentaires</strong></p>\n<p>Quand vous laissez un commentaire sur notre site web, les donn&eacute;es inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l&rsquo;agent utilisateur de votre navigateur sont collect&eacute;s pour nous aider &agrave; la d&eacute;tection des commentaires ind&eacute;sirables.</p>\n<p><strong>Formulaires de contact</strong></p>\n<p><em>Cookies</em></p>\n<p>Si vous d&eacute;posez un commentaire sur notre site, il vous sera propos&eacute; d&rsquo;enregistrer votre nom, adresse de messagerie et site web dans des cookies. C&rsquo;est uniquement pour votre confort afin de ne pas avoir &agrave; saisir ces informations si vous d&eacute;posez un autre commentaire plus tard. Ces cookies expirent au bout d&rsquo;un an.</p>\n<p>Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera cr&eacute;&eacute; afin de d&eacute;terminer si votre navigateur accepte les cookies. Il ne contient pas de donn&eacute;es personnelles et sera supprim&eacute; automatiquement &agrave; la fermeture de votre navigateur.</p>\n<p>Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos pr&eacute;f&eacute;rences d&rsquo;&eacute;cran. La dur&eacute;e de vie d&rsquo;un cookie de connexion est de deux jours, celle d&rsquo;un cookie d&rsquo;option d&rsquo;&eacute;cran est d&rsquo;un an. Si vous cochez &laquo;&nbsp;Se souvenir de moi&nbsp;&raquo;, votre cookie de connexion sera conserv&eacute; pendant deux semaines. Si vous vous d&eacute;connectez de votre compte, le cookie de connexion sera effac&eacute;.</p>\n<p>En modifiant ou en publiant un article, un cookie suppl&eacute;mentaire sera enregistr&eacute; dans votre navigateur. Ce cookie ne comprend aucune donn&eacute;e personnelle. Il indique simplement l&rsquo;identifiant de l&rsquo;article que vous venez de modifier. Il expire au bout d&rsquo;un jour.</p>\n<p><em>Contenu embarqu&eacute; depuis d&rsquo;autres sites</em></p>\n<p>Les articles de ce site peuvent inclure des contenus int&eacute;gr&eacute;s (par exemple des vid&eacute;os, images, articles&hellip;). Le contenu int&eacute;gr&eacute; depuis d&rsquo;autres sites se comporte de la m&ecirc;me mani&egrave;re que si le visiteur se rendait sur cet autre site.</p>\n<p>Ces sites web pourraient collecter des donn&eacute;es sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqu&eacute;s si vous disposez d&rsquo;un compte connect&eacute; sur leur site web.</p>\n<p><strong>Statistiques et mesures d&rsquo;</strong><strong>audience</strong></p>\n<p><em>Utilisation et transmission de vos donn&eacute;es personnelles</em></p>\n<p><u>Dur&eacute;es de stockage de vos donn&eacute;es</u></p>\n<p>Si vous laissez un commentaire, le commentaire et ses m&eacute;tadonn&eacute;es sont conserv&eacute;s ind&eacute;finiment. Cela permet de reconna&icirc;tre et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de mod&eacute;ration.</p>\n<p>Pour les utilisateurs et utilisatrices qui s&rsquo;enregistrent sur notre site (si cela est possible), nous stockons &eacute;galement les donn&eacute;es personnelles indiqu&eacute;es dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles &agrave; tout moment (&agrave; l&rsquo;exception de leur nom d&rsquo;utilisateur&middot;ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>\n<p><u>Les droits que vous avez sur vos donn&eacute;es</u></p>\n<p>Si vous avez un compte ou si vous avez laiss&eacute; des commentaires sur le site, vous pouvez demander &agrave; recevoir un fichier contenant toutes les donn&eacute;es personnelles que nous poss&eacute;dons &agrave; votre sujet, incluant celles que vous nous avez fournies. Vous pouvez &eacute;galement demander la suppression des donn&eacute;es personnelles vous concernant. Cela ne prend pas en compte les donn&eacute;es stock&eacute;es &agrave; des fins administratives, l&eacute;gales ou pour des raisons de s&eacute;curit&eacute;.</p>\n<p><u>Transmission de vos donn&eacute;es personnelles</u></p>\n<p>Les commentaires des visiteurs peuvent &ecirc;tre v&eacute;rifi&eacute;s et mod&eacute;r&eacute;s par les mod&eacute;rateurs du site.</p>\n<p><u>Informations de contact</u></p>\n<p>Vous pouvez contacter l&rsquo;association Espace Jeunes via le site Internet, rubrique contact ou par voie postale au 6 rue Heckler 67000 Strasbourg.</p>\n<p><strong>Informations suppl&eacute;mentaires</strong></p>\n<p><em>Comment nous prot&eacute;geons vos donn&eacute;es</em></p>\n<p>Nous nous engageons &agrave; tenir &agrave; jour les logiciels afin de prodiguer un maximum de s&eacute;curit&eacute; &agrave; vos donn&eacute;es personnelles. Seuls les administrateurs du site ont acc&egrave;s &agrave; la base de donn&eacute;es utilisateurs.</p>\n<p><em>Proc</em><em>&eacute;dures mises en &oelig;uvre en cas de fuite de donn&eacute;es</em></p>\n<p>En cas de fuite av&eacute;r&eacute;e donn&eacute;es personnelles, les utilisateurs sont imm&eacute;diatement inform&eacute;s.</p>\n<p><em>Les services tiers qui nous transmettent des donn&eacute;es</em></p>\n<p>Nous n&rsquo;utilisons aucun service tiers de transmission de donn&eacute;es.</p>\n<p><em>Op&eacute;</em><em>rations de marketing automatis</em><em>&eacute; et/ou de profilage r&eacute;alis&eacute;es &agrave; l&rsquo;aide des donn&eacute;es personnelles</em></p>\n<p>Aucune op&eacute;ration de marketing n&rsquo;est effectu&eacute;e &agrave; partir de vos donn&eacute;es personnelles.</p>\n<p><em>Affichage des informations li&eacute;es aux secteurs soumis &agrave; des r&eacute;gulations sp&eacute;cifiques</em></p>\n<p>Le site n&rsquo;est pas soumis &agrave; des r&eacute;gulations sp&eacute;cifiques.</p>\n<p><strong>Application mobile</strong></p>\n<p>Nous ne r&eacute;cup&eacute;rons que votre adresse IP. Aucune information (nom, pr&eacute;nom, &acirc;ge, sexe, adresse mail, etc) n&rsquo;est r&eacute;colt&eacute;e.<br /> Si vous souhaitez acc&eacute;der, modifier ou supprimer les informations que nous d&eacute;tenons sur vous, merci de contacter&hellip;.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/jeandanieldaumont/eja/src/pages/cgu/cgu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CguPage);
    return CguPage;
}());

//# sourceMappingURL=cgu.js.map

/***/ })

});
//# sourceMappingURL=7.js.map