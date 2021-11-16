const del = require('del');
import * as config from '../../config.json';

async function cleanScriptsSecure () {
    return del([config.secureroot.scripts.output]);
};

async function cleanStylesSecure() {
    return del([config.secureroot.styles.output]);
};

async function cleanImagesSecure() {
    return del([config.secureroot.images.output]);
};