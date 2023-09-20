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
const transform = require("web-auto-deploy/vite")
{
    apply(compiler) {
        compiler.plugin('done', function (compilation, callback) {
            fs.writeFileSync(
                path.resolve(__dirname,'../dist/index.html'), 
                transform(fs.readFileSync(indexPath, 'utf-8'), {
                    enable:true,
                    interval: 3000,
                    beforeHtml:null,
                    afterHtml:null
                })
            )
        })
    }
}
```
