const fs = require('fs');
const path = require('path');

const imagesize = require('image-size');

const config = require('./config.json');

const ROOT = path.join(path.dirname(__dirname));
const FOLDER_PATH = path.join(ROOT, ('_stories'));

const stories = [];

fs.readdirSync(FOLDER_PATH).filter(path => path.match(/^[a-z](.*).txt/)).forEach(storypath => {

    const file = path.join(FOLDER_PATH, storypath);
    let story = fs.readFileSync(file, 'utf8').toString().trim();
    story = story.split('\n\n');

    const data = {
        body: [],
        tile: storypath.replace(/\.txt/, ''),
        path: storypath.replace(/\.txt/, ''),
        date: new Date(fs.statSync(file).mtime),
        formatteddate: new Date(fs.statSync(file).mtime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }),
        baseurl: config.baseurl
    };

    let paragraphs;

    // process article
    for (var i = -1; ++i < story.length;) {
        line = story[i].split('\n');
        if (line.length > 1) {
            if (line[1].match(/====/)) {
                data.headline = line[0].trim();
                continue;
            }

            if (line[1].match(/----/)) {
                data.subheadline = line[0].trim();
                continue;
            }

            if (line[0].match(/^-v-/)) {

            }

            if (line[0].match(/^-(.*)\.jpg|png|webp/)) {
                var src = line[0].trim().replace(/^-/, '');
                var caption = line[1].trim();
                data.body.push(renderimage(storypath.replace(/\.txt/, ''), src, caption));
                // imagecount++;
            }
        }

        if (line.length === 1) {

            if (line[0].match(/^# /)) {
                data.snippet = line[0].replace(/^# /, '').trim();
                continue;
            }

            if (line[0].match(/\d{4}-\d{2}-\d{2}/)) {
                data.date = new Date(line[0]).valueOf();
                continue;
            }

            if (line[0].match(/^\[/)) {
                data.tags = line[0].replace(/\[/, '').replace(/\]/, '').replace(/\, /g, ',').split(',');
                continue;
            }

            if (line[0].match(/^## /)) {
                data.body.push(`<h2>${line[0].replace(/^## /, '').trim()}</h2>`);
                continue;
            }

            if (line[0].match(/^### /)) {
                data.body.push(`<h3>${line[0].replace(/^### /, '').trim()}</h3>`);
                continue;
            }

            if (line[0].match(/^``/)) {
                var q = line[0].replace(/^``/, '').trim().split("|");
                data.body.push(`<blockquote><span>"${q[0]}"</span><br><cite>${(q[1] || "")}</cite></blockquote>`);
                continue;
            }

            if (line[0].match(/^~~/)) {
                data.body.push(`<small>${line[0].replace(/^~~/, '').trim()}</small>`);
                continue;
            }

            data.body.push(`<p>${line[0]}</p>`);
            paragraphs++;
            continue;
        }

    };

    data.body = data.body.join("");
    data.title = `${data.headline} - ${data.subheadline}`;
    data.tileheadline = data.subheadline;
    data.subheadline = splitheadline(data.subheadline);

    stories.push(data);
});

stories.sort((
    a, b) => {
    if (b.date < a.date) {
        return -1;
    };

    if (b.date > a.date) {
        return 1;
    };

    return 0;
});

fs.writeFileSync(path.join(ROOT, 'stories.json'), JSON.stringify(stories));

function renderimage(folder, src, caption) {
    let dims = { width: 1200, height: 800 };
    try {
        dims = imagesize(path.join('_backup', folder, src));
    } catch (error) {};


    return (`<figure class="media" data-role="gallery-item" aria-hidden="true"><img width="${dims.width}" height="${dims.height}" alt="${caption}" src="https://d6jf304m27oxw.cloudfront.net/${path.join(folder, src)}" loading="lazy" decoding="async"><figcaption class="media-caption"><div class="wrap">${caption}</div></figcaption></figure>`)
}

function splitheadline(headline) {

    var headlinesplit = headline.split(' ');
    var candidates = [];

    headlinesplit.forEach(function(word) {
        var reg = new RegExp('\\b' + word + '\\b');
        var can = headline.split(reg);
        can[1] = word + can[1];
        candidates.push([Math.abs([(can[0].length - 2) - can[1].length]), can]);
    });

    candidates.sort(function(a, b) {

        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });

    return candidates[0][1].join('<span>') + '</span>';
}