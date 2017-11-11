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
var drake_store_service_1 = require("../services/drake-store.service");
var i = 10000;
function getNextId() {
    return i++;
}
/**
 * Makes the container droppable and children draggable.
 *
 * @export
 * @class DroppableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {AfterViewInit}
 */
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, drakesService) {
        this.el = el;
        this.renderer = renderer;
        this.drakesService = drakesService;
        this.copy = false;
        this.copySortSource = false;
        this.removeOnSpill = false;
        this.drop = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.over = new core_1.EventEmitter();
        this.out = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
    }
    Object.defineProperty(DroppableDirective.prototype, "container", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "dropZone", {
        get: function () {
            return this._dropZone || this.ngxDroppable || this.defaultZone;
        },
        set: function (val) {
            this._dropZone = val;
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        this.defaultZone = "@@DefaultDropZone-" + getNextId() + "@@";
        this.drakesService.register(this);
    };
    DroppableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.over.subscribe(function (ev) {
            _this.renderer.setElementClass(_this.container, 'gu-over', true);
        });
        this.out.subscribe(function (ev) {
            _this.renderer.setElementClass(_this.container, 'gu-over', false);
        });
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.remove(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "copy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "copySortSource", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "removeOnSpill", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DroppableDirective.prototype, "ngxDroppable", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "drop", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "drag", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "over", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "out", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "remove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DroppableDirective.prototype, "cancel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableDirective.prototype, "dropZone", null);
    DroppableDirective = __decorate([
        core_1.Directive({ selector: '[ngxDroppable]' }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer,
            drake_store_service_1.DrakeStoreService])
    ], DroppableDirective);
    return DroppableDirective;
}());
exports.DroppableDirective = DroppableDirective;
//# sourceMappingURL=ngx-droppable.directive.js.map