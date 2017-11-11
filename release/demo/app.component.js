"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.version = APP_VERSION;
        this.theme = 'dark';
        this.orderableList = ['Item 1', 'Item 2', 'Item 3'];
        this.orderableLists = [
            ['Item 1a', 'Item 2a', 'Item 3a'],
            ['Item 1b', 'Item 2b', 'Item 3b']
        ];
        this.nestedLists = [
            { label: 'Item 1', children: [] },
            { label: 'Item 2', children: [
                    { label: 'Item 2a', children: [] },
                    { label: 'Item 2b', children: [] },
                    { label: 'Item 2c', children: [] },
                ]
            },
            { label: 'Item 3', children: [
                    { label: 'Item 3a', children: [] },
                    { label: 'Item 3b', children: [] },
                    { label: 'Item 3c', children: [] },
                ]
            },
        ];
        this.sourceItems = [
            { label: 'Item 1' },
            { label: 'Item 2' },
            { label: 'Item 3' }
        ];
        this.targetItems = [];
        this.targetItemsA = [];
        this.targetItemsB = [];
        this.sourceNestedItems = [
            { label: 'Item 1, no children', children: [] },
            { label: 'Item 2', children: [
                    { label: 'no' },
                    { label: 'children' }
                ]
            },
            { label: 'Item 3, can\'t have children' }
        ];
        this.targetNestedItems = [];
        this.sourceBuilderTools = [
            { name: 'Section', children: [], inputType: 'section', icon: 'section', class: 'wide' },
            { name: 'A String', inputType: 'string', icon: 'field-text', class: 'half' },
            { name: 'A Number', inputType: 'number', icon: 'field-numeric', class: 'half' }
        ];
        this.targetBuilderTools = [];
        this.droppableItemClass = function (item) { return item.class + " " + item.inputType; };
    }
    AppComponent.prototype.builderDrag = function (e) {
        var item = e.value;
        item.data = item.inputType === 'number' ?
            (Math.random() * 100) | 0 :
            Math.random().toString(36).substring(20);
    };
    AppComponent.prototype.log = function (e) {
        console.log(e.type, e);
    };
    AppComponent.prototype.canMove = function (e) {
        return e.indexOf('Disabled') === -1;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styleUrls: ['./app.component.scss'],
            templateUrl: './app.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map