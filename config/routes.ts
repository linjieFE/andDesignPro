export default [
    { path: '/', component: '@/pages/index'},
    { 
        path: '/', 
        component: '@/layouts/index',
        routes: [
            { exact: false, path: '/user', component: '@/pages/user/index' },// exact 表示精确匹配 为true时严格控制大小写 默认为false 
        ]
    },
];