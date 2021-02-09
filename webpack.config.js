module.exports = {
  mode: 'development', //開発モード　本番モード：production
  entry: './src/index.tsx', // 起点となる場所
  output: {
    filename: 'main.js', //バンドル？？
  },
  devServer: {　// 開発環境サーバの設定
    contentBase: './public',
    compress: true,
    hot: true, // hot reload 修正時に更新するかの設定
    host: 'localhost',
    port: 3000,
    publicPath: '/',
  },
  resolve: {　// ビルドする際の拡張子の指定？
    extensions: ['.ts', '.tsx', '.js'], // Reactを導入したのでtsxを追加
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 「？」で .ts　.tsx 両方に対応させる
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
};
