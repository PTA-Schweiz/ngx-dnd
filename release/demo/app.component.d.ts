export declare class AppComponent {
    version: string;
    theme: string;
    orderableList: string[];
    orderableLists: string[][];
    nestedLists: {
        label: string;
        children: any[];
    }[];
    sourceItems: {
        label: string;
    }[];
    targetItems: any[];
    targetItemsA: any[];
    targetItemsB: any[];
    sourceNestedItems: {
        label: string;
    }[];
    targetNestedItems: any[];
    sourceBuilderTools: {
        name: string;
        inputType: string;
        icon: string;
        class: string;
    }[];
    targetBuilderTools: any[];
    droppableItemClass: (item: any) => string;
    builderDrag(e: any): void;
    log(e: any): void;
    canMove(e: any): boolean;
}
