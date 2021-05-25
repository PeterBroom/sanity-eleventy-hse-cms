function abbr(title, find, replace) {
    console.log('title',title);
    console.log('find',find);
    console.log('replace',replace);

    const regex = new RegExp(`${find}`,'gi');
    const html = `<abbr title="${replace}">${find}</abbr>`;
    const abbr = title.replace(regex, html);
    console.log('abbr',abbr);
    return `${abbr}`;
}

module.exports = abbr
