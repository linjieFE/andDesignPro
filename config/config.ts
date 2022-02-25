import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform:{
    type: 'none'
  },
  layout: {},
  routes: routes,
  fastRefresh: {},
  mfsu:{}
});