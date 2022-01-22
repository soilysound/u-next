const fs = require('fs');
const path = require('path');

const postcss = require('postcss');
const cssimport = require("postcss-import");
const cssnano = require('cssnano');

const rollup = require('rollup');

const ROOT = path.join(path.dirname(__dirname));

const CSS_PATH = path.join(ROOT, 'css/styles.css');
const CSS_PATH_MIN = path.join(ROOT, 'css/styles-min.css');

const JS_PATH = path.join(ROOT, 'js/script.js');
const JS_PATH_MIN = path.join(ROOT, 'js/script-min.js');

(async function() {

    // build css
    const css = fs.readFileSync(CSS_PATH, 'utf-8').toString();
    postcss([cssimport(), cssnano()]).process(css, { from: CSS_PATH, to: null }).then(result => {
        fs.writeFileSync(CSS_PATH_MIN, result.css);
    });


    // build js
    const bundle = await rollup.rollup({
        input: JS_PATH
    });

    bundle.write({
        file: JS_PATH_MIN,
        inlineDynamicImports: true,
        compact: true,
        format: 'es'
    });

})().catch(e => { console.error(e) });