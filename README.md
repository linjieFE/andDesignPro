# umi project

## 初始化UmiJs
项目根目录下
```
yarn create @umijs/umi-app
```

###  安装依赖 Install dependencies, 

```bash
$ yarn
```

### 启动项目 Start the dev server,

```bash
$ yarn start
```
### 目录结构
src => 工程目录
    page =>页面内容

#### .umirc.ts 增加mfsu 加速webpack热更新 

#### 配置项目和插件

方案一：支持修改.umirc.ts 
.umirc.ts 增加layout:{} 配置项

方案二：config/config.ts中配置项目和插件 支持es6(通常用方案二)

#### 配置路由

### Mock
Get 可直接在浏览器访问，delete put post 请用postman上尝试
```
http://localhost:8000/api/users
```

### Umijs的常用插件

. 启用方式`有src/app.ts`并导出 getInitialState方法时启用，必须搭配`@umijs/plugin-model`一起使用

https://umijs.org/zh-CN/plugins/plugin-initial-state
