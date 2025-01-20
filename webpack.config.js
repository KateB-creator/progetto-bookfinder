const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

// Carica il file .env
dotenv.config();

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Pulisce automaticamente la cartella dist
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Estrae il CSS in un file separato
          'css-loader', // Interpreta i file CSS
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: 'asset/resource', // Sostituisce file-loader in Webpack 5
        generator: {
          filename: 'img/[name].[hash][ext]', // Salva le immagini nella cartella img con un nome unico
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // File HTML di origine
      inject: 'body',
      favicon: './src/img/favicon.svg', // Specifica la favicon
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nome del file CSS generato
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, // Porta del server locale
    open: true, // Apre automaticamente il browser
  },
  mode: 'development', // Imposta la modalità di sviluppo
};
