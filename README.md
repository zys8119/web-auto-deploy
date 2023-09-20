# web-auto-deploy
web自动部署

# 使用

#### vite

vite.config.ts

```typescript
import {defineConfig} from "vite"
import webAutoDeploy from "web-auto-deploy/vite"
export default defineConfig({
    plugins:[
        webAutoDeploy()
    ]
})
```

#### webpack4.X + vue cli

vue.config.ts

```typescript
const webAutoDeploy = require("web-auto-deploy/vite")
module.exports = {
    configureWebpack:{
        plugins: [
            new webAutoDeploy()
        ]
    }
}
```

#### webpack3.X + vue cli

在webpack插件位置添加以下代码

```javascript
const webAutoDeploy = require("web-auto-deploy/vite")
{
    apply(compiler) {
        compiler.plugin('done', function (compilation, callback) {
            const indexPath = path.resolve(__dirname,'../dist/index.html')
            let content = fs.readFileSync(indexPath, 'utf-8')
            content = (function transform(html, options){
                const tempPath =  path.resolve(process.cwd(), "node_modules/web-auto-deploy/src/temp.html")
                const tempContent = _.template(fs.readFileSync(tempPath, 'utf-8'))(options)
                return html.replace(/(<head>)/,`$1${tempContent}`)
            })(content, {
                enable:true,
                interval: 3000,
                beforeHtml:null,
                afterHtml:null
            })
            fs.writeFileSync(indexPath, content)
        })
    }
}
```
