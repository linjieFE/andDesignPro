import { Request,Response } from 'express';
import mockjs from 'mockjs';
export default {
    // 支持值为 Object 和 Array
    'GET /api/users':(req:Request, res:Response) => {
        
        const result = mockjs.mock({
        'list|100':[{name:'@city','value|1-100':50, 'type|0-2':1}],
        });
        res.json({
            result,
            code:200,
            msg:'seccess'
        })
    },
  
    // GET 可忽略
    '/api/users/1': { id: 1 },
  
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req:Request, res:Response) => {
      // 添加跨域请求头
      res.setHeader('Access-Control-Allow-Origin', '*');//跨域请求的header头
      res.end('ok');
    },
    'delete /api/users/:id': (req:Request, res:Response) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({code:'0'});
    },
    'put /api/users/:id': (req:Request, res:Response) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({code:'1'});
    },
  }