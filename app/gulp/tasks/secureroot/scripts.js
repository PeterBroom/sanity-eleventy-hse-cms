'use strict';

const { src, dest, task } = require('gulp');
import * as config from '../../config.json';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import { isDefault, isStaging, isDev, isProd } from '../base/mode.js';

async function hseScripts() {
    return src(config.secureroot.scripts.all)
    .pipe(concat(config.secureroot.scripts.entry))
    .pipe(rename('v5-footer.min.js'))
    .pipe(dest(config.secureroot.scripts.output));
}

task('hseScripts', hseScripts)