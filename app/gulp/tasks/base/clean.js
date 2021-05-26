const del = require('del');
import * as config from '../../config.json';

function cleanScriptsSecure () {
    return del([config.secureroot.scripts.output]);
};

function cleanStylesSecure() {
    return del([config.secureroot.styles.output]);
};

function cleanImagesSecure() {
    return del([config.secureroot.images.output]);
};