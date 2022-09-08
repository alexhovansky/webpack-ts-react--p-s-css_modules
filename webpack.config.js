const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postcssOmitImportTilde = require('postcss-omit-import-tilde');
const postcssInlineSvg = require('postcss-inline-svg');
const postcssImport = require('postcss-import');
const postcssNestedAncestors = require('postcss-nested-ancestors');
const postcssAdvancedVariables = require('postcss-advanced-variables');
const postcssAtroot = require('postcss-atroot');
const postcssExtendRule = require('postcss-extend-rule');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const lost = require('lost');
const postcssCalc = require('postcss-calc');
const autoprefixer = require('autoprefixer');
const postcssRgb = require('postcss-rgb');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

const paths = require('./config/paths');

const isDevelopment = true;

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      parser: 'postcss-scss',
      plugins: [
        postcssOmitImportTilde,
        postcssImport({
          path: [__dirname],
          plugins: [postcssOmitImportTilde]
        }),
        postcssExtendRule(),
        postcssAdvancedVariables(),
        postcssPresetEnv({ autoprefixer: false }),
        postcssAtroot(),
        postcssNestedAncestors(),
        postcssNested(),
        lost,
        postcssCalc,
        postcssRgb,
        postcssFlexbugsFixes(),
        autoprefixer(),
        postcssInlineSvg({
          paths: ['./src/']
        })
      ]
    }
  }
};

const DEV_PORT = process.env.DEV_PORT || 3000;
const DEV_HOST = process.env.DEV_HOST || '0.0.0.0';

module.exports = {
  entry: {
    app: [
      ...(isDevelopment ? ['webpack/hot/only-dev-server'] : []),
      paths.appIndexJs
    ]
  },

  output: {
    path: paths.appBuild,
    filename: isDevelopment ? 'static/js/bundle.js' : 'static/js/[name].[chunkhash:8].js',
    chunkFilename: isDevelopment ? 'static/js/[name].chunk.js' : 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    sourceMapFilename: '[file].js.map'
  },

  cache: isDevelopment
    ? {
      type: 'filesystem',
      allowCollectingMemory: true
    }
    : false,

  devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,

  mode: isDevelopment ? 'development' : 'production',

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'node_modules'), __dirname],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: isDevelopment
        ? undefined
        : {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].chunk.css',
      ignoreOrder: true
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                mode: 'local',
                localIdentName: isDevelopment ? '[folder]__[local]_[hash:base64:6]' : '[hash:base64:6]',
                exportLocalsConvention: 'camelCase'
              },
              importLoaders: 1
            }
          },
          postCssLoader
        ]
      },
      {
        test: /(?=node_modules|src)(.+)\.css$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          },
        },
      },
      {
        test: /\.ts(x)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: DEV_PORT,
    host: DEV_HOST,
    static: {
      directory: paths.appPublic,
      watch: false
    },
    hot: true,
    historyApiFallback: true
  }
};
