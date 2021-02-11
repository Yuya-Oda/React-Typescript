// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'development', //開発モード 本番モード：production
  entry: './src/index.tsx', // 起点となる場所
  output: {
    filename: 'main.js', //バンドル？？
  },
  devServer: {
    // 開発環境サーバの設定
    contentBase: './public',
    compress: true,
    hot: true, // hot reload 修正時に更新するかの設定
    host: 'localhost',
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
