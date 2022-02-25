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
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index')}),
        "exact": true
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index')}),
        "routes": [
          {
            "exact": false,
            "path": "/user",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__index' */'@/pages/user/index')}),
            "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'@/wrappers/auth')})]
          }
        ]
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
