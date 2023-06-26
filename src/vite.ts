import {Plugin} from "vite"
import {merge} from "lodash"
import {transform, Options} from "./index"
import defaultConfig from "./defaultConfig"
export default function (options:Options){
    return {
        enforce: "post",
        name: "web-auto-deploy",
        transformIndexHtml(html){
            return transform(html, merge(defaultConfig, options))
        }
    } as Plugin
}
