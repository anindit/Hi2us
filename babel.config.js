module.exports = function (api) {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@assets': './assets/',
          '@context': './src/context',
          '@generated': './src/generated',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ];
  //change to 'production' to check if this is working in 'development' mode
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
