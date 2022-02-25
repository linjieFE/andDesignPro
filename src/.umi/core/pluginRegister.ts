// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/flexiv/Desktop/andDesignPro/src/app.ts';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '@@/plugin-layout/runtime.tsx';
import * as Plugin_3 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/flexiv/Desktop/andDesignPro/src/app.ts',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '@@/plugin-layout/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });

export const __mfsu = 1;
