function cloudinaryImage(file, file, width) {
    console.log('image file', file)
    console.log('image width', width)
    const path = require('path');
    const CLOUDNAME = "peterbroom"
    const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
    const FALLBACK_WIDTHS = [ 300, 600, 680, 1360 ];
    const FALLBACK_WIDTH = 680;
    const folderName = file.split(path.sep)[7]; // split file path to get folder at position 7
    const fileName = path.parse(file).base;

    return `${BASE_URL}c_fill,g_auto,w_${width ? width : FALLBACK_WIDTH}/${folderName}`
}
module.exports = cloudinaryImage
