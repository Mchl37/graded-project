const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  remotes: {
    shared: 'shared@http://localhost:3010/sharedEntry.js',
  },
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
