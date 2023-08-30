import { menus } from './menus'

export default {
    nodeModulesTransform: {
        type: 'none',
        exclude: [],
    },
    history: {
        type: 'hash',
    },
    extraBabelPlugins: [
        [
          'babel-plugin-import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
            },
        ],
      ],
      alias: {
        pureHooks: process.cwd() + '/packages/hooks/src/index.ts',
      },
      resolve: {
        includes: ['packages/hooks/src', 'docs'],
      },
      navs: [
        {
          title: "指南",
          path: "/guide",
        },
        {
          title: "Hooks",
          path: "/hooks",
        }
      ],
      menus: {
        '/': [
          {
            title: '首页',
            path: 'index',
          },
        ],
        '/guide': [
          {
            title: '介绍',
            path: '/guide',
          },
        ],
        '/hooks': menus,
      },
    mode: "site",
    title: "PureHooks",
    logo: '/logo.png',
}