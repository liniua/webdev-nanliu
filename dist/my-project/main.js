(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");















var routes = [
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n</div>\n<h2>My project for CS5610 ---- Nan Liu  </h2>\n\n<!--<p appChangByColor [changeByColor]=\"color\">Hello World</p>-->\n\n\n<ul><a routerLink=\"/login\">Login</a>\n  <a routerLink=\"/register\">Register</a>\n  <a routerLink=\"user/456\">Profile</a></ul>\n<ul><a routerLink=\"user/456/website\">WebsiteList</a>\n  <a routerLink=\"user/456/website/new\">WebsiteNew</a>\n  <a routerLink=\"user/456/website/456\">WebsiteEdit</a></ul>\n<ul><a routerLink=\"user/456/website/456/page\">PageList</a>\n  <a routerLink=\"user/456/website/456/page/new\">PageNew</a>\n  <a routerLink=\"user/456/website/456/page/321\">PageEdit</a></ul>\n<ul><a routerLink=\"user/456/website/456/page/321/widget\">WidgetList</a>\n  <a routerLink=\"user/456/website/456/page/321/widget/new\">WidgetChooser</a>\n  <a routerLink=\"user/456/website/456/page/321/widget/123\">WidgetEdit-Heading</a>\n  <a routerLink=\"user/456/website/456/page/321/widget/345\">WidgetEdit-Image</a>\n  <a routerLink=\"user/456/website/456/page/321/widget/678\">WidgetEdit-Youtube</a></ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");













// Import all other components here
var APP_ROUTES = [
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"] }
    // so on
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        Edit Page\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a [routerLink]=\"['../']\" class=\"cl-icon-padding cl-text-black\" (click) = \"updatePage()\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"updatePage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"pageName\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"pageTitle\"\n             name=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\">\n    </div>\n    <a class=\"btn btn-danger btn-block\" [routerLink]=\"['../']\" (click) = \"deletePage()\">Delete</a>\n  </form>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../../../']\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.updatePage = function () {
        this.pageName = this.pageForm.value.pageName;
        this.pageTitle = this.pageForm.value.title;
        var new_page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__["Page"](this.pageID, this.pageName, undefined, this.pageTitle);
        this.pageService.updatePage(this.pageID, new_page);
        console.log(this.pageService.pages);
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageID);
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params.get('pid'));
            _this.pageID = params.get('pid');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../..']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        Pages\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a [routerLink]=\"['./new']\" class=\"cl-icon-padding cl-text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let page of pages\" class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['./', page._id]\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      <a [routerLink]=\"['./', page._id, 'widget']\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../']\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activeRoute) {
        this.pageService = pageService;
        this.activeRoute = activeRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            console.log(params['wid']);
            _this.websiteID = params['wid'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.websiteID);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbmV3L3BhZ2UtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbmV3L3BhZ2UtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbC1jb250YWluZXItcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWJsdWUtbmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC13aGl0ZXtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsdWV7XG4gIGNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jbC10ZXh0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2wtaGVhZGVyLXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jbC1mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2wtdi1kaXZpZGVye1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC13aWRnZXQtcGFyYWdyYXBoe1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jbC1hYnNvbHV0ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNsLXdpZGdldC1saXN0LWljb25ze1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uY2wtbGlzdC1pdGVtLWJvcmRlcmxlc3Mge1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbi5jbC13aWRnZXQtaW1hZ2Vze1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA4NSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        New Page\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a class=\"cl-icon-padding cl-text-black\" [routerLink]=\"['../']\" (click)=\"createPage()\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"createPage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"pageName\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"pageTitle\"\n             name=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../../../']\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activeRoute, router) {
        this.pageService = pageService;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    PageNewComponent.prototype.createPage = function () {
        this.pageName = this.pageForm.value.pageName;
        this.pageTitle = this.pageForm.value.title;
        var new_page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__["Page"](undefined, this.pageName, this.websiteID, this.pageTitle);
        this.pageService.createPage(this.websiteID, new_page);
        console.log(new_page);
        console.log(this.pageService.pages);
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            console.log(params['wid']);
            _this.websiteID = params['wid'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbC1jb250YWluZXItcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWJsdWUtbmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC13aGl0ZXtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsdWV7XG4gIGNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jbC10ZXh0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2wtaGVhZGVyLXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jbC1mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2wtdi1kaXZpZGVye1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC13aWRnZXQtcGFyYWdyYXBoe1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jbC1hYnNvbHV0ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNsLXdpZGdldC1saXN0LWljb25ze1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uY2wtbGlzdC1pdGVtLWJvcmRlcmxlc3Mge1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbi5jbC13aWRnZXQtaW1hZ2Vze1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA4NSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n     </span>\n\n\n    <input type=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           ngModel required #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password!\n    </span>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            [routerLink]=\"['/register']\">Register</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login page!' + this.username);
    };
    LoginComponent.prototype.login = function () {
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username is : ' + this.username);
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbC1mb3JtLWJvdHRvbS1wYWRkaW5ne1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsLWNvbnRhaW5lci1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtYmx1ZS1uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LXdoaXRle1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNsLXRleHQtYmx1ZXtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LWJsYWNre1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNsLXRleHQtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbC1pY29uLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbC1oZWFkZXItcGFkZGluZ3tcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmNsLWZ1bGwtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWxpc3QtaXRlbXtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbC12LWRpdmlkZXJ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4MDgwODA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1oZWFkaW5ne1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLXdpZGdldC1wYXJhZ3JhcGh7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtaGVpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC1yZWxhdGl2ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsLWFic29sdXRlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2wtd2lkZ2V0LWxpc3QtaWNvbnN7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2wtemVyby1yaWdodC1wYWRkaW5ne1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLmNsLXdpZGdldC1pbWFnZXN7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n<form (ngSubmit) = \"updateUser()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-top\">\n\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Profile</a>\n  </div>\n\n  <div class=\"container-fluid w-100 justify-content-end\" >\n    <a class=\"navbar-link navbar-text cl-text-white cl-icon-padding\" (click)=\"updateUser()\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </a>\n  </div>\n\n</nav>\n\n<div class=\"container\">\n  <h1></h1>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder={{user.username}}>\n      <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n        <!--Please enter username!-->\n      <!--</span>-->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\"\n             name=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder={{user.email}}>\n      <!--<span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">-->\n        <!--Please enter email!-->\n      <!--</span>-->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             name=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder={{user.firstName}}>\n      <!--<span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">-->\n        <!--Please enter first name!-->\n      <!--</span>-->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             name=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder={{user.lastName}}>\n      <!--<span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">-->\n        <!--Please enter last name!-->\n      <!--</span>-->\n    </div>\n    <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/user', userId, 'website']\">Websites</a>\n    <a class=\"btn btn-danger btn-block\" (click) = \"logout()\">Logout</a>\n\n</div>\n\n<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log(this.userId);
        this.user = this.userService.findUserById(this.userId);
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    //
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        var user = { _id: this.userId,
            username: this.username,
            password: '',
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email };
        this.userService.updateUser(this.userId, user);
        console.log(user);
        console.log(this.userId);
        console.log(this.userService.users);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n  <input name=\"username\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"username\"\n         ngModel\n         required\n         #name=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">*Please enter username!</span>\n\n  <input name=\"password\"\n         type=\"password\"\n         class=\"form-control\"\n         placeholder=\"password\"\n         ngModel\n         required\n         #pass=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!pass.valid && pass.touched\">*Please enter password!</span>\n\n  <input name=\"vpassword\"\n         type=\"password\"\n         class=\"form-control\"\n         placeholder=\"verify password\"\n         ngModel\n         required\n         #vpass=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!vpass.valid && vpass.touched\">*Please enter password again!</span>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n  <a class=\"btn btn-danger  btn-block\"\n     [routerLink]=\"['/login']\">Cancel</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        if (this.password === this.vpassword) {
            var user = this.userService.createUser(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('', this.username, this.password, '', '', ''));
            if (user) {
                this.router.navigate(['/user', user._id]);
            }
        }
        else {
            this.error = 'Passwords do not match!';
        }
        // console.log(this.userService.users);
        // call user service only if passwords match else show the same error
        // if (this.password === this.vpassword) {
        //   this.userService.createUser()
        //     .subscribe(
        //       (data: any) => {
        //         this.router.navigate(['/profile']);
        //       },
        //       (error: any) => {
        //         console.log(error);
        //         this.error = error._body;
        //       }
        //     );
        // } else {
        //   this.error = 'Passwords do not match!';
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtZWRpdC93ZWJzaXRlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md cl-blue-navbar navbar-dark fixed-top\">\n  <div class=\"col-1\">\n    <a class=\"navbar-text float-left\" [routerLink]=\"['..']\"><i class=\"fa fa-chevron-left\"></i></a >\n  </div>\n\n  <div class=\"col-3 d-none d-sm-block\">\n    <a class=\"navbar-brand cl-icon-padding\" [routerLink]=\"['..']\">Websites</a >\n    <a class=\"navbar-text float-right\" [routerLink]=\"['../' + 'new']\"><i class=\"fa fa-plus\"></i></a >\n  </div>\n\n  <div class=\"col-8\">\n    <a class=\"navbar-brand cl-icon-padding\" [routerLink]=\"['.']\">Edit Websites</a >\n    <a class=\"navbar-text float-right\" [routerLink]=\"['..']\" (click) = \"updateWebsite()\"><i class=\"fa fa-check\"></i></a >\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a [routerLink]=\"['../', website._id]\">\n            <i class=\"fas fa-cog fontawsome_icon float-right\" ></i></a>\n          <a [routerLink]=\"['../', website._id, 'page']\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n      <form (ngSubmit)=\"updateWebsite()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\">Website Name</label>\n          <input [(ngModel)]=\"websiteName\"\n                 name=\"websiteName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"new website name\">\n          <!--<div [hidden]=\"websiteName.valid || websiteName.untouched\"-->\n               <!--class=\"alert alert-danger\">-->\n            <!--Name is required-->\n          <!--</div>-->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea [(ngModel)]=\"description\"\n                    name=\"description\"\n                    id=\"website-description\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    placeholder=\"new description\"\n          ></textarea>\n        </div>\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['../']\" (click) = \"deleteWeb()\">Delete</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../']\" class=\"navbar-link navbar-text cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            console.log(_this.wid);
            _this.userId = params['uid'];
            console.log(_this.userId);
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        if (this.websiteForm.value.webname === '') {
            alert('Please input new web name');
            return;
        }
        this.websiteName = this.websiteForm.value.websiteName;
        this.description = this.websiteForm.value.description;
        var new_website = { _id: this.wid, name: this.websiteName, developerId: this.userId, description: this.description };
        this.websiteService.updateWebsite(this.wid, new_website);
    };
    WebsiteEditComponent.prototype.deleteWeb = function () {
        console.log(this.wid);
        this.websiteService.deleteWebsite(this.wid);
        console.log(this.websiteService.websites);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar float-left\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link cl-text-white\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n        Websites\n      </a>\n    </div>\n\n    <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-plus fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user', userId, 'website', website._id]\">\n        <i class=\"fas fa-cog fontawsome_icon float-right\" ></i>\n      </a>\n      <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log(this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbmV3L3dlYnNpdGUtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbmV3L3dlYnNpdGUtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbC1jb250YWluZXItcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWJsdWUtbmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC13aGl0ZXtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsdWV7XG4gIGNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jbC10ZXh0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2wtaGVhZGVyLXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jbC1mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2wtdi1kaXZpZGVye1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC13aWRnZXQtcGFyYWdyYXBoe1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jbC1hYnNvbHV0ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNsLXdpZGdldC1saXN0LWljb25ze1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uY2wtbGlzdC1pdGVtLWJvcmRlcmxlc3Mge1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbi5jbC13aWRnZXQtaW1hZ2Vze1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA4NSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md cl-blue-navbar navbar-dark fixed-top\">\n  <div class=\"col-1\">\n    <a class=\"navbar-text float-left\" [routerLink]=\"['..']\"><i class=\"fa fa-chevron-left\"></i></a >\n  </div>\n\n  <div class=\"col-3 d-none d-sm-block\">\n    <a class=\"navbar-brand cl-icon-padding\" [routerLink]=\"['..']\">Websites</a >\n    <a class=\"navbar-text float-right\" [routerLink]=\"['.']\"><i class=\"fa fa-plus\"></i></a >\n  </div>\n\n  <div class=\"col-8\">\n    <a class=\"navbar-brand cl-icon-padding\" [routerLink]=\"['.']\">New Website</a >\n    <a class=\"navbar-text float-right\" [routerLink]=\"['..']\" (click)=\"createWeb()\"><i class=\"fa fa-check\"></i></a >\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id]\">\n            <i class=\"fas fa-cog fontawsome_icon float-right\" ></i></a>\n          <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n      <form (ngSubmit) = \"createWeb()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\">Name</label>\n          <input [(ngModel)]=\"webname\"\n                 name=\"webname\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\">Description</label>\n          <textarea [(ngModel)]=\"description\"\n                    name=\"description\"\n                    id=\"website-description\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    placeholder=\"Description\">\n          </textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-expand-sm cl-blue-navbar navbar-dark fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.createWeb = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.webname = this.webForm.value.webname;
        this.description = this.webForm.value.description;
        var new_website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_5__["Website"](undefined, this.webname, this.userId, this.description);
        console.log('new website: ' + new_website);
        this.websiteService.createWebsite(this.userId, new_website);
        console.log(this.websiteService.websites);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=url (click) = \"createWidget('HEADING')\">Heading</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=url (click) = \"createWidget('IMAGE')\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=url (click) = \"createWidget('YOUTUBE')\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../../../../../..\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetChooserComponent = /** @class */ (function () {
    // defaultWidgetValues =
    //   {
    //     'Heading': {type: 'Heading', 'size' : 1},
    //     'Image': {type: 'Image', width: '100%'},
    //     'YouTube': {type: 'YouTube', width: '100%'}
    //   };
    function WidgetChooserComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            console.log(_this.websiteId);
            console.log(_this.pageId);
        });
    };
    // creating a widget with default values
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var new_widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', widgetType, this.pageId, '1', 'text', '100%', '');
        // if (widgetType === 'HEADING') {
        //   this.widget = new Widget(undefined, 'HEADING', this.pageId, '1', '', '', '');
        // } else if (widgetType === 'IMAGE') {
        //   this.widget = new Widget(undefined, 'IMAGE', this.pageId, '', '', '100%', '');
        // } else if (widgetType === 'YOUTUBE') {
        //   this.widget = new Widget(undefined, 'YOUTUBE', this.pageId, '', '', '100%', '');
        // }
        // this.widget = this.defaultWidgetValues[widgetType];
        this.widgetService.createWidget(this.pageId, new_widget);
        console.log(new_widget);
        this.url = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + new_widget._id;
        console.log(new_widget._id);
        this.router.navigate([this.url]);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['wgid']);
            _this.wgid = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.wgid);
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5hOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbC1jb250YWluZXItcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWJsdWUtbmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC13aGl0ZXtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsdWV7XG4gIGNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jbC10ZXh0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2wtaGVhZGVyLXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jbC1mdWxsLXdpZHRoe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2wtdi1kaXZpZGVye1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC13aWRnZXQtcGFyYWdyYXBoe1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jbC1hYnNvbHV0ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNsLXdpZGdldC1saXN0LWljb25ze1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uY2wtbGlzdC1pdGVtLWJvcmRlcmxlc3Mge1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbi5jbC13aWRnZXQtaW1hZ2Vze1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA4NSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a [routerLink]=\"['../']\" class=\"cl-icon-padding cl-text-black\" (click) = \"update()\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder={{widget.text}}\n             ngModel required\n             name=\"text\" #text=\"ngModel\"/>\n      <div [hidden]=\"text.valid || text.untouched\"\n           class=\"alert alert-danger\">\n        Text is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder={{widget.size}}\n             ngModel required\n             name=\"size\" #size=\"ngModel\"/>\n      <div [hidden]=\"size.valid || size.untouched\"\n           class=\"alert alert-danger\">\n        Size is required\n      </div>\n    </div>\n    <div *ngIf=\"sizeValid\" class=\"alert alert-danger\">\n      Size can only between 1 to 6\n    </div>\n    <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"delete()\" [routerLink]=\"['../']\">Delete</button>\n  </form>\n  <!--<a class=\"btn btn-danger btn-block\" [routerLink]=\"['./']\">Delete</a>-->\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../../../../../']\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(activatedRoute, widgetService, route) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.route = route;
    }
    WidgetHeaderComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.widget.text = this.headerForm.value.text;
        this.widget.size = this.headerForm.value.size;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageID = params['pid'];
            _this.wgid = params['wgid'];
        });
        if (this.wgid === undefined) {
            this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"](undefined, 'HEADER', this.pageID, '', '', '', '');
        }
        else {
            this.widget = this.widgetService.findWidgetById(this.wgid);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetHeaderComponent.prototype, "headerForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWltYWdlL3dpZGdldC1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbC1mb3JtLWJvdHRvbS1wYWRkaW5ne1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsLWNvbnRhaW5lci1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtYmx1ZS1uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LXdoaXRle1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNsLXRleHQtYmx1ZXtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LWJsYWNre1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNsLXRleHQtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbC1pY29uLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbC1oZWFkZXItcGFkZGluZ3tcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmNsLWZ1bGwtd2lkdGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWxpc3QtaXRlbXtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbC12LWRpdmlkZXJ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4MDgwODA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1oZWFkaW5ne1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNsLXdpZGdldC1wYXJhZ3JhcGh7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtaGVpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC1yZWxhdGl2ZS1wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsLWFic29sdXRlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2wtd2lkZ2V0LWxpc3QtaWNvbnN7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2wtemVyby1yaWdodC1wYWRkaW5ne1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLmNsLXdpZGdldC1pbWFnZXN7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a [routerLink]=\"['../']\" class=\"cl-icon-padding cl-text-black\" (click) = \"update()\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-text\" placeholder={{widget.text}}\n             ngModel required\n             name=\"text\" #text=\"ngModel\"/>\n      <div [hidden]=\"text.valid || text.untouched\"\n           class=\"alert alert-danger\">\n        Text is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder={{widget.url}}\n             ngModel required\n             name=\"url\" #url=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-width\" placeholder={{widget.width}}\n             ngModel required\n             name=\"width\" #width=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-inputFile\">Upload</label>\n      <input\n        type=\"file\"\n        class=\"form-control\"\n        name=\"upload\"\n        id=\"image-inputFile\">\n    </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Upload Image</button>\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"exampleInputFile\">Upload</label>-->\n      <!--<input type=\"file\" class=\"form-control\" id=\"exampleInputFile\"-->\n             <!--ngModel required-->\n             <!--name=\"file\" #file=\"ngModel\"/>-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"exampleInputFile\">Upload</label>-->\n      <!--<form ngNoForm (click)=\"upload()\" method=\"post\" enctype=\"multipart/form-data\">-->\n        <!--<input  name=\"myFile\" type=\"file\" class=\"form-control\"  id=\"exampleInputFile\"/>-->\n        <!--&lt;!&ndash;<input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>&ndash;&gt;-->\n        <!--&lt;!&ndash;<input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>&ndash;&gt;-->\n        <!--&lt;!&ndash;<input  name=\"pageId\" value=\"{{pageID}}\"   style=\"display: none\"/>&ndash;&gt;-->\n        <!--&lt;!&ndash;<input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>&ndash;&gt;-->\n        <!--<button type=\"submit\" class=\"btn btn-block btn-primary\" [routerLink]=\"['./']\">Upload Image</button>-->\n      <!--</form>-->\n    <!--</div>-->\n  </form>\n  <!--<a class=\"btn btn-primary btn-block\" href=\"#\">Upload Image</a>-->\n  <a class=\"btn btn-danger  btn-block\" [routerLink]=\"['../']\" (click) = \"delete()\">Delete</a>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['../../../../../../']\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRoute, widgetService, route) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.route = route;
    }
    WidgetImageComponent.prototype.upload = function () {
        this.text = this.imageForm.value.text;
        this.url = this.imageForm.value.url;
        this.width = this.imageForm.value.width;
        var new_widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"](undefined, 'IMAGE', this.pageID, '1', this.text.toString(), this.width.toString(), this.url.toString());
        this.widgetService.createWidget(this.pageID, new_widget);
    };
    WidgetImageComponent.prototype.update = function () {
        this.text = this.imageForm.value.text;
        this.url = this.imageForm.value.url;
        this.width = this.imageForm.value.width;
        console.log(this.text);
        var new_widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"](undefined, 'IMAGE', this.pageID, '1', this.text.toString(), this.width.toString(), this.url.toString());
        console.log(new_widget);
        this.widgetService.updateWidget(this.wgid, new_widget);
        console.log(this.widgetService.widgets);
    };
    WidgetImageComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageID = params['pid'];
            _this.wgid = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.wgid);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetImageComponent.prototype, "imageForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_5__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" routerLink=\"./\">\n        Widgets Edit\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"../\" class=\"cl-icon-padding cl-text-black\" (click) = \"update()\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"youtube-name\">Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder={{widget.text}}\n             ngModel required\n             name=\"text\" #text=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder={{widget.url}}\n             ngModel required\n             name=\"url\" #url=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder={{widget.width}}\n             ngModel required\n             name=\"width\" #width=\"ngModel\"/>\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"../\" (click) = \"delete()\">Delete</a>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom w-100 justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../../../../../..\" class=\"navbar-link navbar-text cl-text-blue cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activatedRoute, widgetService, route) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.route = route;
    }
    WidgetYoutubeComponent.prototype.update = function () {
        this.widget.url = this.youtubeForm.value.url;
        this.widget.text = this.youtubeForm.value.text;
        this.widget.width = this.youtubeForm.value.width;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
            _this.pageID = params['pid'];
            console.log(params['wgid']);
            _this.wgid = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.wgid);
        console.log(this.widget);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "youtubeForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-blue{\n  color: #337ab7;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1ibHVlLW5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a [routerLink]=\"['../../']\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold\" [routerLink]=\"['./']\">\n        Widgets\n      </a>\n    </div>\n\n    <div class=\"navbar-text float-right\">\n      <a [routerLink]=\"['./new']\" class=\"cl-icon-padding cl-text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"float-right\">\n          <a [routerLink]=\"['./']\" class=\"pull-right\">\n            <i class=\"fa fa-bars fontawsome_icon\"></i>\n          </a>\n          <a [routerLink]=\"['./', widget._id]\" class=\"pull-right\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </div>\n        <div [ngSwitch]=\"widget.size\">\n          <h1  *ngSwitchCase=\"1\">{{widget.text}}</h1>\n          <h2  *ngSwitchCase=\"2\">{{widget.text}}</h2>\n          <h3  *ngSwitchCase=\"3\">{{widget.text}}</h3>\n          <h4  *ngSwitchCase=\"4\">{{widget.text}}</h4>\n          <h5  *ngSwitchCase=\"5\">{{widget.text}}</h5>\n          <h6  *ngSwitchCase=\"6\">{{widget.text}}</h6>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n        <div>\n          <iframe width=\"560\" height=\"315\" [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen=\"\" ></iframe>\n        </div>\n        <div class=\"float-right\">\n          <a [routerLink]=\"['./']\" class=\"pull-right\">\n            <i class=\"fa fa-bars fontawsome_icon\"></i>\n          </a>\n          <a [routerLink]=\"['./', widget._id]\" class=\"pull-right\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <img class=\"img-responsive img-rounded cl-widget-images\" [src]=widget.url>\n        <div class=\"float-right\">\n          <a [routerLink]=\"['./']\" class=\"pull-right\">\n            <i class=\"fa fa-bars fontawsome_icon\"></i>\n          </a>\n          <a [routerLink]=\"['./', widget._id]\" class=\"pull-right\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div [innerHTML]=\"widget.text\"></div>\n        <div class=\"float-right\">\n          <a [routerLink]=\"['./']\" class=\"pull-right\">\n            <i class=\"fa fa-bars fontawsome_icon\"></i>\n          </a>\n          <a [routerLink]=\"['./', widget._id]\" class=\"pull-right\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar bg-light fixed-bottom\">\n  <ul>\n    <a [routerLink]=\"['./']\" class=\"navbar-link cl-icon-padding\">\n      <i class=\"fa fa-play\"></i>\n    </a >\n    <a [routerLink]=\"['./']\" class=\"navbar-link cl-icon-padding\">\n      <i class=\"fa fa-eye\"></i>\n    </a >\n  </ul>\n\n  <ul>\n    <a [routerLink]=\"['../../../../../']\" class=\"navbar-link pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a >\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
            _this.pageID = params['pid'];
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageID);
        console.log(this.widgets);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstname, lastname, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url) {
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.text = text;
        this.width = width;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post 1', '456', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('432', 'Post 2', '456', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('543', 'Post 2-1', '567', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('911', 'Post 2-2', '567', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('687', 'Post 3-1', '890', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('329', 'Post 3-1', '890', 'Lorem')
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var new_page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]((new Date()).getTime() + '', page.name, page.websiteId, page.title);
        this.pages.push(new_page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var resultSet = [];
        for (var i in this.pages) {
            if (this.pages[i].websiteId === websiteId) {
                resultSet.push(this.pages[i]);
            }
        }
        return resultSet;
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].title = page.title;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");



// injecting service into module
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@me.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@me.com')
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random().toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                this.users[i].username = user.username;
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
                this.users[i].email = user.email;
                return this.users[i];
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Facebook', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('234', 'Tweeter', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Gizmodo', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('890', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('789', 'Chess', '234', 'Lorem')
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var new_website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]((new Date()).getTime() + '', website.name, userId, website.description);
        this.websites.push(new_website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var resultSet = [];
        for (var i in this.websites) {
            if (this.websites[i].developerId === userId) {
                resultSet.push(this.websites[i]);
            }
        }
        return resultSet;
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this.websites.find(function (website) {
            return website._id === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].developerId = website.developerId;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('345', 'IMAGE', '321', '', '', '100%', 'http://lorempixel.com/400/200/'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('678', 'YOUTUBE', '321', '', '', '100%', 'https://www.youtube.com/embed/AM2Ivdi9c4E')
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() * 10000).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var resultSet = [];
        for (var i in this.widgets) {
            if (this.widgets[i].pageId === pageId) {
                resultSet.push(this.widgets[i]);
            }
        }
        return resultSet;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADING':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;
                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                    case 'HTML':
                        this.widgets[i].text = widget.text;
                        return true;
                }
            }
        }
        return false;
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nanliu/files/NEU/CS5610/webdev-nanliu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map