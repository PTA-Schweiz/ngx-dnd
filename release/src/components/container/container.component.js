"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var directives_1 = require("../../directives");
var i = 0;
function getNextId() {
    return i++;
}
/**
 * Component that allows nested ngxDroppable and ngxDraggables
 *
 * @export
 * @class ContainerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.copy = false;
        this.removeOnSpill = false;
        this.dropZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drop = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.over = new core_1.EventEmitter();
        this.out = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
    }
    Object.defineProperty(ContainerComponent.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this._defaultZones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    ContainerComponent.prototype.ngOnInit = function () {
        this._defaultZones = [this.dropZone];
    };
    ContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.droppable.drag.subscribe(function (v) { return _this.drag.emit(v); });
        this.droppable.drop.subscribe(function (v) { return _this.drop.emit(v); });
        this.droppable.over.subscribe(function (v) { return _this.over.emit(v); });
        this.droppable.out.subscribe(function (v) { return _this.out.emit(v); });
        this.droppable.remove.subscribe(function (v) { return _this.remove.emit(v); });
        this.droppable.cancel.subscribe(function (v) { return _this.cancel.emit(v); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "copy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "removeOnSpill", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "droppableItemClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropZone", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContainerComponent.prototype, "dropZones", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ContainerComponent.prototype, "moves", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(core_1.TemplateRef),
        __metadata("design:type", core_1.TemplateRef)
    ], ContainerComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(),
        core_1.ViewChild(directives_1.DroppableDirective),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "droppable", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "drop", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "drag", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "over", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "out", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "remove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContainerComponent.prototype, "cancel", void 0);
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dnd-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map