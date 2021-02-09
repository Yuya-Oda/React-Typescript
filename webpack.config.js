module.exports = {
    mode: 'production', //開発モード　本番モード：production
    entry: './src/index.js', // 起点となる場所
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
      extensions: ['.js'],
    },
  };