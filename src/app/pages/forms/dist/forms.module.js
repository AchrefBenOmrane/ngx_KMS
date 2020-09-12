"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsModule = void 0;
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var theme_module_1 = require("../../@theme/theme.module");
var forms_routing_module_1 = require("./forms-routing.module");
var forms_component_1 = require("./forms.component");
var form_inputs_component_1 = require("./form-inputs/form-inputs.component");
var form_layouts_component_1 = require("./form-layouts/form-layouts.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var popup_component_1 = require("./popup/popup.component");
var popup_component_2 = require("./popup/popup.component");
var buttons_component_1 = require("./buttons/buttons.component");
var forms_1 = require("@angular/forms");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var dialog_1 = require("@angular/material/dialog");
var iConstat_component_1 = require("./iConstat/iConstat.component");
var decision_component_1 = require("./decision/decision.component");
var action_component_1 = require("./action/action.component");
var button_1 = require("@angular/material/button");
var desAction_component_1 = require("./desAction/desAction.component");
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                theme_module_1.ThemeModule,
                theme_1.NbInputModule,
                theme_1.NbCardModule,
                theme_1.NbButtonModule,
                theme_1.NbActionsModule,
                theme_1.NbUserModule,
                theme_1.NbCheckboxModule,
                theme_1.NbTabsetModule,
                theme_1.NbRadioModule,
                theme_1.NbDatepickerModule,
                forms_routing_module_1.FormsRoutingModule,
                theme_1.NbSelectModule,
                theme_1.NbIconModule,
                theme_1.NbRouteTabsetModule,
                forms_1.FormsModule,
                dialog_1.MatDialogModule,
            ],
            exports: [
                dialog_1.MatDialogModule,
                button_1.MatButtonModule,
            ],
            declarations: [
                forms_component_1.FormsComponent,
                buttons_component_1.ButtonsComponent,
                form_inputs_component_1.FormInputsComponent,
                form_layouts_component_1.FormLayoutsComponent,
                datepicker_component_1.DatepickerComponent,
                iConstat_component_1.IConstatComponent,
                popup_component_1.PopupComponent,
                popup_component_2.DialogComponent,
                decision_component_1.DecisionComponent,
                action_component_1.ActionComponent,
                desAction_component_1.DesActionComponent,
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
