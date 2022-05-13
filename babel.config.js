module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ['module-resolver', {
          alias: {
            '@components': './components',
            '@api': './components/api',
            '@screens': './components/screens',
            '@UI': './components/UI',
            '@config': './config',
            '@hooks': './hooks',
            '@store': './store',
            '@Types': './types',
            '@assets': './assets',
            '@routes': './routes'
          }
        }]
    ]
  };
};
