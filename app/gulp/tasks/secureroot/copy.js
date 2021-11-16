'use strict';

const { src, dest, task, series } = require('gulp');
import * as config from '../../config.json';

const highchartsAssets = [
  "./node_modules/highcharts/highcharts.js",
  "./node_modules/highcharts/highcharts.src.js",
  "./node_modules/highcharts/highcharts.js.map",
  "./node_modules/highcharts/modules/data.js",
  "./node_modules/highcharts/modules/data.src.js",
  "./node_modules/highcharts/modules/data.js.map",
  "./node_modules/highcharts/modules/exporting.js",
  "./node_modules/highcharts/modules/exporting.src.js",
  "./node_modules/highcharts/modules/exporting.js.map",
  "./node_modules/highcharts/modules/export-data.js",
  "./node_modules/highcharts/modules/export-data.src.js",
  "./node_modules/highcharts/modules/export-data.js.map",
  "./node_modules/highcharts/modules/accessibility.js",
  "./node_modules/highcharts/modules/accessibility.src.js",
  "./node_modules/highcharts/modules/accessibility.js.map",
  "./node_modules/highcharts/highcharts-more.js",
  "./node_modules/highcharts/highcharts-more.src.js",
  "./node_modules/highcharts/highcharts-more.js.map"
];

async function picturefill() {
  return src(['./node_modules/picturefill/dist/picturefill.min.js']).pipe(
    dest(`${config.secureroot.assetPath}/v5-js/vendor/picturefill`)
  );
}

async function highCharts() {
  return src(highchartsAssets)
    .pipe(dest(`${config.secureroot.assetPath}/v5-js/vendor/highcharts`))
}

async function moment() {
  return src(['./node_modules/moment/moment.js'])
  .pipe(dest(`${config.secureroot.assetPath}/v5-js/vendor/moment`));
}

async function vendorCSS() {
  return src(config.secureroot.styles.vendor)
  .pipe(dest(config.secureroot.styles.vendorOutput));
}

async function vendorJS() {
  return src([config.shared.js.vendor])
  .pipe(dest(config.shared.js.vendorOutput));
}

async function jQuery() {
  return src([`${config.secureroot.scripts.path}/jquery.min.js`]).pipe(
    dest(`${config.secureroot.assetPath}/v5-js`)
  );
}
async function slinky() {
  return src([`${config.secureroot.scripts.path}/v5-footer-slinky-js.min.js`]).pipe(
    dest(`${config.secureroot.assetPath}/v5-js`)
  );
}

async function globalMessage() {
  return src([`${config.secureroot.ajax}/global-message.json`]).pipe(
    dest(`${config.secureroot.assetPath}/ajax`)
  );
}

const toReturn = series(
  vendorCSS,
  vendorJS,
  moment,
  highCharts,
  picturefill,
  jQuery,
  slinky,
  globalMessage
);
task('hseCopy', toReturn)