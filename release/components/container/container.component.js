import { Component, OnInit, AfterViewInit, Input, Output, ViewEncapsulation, ContentChild, TemplateRef, ViewChild, EventEmitter, } from '@angular/core';
import { DroppableDirective } from '../../directives';
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
var /**
 * Component that allows nested ngxDroppable and ngxDraggables
 *
 * @export
 * @class ContainerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
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
    return ContainerComponent;
}());
/**
 * Component that allows nested ngxDroppable and ngxDraggables
 *
 * @export
 * @class ContainerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map