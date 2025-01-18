const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Carica il file .env
dotenv.config();

module.exports = {
  entry: './src/js/app.js', // Percorso corretto per il file di ingresso
  output: {
    filename: 'bundle.js', // Nome del file generato (niente './dist/')
    path: path.resolve(__dirname, 'dist'), // Cartella di output
    clean: true, // Pulisce la cartella dist prima di ogni build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash].[ext]', // Copia le immagini nella cartella dist/img
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      favicon: './src/img/favicon.svg',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, // Cambia porta
  },
  mode: 'development',
};

