'use strict';

import { src, dest, series, task} from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';
import * as config from '../../config.json';

let v4output;
let v5output;
let v4Homepage;

v4output = config.secureroot.images.v4.output;
v5output = config.secureroot.images.v5.output;
v4Homepage = config.secureroot.images.v4homepage.output;

async function imagesV4() {
  return src(config.secureroot.images.v4.all)
    .pipe(imagemin([
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminJpegtran(),
        imageminPngquant(),
        imageminJpegRecompress(),
    ]))
    .pipe(dest(v4output));
};

async function imagesV5(){
  return src(config.secureroot.images.v5.all)
    .pipe(imagemin([
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminJpegtran(),
        imageminPngquant(),
        imageminJpegRecompress(),
    ]))
    .pipe(dest(v5output));
};

async function imagesV4Homepage() {
  return src(config.secureroot.images.v4homepage.all)
    .pipe(imagemin([
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminJpegtran(),
        imageminPngquant(),
        imageminJpegRecompress(),
    ]))
    .pipe(dest(v4Homepage));
};

const toReturn = series(imagesV4, imagesV5, imagesV4Homepage);
task('hseImages', toReturn)
