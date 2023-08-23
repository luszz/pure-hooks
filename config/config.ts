import { menus } from './menus'

export default {
    nodeModulesTransform: {
        type: 'none',
    },
    history: {
        type: 'hash',
    },
    extraBabelPlugins: [
        [
          'babel-plugin-import',
          {
            libraryName: '@alifd/next',
            style: false,
          },
          'fusion',
        ],
      ],
    mode: "site",
    title: "PureHooks",
    logo: '/logo.png',
}