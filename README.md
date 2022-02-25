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

#### 配置菜单

方案一：支持修改.umirc.ts 
.umirc.ts 增加layout:{} 配置项

方案二：config/config.ts中配置项目和插件 支持es6

