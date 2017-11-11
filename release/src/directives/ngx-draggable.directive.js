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
var ngx_droppable_directive_1 = require("./ngx-droppable.directive");
var drake_store_service_1 = require("../services/drake-store.service");
/**
 * Adds properties and events to draggable elements
 *
 * @export
 * @class DraggableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, drakesService, droppableDirective) {
        this.el = el;
        this.drakesService = drakesService;
        this.droppableDirective = droppableDirective;
        this._moves = true;
        /*
        ContentChildren doesn't get children created with NgTemplateOutlet
        See https://github.com/angular/angular/issues/14842
        Implemented via updateElements method
        
        @ContentChildren(DragHandleDirective, {descendants: true})
        handlesList: QueryList<DragHandleDirective>; */
        this.handles = [];
        this.drag = new core_1.EventEmitter();
        this.dragDelay = 200; // milliseconds
        this.dragDelayed = true;
    }
    Object.defineProperty(DraggableDirective.prototype, "dropZones", {
        get: function () {
            return this._dropZones || this.ngxDraggable || this._parentDropzones;
        },
        set: function (val) {
            this._dropZones = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "hasHandle", {
        get: function () {
            return !!this.handles.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
    DraggableDirective.prototype.onMove = function (e) {
        if (!this._moves || this.dragDelayed) {
            e.stopPropagation();
            clearTimeout(this.touchTimeout);
        }
    };
    DraggableDirective.prototype.onDown = function (e) {
        var _this = this;
        if (this._moves) {
            this.touchTimeout = setTimeout(function () {
                _this.dragDelayed = false;
            }, this.dragDelay);
        }
    };
    DraggableDirective.prototype.onUp = function (e) {
        if (this._moves) {
            clearTimeout(this.touchTimeout);
            this.dragDelayed = true;
        }
    };
    DraggableDirective.prototype.ngOnInit = function () {
        this.update();
    };
    DraggableDirective.prototype.update = function () {
        this._parentDropzones = [this.droppableDirective.dropZone];
        this.drakesService.registerDraggable(this);
        this.updateElements();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.drakesService.removeDraggable(this);
    };
    DraggableDirective.prototype.updateElements = function () {
        var nativeElement = this.el.nativeElement;
        var handles = nativeElement.querySelectorAll('[ngxdraghandle]');
        this.handles = Array.from(handles).filter(function (h) { return findFirstDraggableParent(h) === nativeElement; });
        function findFirstDraggableParent(c) {
            while (c.parentNode) {
                c = c.parentNode;
                if (c.hasAttribute && c.hasAttribute('ngxdraggable')) {
                    return c;
                }
            }
        }
    };
    DraggableDirective.prototype.canMove = function (source, handle, sibling) {
        if (typeof this._moves === 'boolean')
            return this._moves;
        if (typeof this._moves === 'function')
            return this._moves(this.model, source, handle, sibling);
        return true;
    };
    DraggableDirective.prototype.moves = function (source, handle, sibling) {
        if (!this.canMove(source, handle, sibling))
            return false;
        return this.hasHandle ?
            this.handles.some(function (h) { return handelFor(handle, h); }) :
            true;
        function handelFor(c, p) {
            if (c === p)
                return true;
            while ((c = c.parentNode) && c !== p)
                ; // tslint:disable-line
            return !!c;
        }
    };
    DraggableDirective.prototype.ngDoCheck = function () {
        this.updateElements();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DraggableDirective.prototype, "ngxDraggable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "dropZones", null);
    __decorate([
        core_1.Input('moves'),
        __metadata("design:type", Boolean)
    ], DraggableDirective.prototype, "_moves", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DraggableDirective.prototype, "drag", void 0);
    __decorate([
        core_1.HostListener('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMove", null);
    __decorate([
        core_1.HostListener('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDown", null);
    __decorate([
        core_1.HostListener('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onUp", null);
    DraggableDirective = __decorate([
        core_1.Directive({ selector: '[ngxDraggable]' }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            drake_store_service_1.DrakeStoreService,
            ngx_droppable_directive_1.DroppableDirective])
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;
//# sourceMappingURL=ngx-draggable.directive.js.map