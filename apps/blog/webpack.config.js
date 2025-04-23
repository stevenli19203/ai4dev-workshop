const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { shareAll } = require('@module-federation/enhanced');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'blog',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.tsx',
      },
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        }),
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: '19.0.0',
        },
        'react-dom': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '19.0.0',
        },
        'react-router-dom': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '6.29.0',
        },
      },
    }),
  ],
}; 