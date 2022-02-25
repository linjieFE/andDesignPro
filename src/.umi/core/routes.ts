// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/flexiv/Desktop/andDesignPro/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/flexiv/Desktop/andDesignPro/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/",
        "component": require('@/layouts/index').default,
        "routes": [
          {
            "exact": false,
            "path": "/user",
            "component": require('@/pages/user/index').default
          },
          {
            "exact": false,
            "path": "/userinfo",
            "component": require('@/pages/user/index').default,
            "wrappers": [require('@/wrappers/auth').default]
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
