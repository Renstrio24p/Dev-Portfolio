const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import the copy-webpack-plugin

module.exports = (argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.jsx',
    mode: argv.mode,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'assets/[name].[contenthash].js',
    },
    target: 'web',
    devServer: {
      port: 4500,
      open: true,
      hot: true,
      liveReload: true,
      historyApiFallback: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : false,
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      fallback: {
        querystring: require.resolve('querystring-es3'),
        url: require.resolve('url'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                isDevelopment && require.resolve('react-refresh/babel'), // Include the react-refresh/babel plugin conditionally
              ].filter(Boolean),
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|ogv)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'videos/[name].[contenthash][ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
      splitChunks: {
        chunks: 'async',
        minSize: 2000,
        maxSize: 20000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './', 'index.html'),
      }),
      new Dotenv(),
      new webpack.DefinePlugin({
        'process.env.MAPBOX_TOKEN': JSON.stringify(process.env.MAPBOX_TOKEN),
      }),
      new SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
      new CleanWebpackPlugin(),
      new WebpackManifestPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'assets/[name].css' : 'assets/[name].[contenthash].css',
      }),

      // Add the CopyWebpackPlugin configuration to copy the 'src' folder to 'dist'
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src',
            to: '', // Copy to the root of 'dist'
          },
        ],
      }),
    ].filter(Boolean),
  };
};
