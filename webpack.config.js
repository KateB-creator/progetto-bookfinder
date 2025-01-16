const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Carica il file .env
dotenv.config();

module.exports = {
  entry: './src/js/app.js', // Punto di ingresso dell'applicazione
  output: {
    filename: 'bundle.js', // Nome del file generato
    path: path.resolve(__dirname, 'dist'), // Cartella di output
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regola per tutti i file .css
        use: ['style-loader', 'css-loader'], // Loaders per processare i file CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Il template originale
      inject: true, // Inserisce automaticamente il bundle.js
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Cartella da servire
    },
    compress: true, // Abilita la compressione gzip
    port: 9000, // Porta del dev server
  },
  mode: 'development', // Modalità di sviluppo
};
