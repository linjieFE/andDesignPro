export default [
    { path: '/', component: '@/pages/index'},
    { 
        path: '/index', 
        component: '@/layouts/index',
        redirect:'/user',
        routes: [
            { exact: false, path: '/user', component: '@/pages/user/index', },// exact 表示精确匹配 为true时严格控制大小写 默认为false ;redirect 重定向
        ]
    },
];