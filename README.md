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
