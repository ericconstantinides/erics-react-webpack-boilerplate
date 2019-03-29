module.exports = {
  ignore: [
    /\/core-js/,
  ],
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        },
        corejs: '3',
        useBuiltIns: 'usage'
      },
    ],
    '@babel/react'
  ]
}
