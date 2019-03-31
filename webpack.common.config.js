const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      '@fortawesome/fontawesome-free/css/all.min.css',
      'bootstrap',
      'bootstrap/dist/css/bootstrap.css',
      'bootstrap-colorpicker',
      'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css',
      'bootstrap-daterangepicker',
      'bootstrap-daterangepicker/daterangepicker.css',
      'bootstrap-social/bootstrap-social.css',
      'bootstrap-tagsinput',
      'bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
      'bootstrap-timepicker',
      'bootstrap-timepicker/css/bootstrap-timepicker.css',
      'chart.js',
      'chart.js/dist/Chart.css',
      'chocolat',
      'chocolat/dist/css/chocolat.css',
      'cleave.js',
      'codemirror',
      'codemirror/lib/codemirror.css',
      //'codemirror/theme/duotone-dark.css',
      'datatables',
      'datatables/media/css/jquery.dataTables.css',
      'datatables.net-responsive-bs4',
      'datatables.net-responsive-bs4/css/responsive.bootstrap4.css',
      'datatables.net-select-bs4',
      'datatables.net-select-bs4/css/select.bootstrap4.css',
      //'dropzone',
      'dropzone/dist/basic.css',
      'dropzone/dist/dropzone.css',
      'flag-icon-css/css/flag-icon.css',
      'fullcalendar',
      'fullcalendar/dist/gcal.js',
      'fullcalendar/dist/locale-all.js',
      'fullcalendar/dist/fullcalendar.css',
      'fullcalendar/dist/fullcalendar.print.css',
      'gmaps',
      'ionicons201/css/ionicons.css',
      'izitoast',
      'izitoast/dist/css/iziToast.css',
      //'jquery',
      'jquery-pwstrength/jquery.pwstrength.js',
      'jquery-sparkline',
      'jquery-ui-dist/jquery-ui.js',
      'jquery-ui-dist/jquery-ui.css',
      'jquery.nicescroll',
      'jquery_upload_preview/assets/js/jquery.uploadPreview.js',
      'jquery_upload_preview/assets/css/application.css',
      'jqvmap',
      'jqvmap/dist/jqvmap.css',
      'owl.carousel',
      'owl.carousel/dist/assets/owl.carousel.css',
      'owl.carousel/dist/assets/owl.theme.default.css',
      'perfect-scrollbar',
      'perfect-scrollbar/css/perfect-scrollbar.css',
      'prismjs',
      'prismjs/themes/prism.css',
      'prismjs/themes/prism-dark.css',
      'select2',
      'select2/dist/css/select2.css',
      'selectric',
      'selectric/public/selectric.css',
      'simpleweather',
      'sticky-kit/dist/sticky-kit.js',
      'summernote',
      'summernote/dist/summernote-bs4.css',
      'sweetalert',
      'weathericons/css/weather-icons.css',
      './stisla/assets/js/stisla.js',
      './stisla/assets/js/scripts.js',
      './stisla/assets/js/custom.js',
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
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=../font/[name].[ext]'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: 'url-loader'
      },
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
        CodeMirror: 'codemirror',
        Dropzone: 'dropzone'
    })
  ]
};
