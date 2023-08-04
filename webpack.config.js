const html_webpack_plugin = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader_plugin } = require('vue-loader')
const path = require('path')
const dist_dit = path.resolve(__dirname, './public/js')

//
// get_entry
//

const get_entry = (dev) => {
  const default_entry = {
    widget_init: __dirname + '/src/widget_init.js',
    widget: __dirname + '/src/widget.js',
  }

  const dev_entry = {
    dev: __dirname + '/src/dev/dev.js',
  }

  return dev
    ? {
        ...dev_entry,
        ...default_entry,
      }
    : {
        ...default_entry,
      }
}

//
// get_rules
//

const get_rules = (dev) => {
  rules = [
    // vue
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },

    // js
    {
      test: /\.(mjs|js)$/i,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },

    // sass
    {
      test: /\.sass$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev ? true : false,
            sassOptions: {
              indentedSyntax: true,
            },
          },
        },
      ],
    },

    // scss
    {
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        'sass-loader',
      ],
    },

    // files
    {
      test: /\.(png|jpg|webp)$/i,
      type: 'asset/resource',
    },

    //  teeths

    {
      test: /images\/teeths\/.*\.(png|jpg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/teeths/[name][ext]',
      },
    },

    //  teeths

    {
      test: /images\/.*\.(webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name][ext]',
      },
    },
  ]

  if (dev) {
    rules.push(
      // json
      {
        test: /\.json$/i,
        type: 'asset/resource',
      }
    )
  }

  return rules
}

//
// get_plugins
//

const get_plugins = (dev) => {
  const default_plugins = [new vue_loader_plugin()]
  const dev_plugins = [
    new html_webpack_plugin({
      template: __dirname + '/src/dev/dev.html',
    }),
  ]

  return dev ? [...dev_plugins, ...default_plugins] : [...default_plugins]
}

//
// exports
//

module.exports = ({ dev, serve }) => {
  return {
    // mode
    mode: dev ? 'development' : 'production',

    // target
    target: ['browserslist'],

    // devtool
    devtool: dev ? 'eval-source-map' : undefined,

    // devServer
    devServer: serve
      ? {
          open: {
            app: {
              name: 'firefox',
              arguments: ['--new-tab'],
            },
          },
          hot: false,
          port: 8080,
        }
      : undefined,

    // entry
    entry: get_entry(dev),

    // output
    output: {
      filename: '[name].js',
      clean: false,
      path: dist_dit,
      assetModuleFilename: '[name][ext]',
    },

    resolve: {
      // расширения модулей
      extensions: ['.vue', '.js'],

      alias: {
        //
        // init
        //

        '@init_helpers': __dirname + '/src/helpers/_bunddle',

        //
        // vue builder
        //

        '@consts': __dirname + '/src/form_builder/assets/consts/_bunddle.js',
        '@helpers': __dirname + '/src/form_builder/assets/helpers/_bunddle.js',
        '@styles': __dirname + '/src/form_builder/assets/styles',

        '@ui': __dirname + '/src/form_builder/ui/_bunddle.js',
        '@components': __dirname + '/src/form_builder/components/_bunddle.js',
        '@views': __dirname + '/src/form_builder/views/_bunddle.js',

        '@composables': __dirname + '/src/form_builder/composables/_bunddle.js',
        '@store': __dirname + '/src/form_builder/store/_bunddle.js',

        //
        // js builder
        //

        '@js_styles': __dirname + '/src/js_form_builder/styles',
        '@js_assets': __dirname + '/src/js_form_builder/assets/_assets',

        '@js_m_helpers':
          __dirname + '/src/js_form_builder/model/helpers/_helpers',
        '@js_v_helpers':
          __dirname + '/src/js_form_builder/view/helpers/_helpers',
        '@js_c_helpers':
          __dirname + '/src/js_form_builder/controller/helpers/_helpers',
      },
    },

    // module
    module: {
      rules: get_rules(dev),
    },

    //plugins
    plugins: get_plugins(dev),
  }
}
