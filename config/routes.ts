export default [
    { path: '/', component: '@/pages/index'},
    { 
        path: '/', 
        component: '@/layouts/index',
        // redirect:'/user',
        routes: [
            { 
                exact: false,
                path: '/user', 
                component: '@/pages/user/index', 
                wrappers:['@/wrappers/auth'],//wrappers高阶组件封装 用于路由级别的权限校验
            },// exact 表示精确匹配 为true时严格控制大小写 默认为false ;redirect 重定向
        ]
    },
];