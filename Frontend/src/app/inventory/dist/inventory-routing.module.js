"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventoryRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_component_1 = require("./products/products.component");
var add_items_component_1 = require("./add-items/add-items.component");
var category_component_1 = require("./category/category.component");
var routes = [
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'additem', component: add_items_component_1.AddItemsComponent },
    { path: 'category', component: category_component_1.CategoryComponent }
];
var InventoryRoutingModule = /** @class */ (function () {
    function InventoryRoutingModule() {
    }
    InventoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], InventoryRoutingModule);
    return InventoryRoutingModule;
}());
exports.InventoryRoutingModule = InventoryRoutingModule;