import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnDestroy, OnInit, QueryList, ContentChildren, ViewChildren, TemplateRef } from '@angular/core';
import { DragHandleDirective } from './ngx-drag-handle.directive';
import { DroppableDirective } from './ngx-droppable.directive';
import { DrakeStoreService } from '../services/drake-store.service';
/**
 * Adds properties and events to draggable elements
 *
 * @export
 * @class DraggableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
var /**
 * Adds properties and events to draggable elements
 *
 * @export
 * @class DraggableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, drakesService, droppableDirective) {
        this.el = el;
        this.drakesService = drakesService;
        this.droppableDirective = droppableDirective;
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
    DraggableDirective.prototype.onMove = 
    // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
    function (e) {
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
    return DraggableDirective;
}());
/**
 * Adds properties and events to draggable elements
 *
 * @export
 * @class DraggableDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
export { DraggableDirective };
//# sourceMappingURL=ngx-draggable.directive.js.map