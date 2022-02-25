export default [
    { exact: true, path: '/', component: '@/pages/index'},,// exact 表示精确匹配 为true时严格控制大小写 默认为false 
    { 
        path: '/user', 
        component: '@/pages/user/index'
    },
];