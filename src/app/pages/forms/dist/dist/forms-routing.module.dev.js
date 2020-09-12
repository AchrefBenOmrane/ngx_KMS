"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.FormsRoutingModule = void 0;

var iConstat_component_1 = require("./iConstat/iConstat.component");

var core_1 = require("@angular/core");

var router_1 = require("@angular/router");

var forms_component_1 = require("./forms.component");

var form_inputs_component_1 = require("./form-inputs/form-inputs.component");

var form_layouts_component_1 = require("./form-layouts/form-layouts.component");

var datepicker_component_1 = require("./datepicker/datepicker.component");

var decision_component_1 = require("./decision/decision.component");

var popup_component_1 = require("./popup/popup.component");

var action_component_1 = require("./action/action.component");

var desAction_component_1 = require("./desAction/desAction.component"); // tslint:disable-next-line: import-spacing


var routes = [{
  path: '',
  component: forms_component_1.FormsComponent,
  children: [{
    path: 'inputs',
    component: form_inputs_component_1.FormInputsComponent
  }, {
    path: 'layouts',
    component: form_layouts_component_1.FormLayoutsComponent
  }, {
    path: 'layouts',
    component: form_layouts_component_1.FormLayoutsComponent
  }, {
    path: 'constat',
    component: iConstat_component_1.IConstatComponent
  }, {
    path: 'decision',
    component: decision_component_1.DecisionComponent
  }, {
    path: 'popup',
    component: popup_component_1.PopupComponent
  }, {
    path: 'desAction',
    component: desAction_component_1.desActionComponent
  }, {
    path: 'datepicker',
    component: datepicker_component_1.DatepickerComponent
  }, {
    path: 'action',
    component: action_component_1.ActionComponent
  }]
}];

var FormsRoutingModule =
/** @class */
function () {
  function FormsRoutingModule() {}

  FormsRoutingModule = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forChild(routes)],
    exports: [router_1.RouterModule]
  })], FormsRoutingModule);
  return FormsRoutingModule;
}();

exports.FormsRoutingModule = FormsRoutingModule;