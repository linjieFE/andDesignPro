// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/flexiv/Desktop/andDesignPro/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/flexiv/Desktop/andDesignPro/src/.umi/plugin-layout/Layout.tsx')}),
    "routes": [
      {
        "exact": true,
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index')})
      },
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__index' */'@/pages/user/index')}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
