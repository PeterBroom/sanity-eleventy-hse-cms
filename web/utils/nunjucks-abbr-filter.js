function abbr(title, find, replace) {
    const regex = new RegExp(`${find}`,'gi');
    const html = `<abbr title="${replace}">${find}</abbr>`;
    const abbr = title.replace(regex, html);
    return `${abbr}`;
}

module.exports = abbr
