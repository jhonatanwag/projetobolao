webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(navCtrl, navParams, http, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.database = database;
        //console.log("Valor 1: "+this.navParams.get("valor1"));
        //console.log("Nome: "+this.navParams.get("nome"));
        this.consultarBolaoSqlite();
    }
    // buscarImcs(){
    //   this.http.get("http://200.17.98.122:8080/hellows/rest/service/listaImc?usuario="+this.navParams
    //   .get('usuario'))
    //   .map(res => res.json())
    //   .subscribe(
    //     data => {
    //         this.imcs = data;
    //     },
    //     error =>{
    //       console.log(error);
    //     });
    // }
    /*
      consultarProdutoSqlite(){
        this.database.buscarProduto().subscribe(data => {
          this.produtos = data;
          //alert(data.descricaoProduto);
        });
      }*/
    DetalhesPage.prototype.consultarBolaoSqlite = function () {
        var _this = this;
        this.database.buscarBolao().subscribe(function (data) {
            _this.boalaos = data;
            //alert(data.descricaoProduto);
        });
    };
    DetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhesPage');
    };
    DetalhesPage.prototype.fecharDetalhes = function () {
        this.navCtrl.pop();
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhes',template:/*ion-inline-start:"/home/aluno/ionic-workspace/projetobolao/src/pages/detalhes/detalhes.html"*/'<!--\n  Generated template for the DetalhesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align: center;">Listagem de Apostas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<ion-list>\n  <ion-item *ngFor="let bolao of boalaos">\n    <h2>Id. Apostador: {{bolao.idBolao}}</h2>\n    <h3>Nome Apostador: {{bolao.nome}}</h3>\n    <h3>França: {{bolao.time1}}</h3>\n    <h3>Croacia: {{bolao.time2}}</h3>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aluno/ionic-workspace/projetobolao/src/pages/detalhes/detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__data_database__["a" /* Database */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalhes/detalhes.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bolao; });
var Bolao = /** @class */ (function () {
    function Bolao() {
        this.usuario = '32155123321';
    }
    return Bolao;
}());

//# sourceMappingURL=bolao.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhes_detalhes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_imc__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_produto__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_bolao__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retry__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, storage, database, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.imc = new __WEBPACK_IMPORTED_MODULE_4__model_imc__["a" /* Imc */]();
        this.produto = new __WEBPACK_IMPORTED_MODULE_5__model_produto__["a" /* Produto */]();
        this.bolao = new __WEBPACK_IMPORTED_MODULE_6__model_bolao__["a" /* Bolao */]();
    }
    /*
      cadastrarProdutoSqlite(){
        this.database.adicionarProduto(this.produto);
    
        const toast = this.toastCtrl.create({
          message: 'Salvo com sucesso',
          duration: 3000
        });
        toast.present();
    
      }*/
    HomePage.prototype.cadastrarBolaoSqlite = function () {
        this.database.adicionarbolao(this.bolao);
        var toast = this.toastCtrl.create({
            message: 'Palpite Salvo',
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.consultarBolaoSqlite = function () {
        this.database.buscarBolao().subscribe(function (data) {
            alert(data[0].nome);
        });
    };
    HomePage.prototype.chamaListaBolao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_detalhes__["a" /* DetalhesPage */]);
    };
    HomePage.prototype.converterNumber = function (numero) {
        return parseFloat(numero);
    };
    HomePage.prototype.cadastrarImcStorage = function () {
        this.storage.set('imc', this.imc);
        console.log('cadastrado com sucesso');
    };
    HomePage.prototype.buscarImc = function () {
        this.storage.get('imc').then(function (data) {
            console.log(data);
        });
    };
    HomePage.prototype.cadastrarImc = function () {
        this.http.post("http://200.17.98.122:8080/hellows/rest/service/inserirImc", this.imc).retry(2).map(function (res) { return res.json(); }).subscribe(function (data) {
            alert(data.situacao);
            console.log(data);
        }, function (error) {
            alert(error);
        });
    };
    HomePage.prototype.chamarDetalhesSemParametros = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_detalhes__["a" /* DetalhesPage */]);
    };
    HomePage.prototype.chamarDetalhesComParametros = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_detalhes__["a" /* DetalhesPage */], { 'usuario': this.imc.usuario });
    };
    HomePage.prototype.definirDetalhesRaiz = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__detalhes_detalhes__["a" /* DetalhesPage */], { 'valor1': 10, 'valor2': 20, 'nome': 'José' });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aluno/ionic-workspace/projetobolao/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Gerenciador Bolao\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <!-- <ion-item>\n      <ion-label floating="">Id. Produto</ion-label>\n      <ion-input type="number" (ngModelChange)="produto.idProduto = converterNumber($event)" [(ngModel)]="produto.idProduto"></ion-input>\n    </ion-item> -->\n\n<!--    <ion-item>\n      <ion-label floating="">Nome Apostador</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.descricaoProduto"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating="">Quantidade Estoque</ion-label>\n      <ion-input type="number" (ngModelChange)="produto.quantidadeEstoque = converterNumber($event)" [(ngModel)]="produto.quantidadeEstoque"></ion-input>\n    </ion-item>\n  </ion-list>\n\n        <button ion-button full round (click)="cadastrarProdutoSqlite()" color="danger">\n          Cadastrar Produto</button>\n\n          <button ion-button full round (click)="chamaListaProdutos()" color="danger">\n            Buscar Produtos</button>\n-->\n\n    <ion-item>\n      <ion-label floating="">Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="bolao.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating="">França</ion-label>\n      <ion-input type="number" (ngModelChange)="bolao.time1 = converterNumber($event)" [(ngModel)]="bolao.time1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating="">Croacia</ion-label>\n      <ion-input type="number" (ngModelChange)="bolao.time2 = converterNumber($event)" [(ngModel)]="bolao.time2"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n    <button ion-button full round (click)="cadastrarBolaoSqlite()">\n         Cadastrar Palpite Bolao</button>\n\n    <button ion-button full round (click)="chamaListaBolao()">\n         Buscar Palpite Bolao</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/aluno/ionic-workspace/projetobolao/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__data_database__["a" /* Database */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalhes_detalhes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalhes_detalhes__["a" /* DetalhesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalhes/detalhes.module#DetalhesPageModule', name: 'DetalhesPage', segment: 'detalhes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalhes_detalhes__["a" /* DetalhesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__data_database__["a" /* Database */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            statusBar.backgroundColorByHexString('#ffffff');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/aluno/ionic-workspace/projetobolao/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/aluno/ionic-workspace/projetobolao/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imc; });
var Imc = /** @class */ (function () {
    function Imc() {
        this.usuario = '32155123321';
    }
    return Imc;
}());

//# sourceMappingURL=imc.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_bolao__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Database = /** @class */ (function () {
    function Database(sqlite) {
        this.sqlite = sqlite;
        this.theConsole = "Console Messages";
        this.options = {
            name: 'projetobolao.db',
            location: 'default',
            createFromLocation: 1
        };
        this.connectDb();
    }
    Database.prototype.connectDb = function () {
        var _this = this;
        this.sqlite.create(this.options)
            .then(function (db) {
            _this.db = db;
            var sql = 'create table IF NOT EXISTS bolao (id_bolao integer primary key autoincrement , nome VARCHAR(255), time1 real, time2 real)';
            _this.db.executeSql(sql, {})
                .then(function () { return console.log("SQL " + sql); })
                .catch(function (e) { return console.log("Erro " + e); });
        }).catch(function (e) { return alert("Erro " + e); });
    };
    Database.prototype.adicionarbolao = function (bolao) {
        var sql = "INSERT INTO bolao (nome,time1, time2) VALUES ('" + bolao.nome + "'," + bolao.time1 + "," + bolao.time2 + ")";
        this.db.executeSql(sql, {})
            .then(function () { return console.log("SQL " + sql); })
            .catch(function (e) { return console.log("Erro " + e); });
    };
    Database.prototype.buscarBolao = function () {
        var _this = this;
        var sql = "SELECT * FROM bolao";
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.db.executeSql(sql, {})
                .then(function (result) {
                var items = [];
                if (result.rows.length > 0) {
                    for (var x = 0; x < result.rows.length; x++) {
                        var bolao = new __WEBPACK_IMPORTED_MODULE_2__model_bolao__["a" /* Bolao */]();
                        bolao.idBolao = result.rows.item(x).id_bolao;
                        bolao.nome = result.rows.item(x).nome;
                        bolao.time1 = result.rows.item(x).time1;
                        bolao.time2 = result.rows.item(x).time2;
                        items.push(bolao);
                    }
                }
                observer.next(items);
                observer.complete();
            })
                .catch(function (e) {
                alert("Erro " + e);
                alert("Errorr " + e);
            });
        }, function (error) {
            alert("Errorr " + error);
        });
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map