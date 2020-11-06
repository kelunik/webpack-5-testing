const path = require('path');

module.exports = {
    entry: {
        'entry.js': './entry.ts'
    },
    module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename, path.resolve(__dirname, 'tsconfig.json')]
        }
    }
};
