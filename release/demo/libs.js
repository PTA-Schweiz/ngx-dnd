"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
require("zone.js/dist/zone");
// import 'ts-helpers';
// angular
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
require("@angular/platform-browser-dynamic");
require("@angular/common");
if (IS_PRODUCTION) {
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
}
if (IS_DEV) {
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=libs.js.map