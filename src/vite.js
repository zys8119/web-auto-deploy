"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const index_1 = require("./index");
const defaultConfig_1 = require("./defaultConfig");
function default_1(options) {
    return {
        enforce: "post",
        name: "web-auto-deploy",
        transformIndexHtml(html) {
            return (0, index_1.transform)(html, (0, lodash_1.merge)(defaultConfig_1.default, options));
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=vite.js.map