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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_personalized_dashboard_view_personalized_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/personalized-dashboard-view/personalized-dashboard-view.component */ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.ts");
/* harmony import */ var _user_entry_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-entry/login/login.component */ "./src/app/user-entry/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: 'login', component: _user_entry_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], pathMatch: 'full' },
    { path: '', component: _user_entry_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '*', component: _user_entry_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard/:userid', component: _dashboard_personalized_dashboard_view_personalized_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__["PersonalizedDashboardViewComponent"], pathMatch: 'full' }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Issue-Tracking-Tool-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_view_search_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-view/search-view.module */ "./src/app/search-view/search-view.module.ts");
/* harmony import */ var _user_entry_user_entry_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-entry/user-entry.module */ "./src/app/user-entry/user-entry.module.ts");
/* harmony import */ var _special_selectors_special_selectors_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./special-selectors/special-selectors.module */ "./src/app/special-selectors/special-selectors.module.ts");
/* harmony import */ var _issue_description_view_issue_description_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issue-description-view/issue-description-view.module */ "./src/app/issue-description-view/issue-description-view.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _search_view_search_view_module__WEBPACK_IMPORTED_MODULE_6__["SearchViewModule"],
                _user_entry_user_entry_module__WEBPACK_IMPORTED_MODULE_7__["UserEntryModule"],
                _special_selectors_special_selectors_module__WEBPACK_IMPORTED_MODULE_8__["SpecialSelectorsModule"],
                _issue_description_view_issue_description_view_module__WEBPACK_IMPORTED_MODULE_9__["IssueDescriptionViewModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _personalized_dashboard_view_personalized_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalized-dashboard-view/personalized-dashboard-view.component */ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.ts");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/slidemenu */ "./node_modules/primeng/slidemenu.js");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_slidemenu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_3__["SlideMenuModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"]
            ],
            declarations: [_personalized_dashboard_view_personalized_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__["PersonalizedDashboardViewComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statussorting  {\r\n    content: url(\"/src/assets/statussorting.png\") no-repeat !important;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BlcnNvbmFsaXplZC1kYXNoYm9hcmQtdmlldy9wZXJzb25hbGl6ZWQtZGFzaGJvYXJkLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1FQUFtRTtJQUNuRSxhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3BlcnNvbmFsaXplZC1kYXNoYm9hcmQtdmlldy9wZXJzb25hbGl6ZWQtZGFzaGJvYXJkLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXNzb3J0aW5nICB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvc3JjL2Fzc2V0cy9zdGF0dXNzb3J0aW5nLnBuZ1wiKSBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card pt-0\" style=\"overflow: hidden;background-color: #e9ecef;top: -3px\">\r\n    <div class=\"w-100  position-fixed\" style=\"background-color: #e3f2fd\">\r\n  <!--navbar-->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\r\n    <a class=\"navbar-brand h1\" href=\"#\">\r\n      <img src=\"assets/issusicon.png\" style=\"width: 25px;height: 25px;background-color: azure\" class=\"rounded-circle\">\r\n      Issus</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"assets/user.svg\" style=\"width: 20px;height: 20px\">\r\n            Contact\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <img src=\"assets/facebok.png\" style=\"width: 30px;height: 30px\">\r\n              facebook</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <img src=\"assets/link.png\" style=\"width: 30px;height: 30px\">\r\n              linkedin</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <img src=\"assets/twitter.svg\" style=\"width: 30px;height: 30px\">\r\n              twitter</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <img src=\"assets/github.png\" style=\"width: 30px;height: 30px\">\r\n              github</a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <img src=\"assets/gmail.svg\" style=\"width: 30px;height: 30px\">\r\n              gmail</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <button class=\"btn btn-outline-light my-3 my-sm-0\">\r\n          <img src=\"assets/logout.png\" style=\"width: 20px;height: 20px\">\r\n\r\n          Logout</button>\r\n      </form>\r\n\r\n    </div>\r\n  </nav>\r\n  <!--secondary info bar-->\r\n  \r\n    <nav class=\"navbar navbar-expand-lg navbar-light mx-2\" style=\"background-color: #e3f2fd;\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n            <img src=\"assets/dashboard_1195952.png\" style=\"width: 30px;height: 30px\">\r\n            Dashboard </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\"\r\n        aria-controls=\"navbarSupportedContent2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item active\">\r\n            \r\n          </li>\r\n  \r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n\r\n  <!--user info-->\r\n\r\n  <div class=\"jumbotron\" style=\"margin-top:70px\">\r\n    <h1 class=\"display-4\">Hello, User!</h1>\r\n    <p class=\"lead\">Assigned Issues: <span></span>\r\n      <br>Created Issues: <span></span></p>\r\n    <hr class=\"my-4\">\r\n    <p>Create new Issue by clicking the button </p>\r\n    <!--creating issue-->\r\n    <a class=\"btn btn-outline-dark\" role=\"button\" (click)=\"visibleSidebar5 = true\" >\r\n      <img src=\"assets/plus.jpg\" style=\"width: 30px;height: 30px\" class=\"rounded-circle\">\r\n      Create</a>\r\n    <br>\r\n    <!--table about issues-->\r\n    <div class=\"card mt-3\">\r\n     \r\n      <h5 class=\"card-header font-weight-normal\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\r\n\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent1\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <!--column sorting-->\r\n              <li class=\"nav-item dropdown\">\r\n                  \r\n                <a pButton  class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\" aria-expanded=\"false\" label=\"Show\" (click)=\"menu.toggle($event)\" >\r\n                  <img src=\"assets/sorting.svg\" style=\"width: 20px;height: 20px\">\r\n                  Coloumn sorting\r\n                </a>\r\n                \r\n                \r\n<!--<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                  <a class=\"dropdown-item\" href=\"#\">\r\n                    <img src=\"assets/statussorting.png\" style=\"width: 30px;height: 30px\">\r\n                    Status\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"#\">\r\n                    <img src=\"assets/titlesorting.png\" style=\"width: 30px;height: 30px\">\r\n                    Title</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"#\">\r\n                    <img src=\"assets/datesorting.svg\" style=\"width: 30px;height: 30px\">\r\n                    Date</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">\r\n                    <img src=\"assets/user.svg\" style=\"width: 30px;height: 30px\">\r\n                    Reporter</a>\r\n                </div>-->\r\n                \r\n              </li>\r\n\r\n              <li class=\"nav-item dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <img src=\"assets/sorting.svg\" style=\"width: 20px;height: 20px\">\r\n                    My issues\r\n                  </a>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                      <img src=\"assets/assigned.png\" style=\"width: 30px;height: 30px\">\r\n                      Assigned</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">\r\n                      <img src=\"assets/edit.png\" style=\"width: 30px;height: 30px\">\r\n                      Created</a>\r\n                    \r\n                  </div>\r\n                </li>\r\n                \r\n            </ul>\r\n\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n              <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">\r\n                <img src=\"assets/default.png\" style=\"width: 25px;height: 25px\">\r\n\r\n                Default</button>\r\n            </form>\r\n\r\n          </div>\r\n        </nav>\r\n      </h5>\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table table-hover table-dark\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">Status</th>\r\n              <th scope=\"col\">Title</th>\r\n              <th scope=\"col\">Date</th>\r\n              <th scope=\"col\">Reporter</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">3</th>\r\n                <td>Jacob</td>\r\n                <td>Thornton</td>\r\n                <td>@fat</td>\r\n                <td>@fat</td>\r\n              </tr>\r\n              <tr>\r\n                  <th scope=\"row\">4</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>@fat</td>\r\n                  <td>@fat</td>\r\n                </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-footer text-white bg-dark text-right\">\r\n    V1.0\r\n  </div>\r\n</div>\r\n<p-slideMenu #menu  [model]=\"col_sort\" [menuWidth]=\"170\" [popup]=\"true\" [viewportHeight]=\"250\"></p-slideMenu>\r\n<p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\r\n    <h1 style=\"font-weight:normal\">Full Screen Sidebar</h1>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n</p-sidebar>"

/***/ }),

/***/ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PersonalizedDashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedDashboardViewComponent", function() { return PersonalizedDashboardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalizedDashboardViewComponent = /** @class */ (function () {
    function PersonalizedDashboardViewComponent() {
    }
    PersonalizedDashboardViewComponent.prototype.ngOnInit = function () {
        this.col_sort =
            [
                {
                    label: 'Status',
                    icon: 'pi pi-file',
                    items: [
                        { label: 'Ative', icon: 'pi pi-circle-on' },
                        { label: 'Backlog', icon: 'pi pi-star' },
                        { label: 'Testing', icon: 'pi pi-cog' },
                        { label: 'Completed', icon: 'pi pi-circle-off' }
                    ]
                },
                {
                    label: 'Title',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        { label: 'A > Z', icon: 'pi pi-angle-double-down' },
                        { label: 'Z > A', icon: 'pi pi-angle-double-up' }
                    ]
                },
                {
                    label: 'Date',
                    icon: 'pi pi-clock',
                    items: [
                        { label: 'Descending', icon: 'pi pi-angle-double-down' },
                        { label: 'Ascending', icon: 'pi pi-angle-double-up' }
                    ]
                },
                {
                    label: 'Reporter',
                    icon: 'pi pi-user',
                    items: [
                        { label: 'A > Z', icon: 'pi pi-angle-double-down' },
                        { label: 'Z > A', icon: 'pi pi-angle-double-up' }
                    ]
                }
            ];
    };
    PersonalizedDashboardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personalized-dashboard-view',
            template: __webpack_require__(/*! ./personalized-dashboard-view.component.html */ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.html"),
            styles: [__webpack_require__(/*! ./personalized-dashboard-view.component.css */ "./src/app/dashboard/personalized-dashboard-view/personalized-dashboard-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalizedDashboardViewComponent);
    return PersonalizedDashboardViewComponent;
}());



/***/ }),

/***/ "./src/app/issue-description-view/issue-description-view.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/issue-description-view/issue-description-view.module.ts ***!
  \*************************************************************************/
/*! exports provided: IssueDescriptionViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionViewModule", function() { return IssueDescriptionViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issue-description-view/issue-description-view.component */ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IssueDescriptionViewModule = /** @class */ (function () {
    function IssueDescriptionViewModule() {
    }
    IssueDescriptionViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_2__["IssueDescriptionViewComponent"]]
        })
    ], IssueDescriptionViewModule);
    return IssueDescriptionViewModule;
}());



/***/ }),

/***/ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/issue-description-view/issue-description-view/issue-description-view.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlLWRlc2NyaXB0aW9uLXZpZXcvaXNzdWUtZGVzY3JpcHRpb24tdmlldy9pc3N1ZS1kZXNjcmlwdGlvbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/issue-description-view/issue-description-view/issue-description-view.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  issue-description-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/issue-description-view/issue-description-view/issue-description-view.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IssueDescriptionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionViewComponent", function() { return IssueDescriptionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssueDescriptionViewComponent = /** @class */ (function () {
    function IssueDescriptionViewComponent() {
    }
    IssueDescriptionViewComponent.prototype.ngOnInit = function () {
    };
    IssueDescriptionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-description-view',
            template: __webpack_require__(/*! ./issue-description-view.component.html */ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.html"),
            styles: [__webpack_require__(/*! ./issue-description-view.component.css */ "./src/app/issue-description-view/issue-description-view/issue-description-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IssueDescriptionViewComponent);
    return IssueDescriptionViewComponent;
}());



/***/ }),

/***/ "./src/app/issue-tracking-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/issue-tracking-service.service.ts ***!
  \***************************************************/
/*! exports provided: IssueTrackingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTrackingServiceService", function() { return IssueTrackingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_zip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/zip */ "./node_modules/rxjs-compat/_esm5/add/operator/zip.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IssueTrackingServiceService = /** @class */ (function () {
    function IssueTrackingServiceService(httpCall) {
        this.httpCall = httpCall;
        this.url = '';
    }
    // registering
    IssueTrackingServiceService.prototype.registeringMethod = function (data) {
        var Body = { firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            email: data.email,
            password: data.password };
        return this.httpCall.post(this.url + "/api/v1/users/register", Body);
    };
    // handling error
    IssueTrackingServiceService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    }; // END handleError
    IssueTrackingServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssueTrackingServiceService);
    return IssueTrackingServiceService;
}());



/***/ }),

/***/ "./src/app/search-view/search-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/search-view/search-view.module.ts ***!
  \***************************************************/
/*! exports provided: SearchViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchViewModule", function() { return SearchViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_view_search_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-view/search-view.component */ "./src/app/search-view/search-view/search-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchViewModule = /** @class */ (function () {
    function SearchViewModule() {
    }
    SearchViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_search_view_search_view_component__WEBPACK_IMPORTED_MODULE_2__["SearchViewComponent"]]
        })
    ], SearchViewModule);
    return SearchViewModule;
}());



/***/ }),

/***/ "./src/app/search-view/search-view/search-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/search-view/search-view/search-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC12aWV3L3NlYXJjaC12aWV3L3NlYXJjaC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-view/search-view/search-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/search-view/search-view/search-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/search-view/search-view/search-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/search-view/search-view/search-view.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchViewComponent", function() { return SearchViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchViewComponent = /** @class */ (function () {
    function SearchViewComponent() {
    }
    SearchViewComponent.prototype.ngOnInit = function () {
    };
    SearchViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-view',
            template: __webpack_require__(/*! ./search-view.component.html */ "./src/app/search-view/search-view/search-view.component.html"),
            styles: [__webpack_require__(/*! ./search-view.component.css */ "./src/app/search-view/search-view/search-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchViewComponent);
    return SearchViewComponent;
}());



/***/ }),

/***/ "./src/app/special-selectors/special-selectors.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/special-selectors/special-selectors.module.ts ***!
  \***************************************************************/
/*! exports provided: SpecialSelectorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialSelectorsModule", function() { return SpecialSelectorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpecialSelectorsModule = /** @class */ (function () {
    function SpecialSelectorsModule() {
    }
    SpecialSelectorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SpecialSelectorsModule);
    return SpecialSelectorsModule;
}());



/***/ }),

/***/ "./src/app/user-entry/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/user-entry/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZW50cnkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-entry/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user-entry/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"height: 100vh;overflow: hidden\">\r\n   <div class=\"row p-0 m-0\"  style=\"\r\n   overflow: hidden;height: 95vh\">\r\n    <div class=\"col-8 p-0 m-0\">\r\n        <div class=\"row p-0 m-0\">\r\n          <!--contact side menubar-->\r\n          <div class=\"row p-0 m-0 mt-4\">\r\n              <div class=\"col-1 p-0 m-0\"></div>\r\n            <div class=\"col-1 m-0 p-0 d-flex flex-column col-10 \">\r\n              \r\n              <img class=\"py-1 pr-2 mb-3\" src=\"assets/facebok.png\" style=\"height: 40px;width: 40px;\">\r\n              <img class=\"py-1 pr-2 mb-3\" src=\"assets/twitter.svg\" style=\"height: 40px;width: 40px;\">\r\n              <img class=\"py-1 pr-2 mb-3\" src=\"assets/link.png\" style=\"height: 40px;width: 40px;\">\r\n              <img class=\"py-1 pr-2 mb-3\" src=\"assets/github.png\" style=\"height: 40px;width: 40px;\">\r\n              <img class=\"py-1 pr-2 mb-3\" src=\"assets/gmail.svg\" style=\"height: 40px;width: 40px;\">\r\n              </div>\r\n              <div class=\"col-1 p-0 m-0\"></div>\r\n          </div>\r\n            <!--description of the app-->\r\n        <div class=\"card bg-dark text-dark col-11 m-0 p-0 border-0\">\r\n          <img class=\"card-img pb-1\" src=\"assets/rocket-taking-off.gif\" style=\"background-color:rgb(253, 255, 255);height: 99vh\" alt=\"Card image\">\r\n          <div class=\"card-img-overlay\">\r\n            <h1 class=\"card-title\" style=\"font-family: Josephin Slab, serif;\">ISSUS</h1>\r\n            <h4 class=\"card-text\" style=\"font-family:Josephin Slab, serif;\">An issue tracking initiative.</h4>\r\n          </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-4 pl-0 ml-0 pr-4\">\r\n    <!--Login-->\r\n  \r\n    <div class=\"card text-center mt-3\" >\r\n        <div class=\"card-header\" style=\"font-size: 40px\">\r\n          Login\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Enter Username & Password</h5>\r\n          \r\n          <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/user.svg\" style=\"height:20px;width: 20px;\"></span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username or email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n            <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/password.png\" style=\"height:20px;width: 20px;\"></span>\r\n                </div>\r\n                <input ype=\"text\" class=\"form-control p-3\" placeholder=\"Password\" type=\"password\" pPassword />\r\n            \r\n              </div>\r\n          <a href=\"#\" class=\"btn btn-primary\" style=\"font-size: 20px\">login</a>\r\n        </div>\r\n        <p class=\"card-text\">or<br>login with</p>\r\n       <div class=\"p-2\">\r\n          <!--social login-->\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">\r\n            <img src=\"assets/facebook_color.png\" style=\"height: 30px;width: 30px\" class=\"my-1\">\r\n            <small class=\"my-1 ml-1\">facebook</small></button>\r\n    <button type=\"button\" class=\"btn btn-light btn-lg btn-block\">\r\n        <img src=\"assets/google.png\" style=\"height: 30px;width: 30px\" class=\"my-1\">\r\n      <small class=\"my-1 ml-1\">Google</small></button>\r\n         \r\n       </div> <div class=\"card-footer bg-white\">\r\n         <p class=\"pb-0\" style=\"font-size: 20px\">or</p>\r\n          <button type=\"button\" class=\"btn btn-light btn-lg btn-block\">\r\n              <img src=\"assets/signup.png\" style=\"height: 40px;width: 40px\" class=\"my-1\">\r\n              <small class=\"my-1 ml-1\">You can sign up over here</small></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   </div> \r\n   <div class=\"card-footer text-white bg-dark text-right\">\r\n      V1.0\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user-entry/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-entry/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user-entry/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user-entry/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-entry/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-entry/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZW50cnkvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-entry/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-entry/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"height: 100vh;overflow: hidden\">\r\n    <div class=\"row p-0 m-0\"  style=\"\r\n    overflow: hidden;height: 95vh\">\r\n     <div class=\"col-8 p-0 m-0\">\r\n         <div class=\"row p-0 m-0\">\r\n           <!--contact side menubar-->\r\n           <div class=\"row p-0 m-0 mt-4\">\r\n               <div class=\"col-1 p-0 m-0\"></div>\r\n             <div class=\"col-1 m-0 p-0 d-flex flex-column col-10 \">\r\n               \r\n               <img class=\"py-1 pr-2 mb-3\" src=\"assets/facebok.png\" style=\"height: 40px;width: 40px;\">\r\n               <img class=\"py-1 pr-2 mb-3\" src=\"assets/twitter.svg\" style=\"height: 40px;width: 40px;\">\r\n               <img class=\"py-1 pr-2 mb-3\" src=\"assets/link.png\" style=\"height: 40px;width: 40px;\">\r\n               <img class=\"py-1 pr-2 mb-3\" src=\"assets/github.png\" style=\"height: 40px;width: 40px;\">\r\n               <img class=\"py-1 pr-2 mb-3\" src=\"assets/gmail.svg\" style=\"height: 40px;width: 40px;\">\r\n               </div>\r\n               <div class=\"col-1 p-0 m-0\"></div>\r\n           </div>\r\n             <!--description of the app-->\r\n         <div class=\"card bg-dark text-dark col-11 m-0 p-0 border-0\">\r\n           <img class=\"card-img pb-1\" src=\"assets/signupgify.gif\" style=\"background-color:rgb(156, 217, 233);height: 99vh\" alt=\"Card image\">\r\n           <div class=\"card-img-overlay\">\r\n             <h1 class=\"card-title\" style=\"font-family: Josephin Slab, serif;\">ISSUS</h1>\r\n             <h4 class=\"card-text\" style=\"font-family:Josephin Slab, serif;\">An issue tracking initiative.</h4>\r\n           </div>\r\n         </div>\r\n         </div>\r\n     </div>\r\n     <div class=\"col-4 pl-0 ml-0 pr-4\">\r\n     <!--Sign up-->\r\n   \r\n     <div class=\"card text-center mt-3\" >\r\n         <div class=\"card-header\" style=\"font-size: 40px\">\r\n           Sign up\r\n         </div>\r\n         <div class=\"card-body\">\r\n           <h5 class=\"card-title\">Fill the form to register</h5>\r\n           \r\n           <div class=\"input-group mb-3\">\r\n               <div class=\"input-group-prepend\">\r\n                 <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/user.svg\" style=\"height:20px;width: 20px;\"></span>\r\n               </div>\r\n               <input type=\"text\" class=\"form-control\" placeholder=\"First name\" aria-label=\"firstname\" aria-describedby=\"basic-addon1\">\r\n             </div>\r\n\r\n             <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/user.svg\" style=\"height:20px;width: 20px;\"></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" aria-label=\"lastname\" aria-describedby=\"basic-addon1\">\r\n              </div>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/emailicon.png\" style=\"height:20px;width: 20px;\"></span>\r\n                  </div>\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email@example.com\" aria-label=\"email\" aria-describedby=\"basic-addon1\">\r\n                </div>\r\n\r\n                <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/phoneicon.svg\" style=\"height:20px;width: 20px;\"></span>\r\n                    </div>\r\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Mobile no.\" aria-label=\"mobilenumber\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n\r\n             <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                   <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/password.png\" style=\"height:20px;width: 20px;\"></span>\r\n                 </div>\r\n                 <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"password\" aria-describedby=\"basic-addon1\">\r\n               </div>\r\n\r\n               <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\"><img src=\"assets/confirmpassicon.png\" style=\"height:20px;width: 20px;\"></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\" aria-label=\"confirmpassword\" aria-describedby=\"basic-addon1\">\r\n                </div>\r\n\r\n           <a href=\"#\" class=\"btn btn-primary\" style=\"font-size: 20px\">sign up</a>\r\n         </div>\r\n         <div class=\"card-footer bg-white\">\r\n            <p class=\"pb-0\" style=\"font-size: 20px\">or</p>\r\n             <button type=\"button\" class=\"btn btn-light btn-lg btn-block\">\r\n                 <img src=\"assets/signup.png\" style=\"height: 40px;width: 40px\" class=\"my-1\">\r\n                 <small class=\"my-1 ml-1\">You can login over here</small></button>\r\n           </div>\r\n        </div> \r\n       </div>\r\n     \r\n    \r\n </div>\r\n <div class=\"card-footer text-white bg-dark text-right\">\r\n    V1.0\r\n  </div>\r\n</div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/user-entry/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-entry/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ng6_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/ng6-toastr */ "./node_modules/ng6-toastr/ng2-toastr.js");
/* harmony import */ var _node_modules_ng6_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ng6_toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_issue_tracking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/issue-tracking-service.service */ "./src/app/issue-tracking-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, router, toastr, vcr) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        // go to login page
        this.goToLogin = function () {
            _this.router.navigate(['/login']);
        };
        // registering user
        this.signUp = function () {
            if (!_this.firstName) {
                _this.toastr.warning('Firstname missing');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('Lastname missing');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('Mobile number missing');
            }
            else if (!_this.email) {
                _this.toastr.warning('Email missing');
            }
            else if (!_this.password) {
                _this.toastr.warning('Password missing');
            }
            else {
                var data_1 = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password
                };
                console.log(data_1);
                _this.service.registeringMethod(data_1).subscribe(
                // if user data is fetched
                function (success) {
                    console.log(success);
                    if (success.status === 200) {
                        setTimeout(function () {
                            _this.toastr.success("A verification message has been sent to " + data_1.email);
                            _this.goToLogin();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(success.message);
                    }
                }, 
                // if user data can not be fetched
                function (error) {
                    _this.toastr.warning('can not be registered');
                });
            }
        };
        toastr.setRootViewContainerRef(vcr);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user-entry/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user-entry/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_issue_tracking_service_service__WEBPACK_IMPORTED_MODULE_3__["IssueTrackingServiceService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _node_modules_ng6_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastsManager"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-entry/user-entry.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-entry/user-entry.module.ts ***!
  \*************************************************/
/*! exports provided: UserEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntryModule", function() { return UserEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-entry/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user-entry/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng6_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr */ "./node_modules/ng6-toastr/ng2-toastr.js");
/* harmony import */ var ng6_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng6_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserEntryModule = /** @class */ (function () {
    function UserEntryModule() {
    }
    UserEntryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_8__["PasswordModule"],
                ng6_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{ path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
        })
    ], UserEntryModule);
    return UserEntryModule;
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

module.exports = __webpack_require__(/*! d:\edwisor_2\project\issue-tracking-tool-app\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map