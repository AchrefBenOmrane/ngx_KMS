"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DialogComponent = exports.PopupComponent = void 0;
var core_1 = require("@angular/core");
var PopupComponent = /** @class */ (function () {
    function PopupComponent(dialog) {
        this.dialog = dialog;
    }
    PopupComponent.prototype.openDialog = function () {
        // tslint:disable-next-line: no-use-before-declare
        var dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            // tslint:disable-next-line: no-console
            console.log("Dialog result: " + result);
        });
    };
    PopupComponent = __decorate([
        core_1.Component({
            selector: 'ngx-popup',
            templateUrl: './popup.component.html',
            styleUrls: ['./popup.component.scss']
        })
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dialog',
            templateUrl: 'dialog-content-example-dialog.html'
        })
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
