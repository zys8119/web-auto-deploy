import {readFileSync} from "fs"
import {resolve} from "path"
import {template} from "lodash"
export function transform(html:string, options?:Options){
    const tempPath = resolve(__dirname, "../src/temp.html")
    const tempContent = template(readFileSync(tempPath, 'utf-8'))(options)
    return html.replace(/(<head>)/,`$1${tempContent}`)
}


export interface Options {
    /**
     * 每次询问间隔时间，默认1000ms
     */
    interval:number
    /**
     * 是否启用，默认开启
     */
    enable:boolean
    /**
     * 插槽
     */
    beforeHtml:string
    afterHtml:string
}
