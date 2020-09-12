"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DecisionComponent = void 0;
var core_1 = require("@angular/core");
var DecisionComponent = /** @class */ (function () {
    function DecisionComponent() {
        this.personList = [
            { id: 1, name: 'Au', age: 30, companyName: 'Dee', country: 'Spain', city: 'Madrid' },
            { id: 2, name: 'Gue', age: 45, companyName: 'Insectus', country: 'USA', city: 'San ' },
            // tslint:disable-next-line: max-line-length
            { id: 3, name: ' House', age: 26, companyName: 'nic', country: 'Germany', city: ' am Main' },
            { id: 4, name: ' Vega', age: 30, companyName: 'lkl', country: 'Spain', city: 'Madrid' },
            { id: 5, name: 'er', age: 31, companyName: 'Portica', country: ' Kingdom', city: 'London' },
        ];
        this.awaitingPersonList = [
            { id: 6, name: 'George Vega', age: 28, companyName: 'l', country: 'Russia', city: 'w' },
            { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
            { id: 8, name: 'John Derp', age: 36, companyName: 'ing', country: 'USA', city: 'go' },
            { id: 9, name: 'ia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
            { id: 10, name: 'Jcz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
        ];
    }
    DecisionComponent.prototype.updateList = function (id, property, event) {
        var editField = event.target.textContent;
        this.personList[id][property] = editField;
    };
    DecisionComponent.prototype.remove = function (id) {
        this.awaitingPersonList.push(this.personList[id]);
        this.personList.splice(id, 1);
    };
    DecisionComponent.prototype.add = function () {
        if (this.awaitingPersonList.length > 0) {
            var person = this.awaitingPersonList[0];
            this.personList.push(person);
            this.awaitingPersonList.splice(0, 1);
        }
    };
    DecisionComponent.prototype.changeValue = function (id, property, event) {
        this.editField = event.target.textContent;
    };
    DecisionComponent = __decorate([
        core_1.Component({
            selector: 'ngx-decision',
            templateUrl: './decision.component.html',
            styleUrls: ['./decision.component.scss']
        })
    ], DecisionComponent);
    return DecisionComponent;
}());
exports.DecisionComponent = DecisionComponent;
