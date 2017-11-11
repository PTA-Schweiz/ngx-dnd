import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective, DroppableDirective, DragHandleDirective } from './directives';
import { ContainerComponent, ItemComponent } from './components';
import { DrakeStoreService } from './services';
var components = [ContainerComponent, ItemComponent];
var directives = [DraggableDirective, DroppableDirective, DragHandleDirective];
var NgxDnDModule = /** @class */ (function () {
    function NgxDnDModule() {
    }
    return NgxDnDModule;
}());
export { NgxDnDModule };
//# sourceMappingURL=ngx-dnd.module.js.map