import {transform, Options} from "./index"
import {merge} from "lodash"

class MyHtmlWebpackPlugin {
    options:Options = {} as any
    constructor(options?:Partial<Options>) {
        this.options = merge({
            interval:1000,
            beforeHtml:null,
            afterHtml:null,
            enable:true,
        }, options)
    }

    apply(compiler) {
        // 注册 Webpack 插件的事件钩子
        compiler.hooks.compilation.tap('MyHtmlWebpackPlugin', (compilation) => {
            // 注册处理 HTML 的事件钩子
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
                'MyHtmlWebpackPlugin',
                (htmlPluginData, callback) => {
                    // 获取处理后的 HTML 内容
                    let modifiedHtml = htmlPluginData.html;
                    // 在 HTML 中执行您的自定义处理逻辑
                    modifiedHtml = this.customHtmlProcessing(modifiedHtml);
                    // 更新 HTML 内容
                    htmlPluginData.html = modifiedHtml;

                    // 调用回调函数通知 Webpack 完成处理
                    callback(null, htmlPluginData);
                }
            );
        });
    }

    customHtmlProcessing(html) {
        return transform(html, this.options);
    }
}

module.exports = MyHtmlWebpackPlugin;

