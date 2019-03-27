const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      'jquery',
      'bootstrap',
      'bootstrap/dist/css/bootstrap.css',
      'jquery.nicescroll',
      'summernote',
      'selectric',
      '@fortawesome/fontawesome-free/css/all.min.css',
      'summernote/dist/summernote-bs4.css',
      'codemirror/lib/codemirror.css',
      'codemirror/theme/duotone-dark.css',
      'selectric/public/selectric.css',
      './stisla/assets/js/page/auth-register.js',
      './stisla/assets/js/page/bootstrap-modal.js',
      './stisla/assets/js/page/components-chat-box.js',
      './stisla/assets/js/page/components-multiple-upload.js',
      './stisla/assets/js/page/components-statistic.js',
      './stisla/assets/js/page/components-table.js',
      './stisla/assets/js/page/components-user.js',
      './stisla/assets/js/page/features-post-create.js',
      './stisla/assets/js/page/features-posts.js',
      './stisla/assets/js/page/features-setting-detail.js',
      './stisla/assets/js/page/forms-advanced-forms.js',
      './stisla/assets/js/page/gmaps-advanced-route.js',
      './stisla/assets/js/page/gmaps-draggable-marker.js',
      './stisla/assets/js/page/gmaps-geocoding.js',
      './stisla/assets/js/page/gmaps-geolocation.js',
      './stisla/assets/js/page/gmaps-marker.js',
      './stisla/assets/js/page/gmaps-multiple-marker.js',
      './stisla/assets/js/page/gmaps-route.js',
      './stisla/assets/js/page/gmaps-simple.js',
      './stisla/assets/js/page/index-0.js',
      './stisla/assets/js/page/index.js',
      './stisla/assets/js/page/modules-calendar.js',
      './stisla/assets/js/page/modules-chartjs.js',
      './stisla/assets/js/page/modules-datatables.js',
      './stisla/assets/js/page/modules-ion-icons.js',
      './stisla/assets/js/page/modules-slider.js',
      './stisla/assets/js/page/modules-sparkline.js',
      './stisla/assets/js/page/modules-sweetalert.js',
      './stisla/assets/js/page/modules-toastr.js',
      './stisla/assets/js/page/modules-vector-map.js',
      './stisla/assets/js/page/utilities-contact.js',
      './stisla/assets/js/custom.js',
      './stisla/assets/js/scripts.js',
      './stisla/assets/js/stisla.js',
      './stisla/assets/css/skins/reverse.css',
      './stisla/assets/css/components.css',
      './stisla/assets/css/custom.css',
      './stisla/assets/css/reverse.css',
      './stisla/assets/css/rtl.css',
      './stisla/assets/css/style.css'
    ],
    custom: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js',
    // publicPath: '/build/', // mostly relevant for the webpack-debug server
    library: ['stisla','[name]'],
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.svg$/, loader: 'svg-url-loader'},
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=../font/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: 'popper.js',
        Tooltip: 'tooltip.js',
        moment: 'moment',
        CodeMirror: 'codemirror'
    })
  ],
};
