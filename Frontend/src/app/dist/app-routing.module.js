"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var signup_component_1 = require("./signup/signup.component");
var header_component_1 = require("./header/header.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pages/inventory' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    {
        path: 'pages',
        component: header_component_1.HeaderComponent,
        children: [
            { path: 'inventory', loadChildren: function () { return Promise.resolve().then(function () { return require('./inventory/inventory.module'); }).then(function (mod) { return mod.InventoryModule; }); } },
            { path: 'billing', loadChildren: function () { return Promise.resolve().then(function () { return require('./billing/billing.module'); }).then(function (mod) { return mod.BillingModule; }); } },
        ]
    },
];
//   {path:'header', component: HeaderComponent,canActivate: [AuthGuardGuard]},
//   {path:'login', component: LoginComponent},
//   {path:'signup', component: SignupComponent},
//   {path:'Inventory', loadChildren:()=>import('./inventory/inventory.module').then(mod=>mod.InventoryModule)},
//   {path:'Billing', loadChildren:()=>import('./billing/billing.module').then(mod=>mod.BillingModule)},
//   {path:'**', component: WildcardComponent}
// ]
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
