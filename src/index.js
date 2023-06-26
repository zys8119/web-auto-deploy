"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const lodash_1 = require("lodash");
function transform(html, options) {
    const tempPath = path_1.resolve(__dirname, "../src/temp.html");
    const tempContent = lodash_1.template(fs_1.readFileSync(tempPath, 'utf-8'))(options);
    return html.replace(/(<head>)/, `$1${tempContent}`);
}
exports.transform = transform;
//# sourceMappingURL=index.js.map