const fs = require('fs');
const path = require('path');

const hbs = require('handlebars');

const config = require('./config.json');

const ROOT = path.join(path.dirname(__dirname));

const stories = require(path.join(ROOT, '_stories/stories.json'));
const articletemplate = fs.readFileSync(path.join(ROOT, '_build/article.hbs'), 'utf8').toString();
const indextemplate = fs.readFileSync(path.join(ROOT, '_build/index.hbs'), 'utf8').toString();

// write page html
let articlehtml = hbs.compile(articletemplate);
let indexhtml = hbs.compile(indextemplate);

stories.forEach(function(story, index) {

    story.config = config;
    story.author = config.authors[(story.headline.length - 4) / 2] || config.authors[0];

    // add related stories
    story.related = getrelatedstories(story.tags, 6, story);

    // write page
    try {
        fs.mkdirSync(path.join(ROOT, story.path));
    } catch (err) {}


    fs.writeFileSync(path.join(ROOT, story.path + '/index.html'), articlehtml(story), 'utf8');

});


// write index pages
stories.sort(function(a, b) {
    if (b.date < a.date) {
        return -1;
    };

    if (b.date > a.date) {
        return 1;
    };

    return 0;
});

config.sections.forEach(function(entry) {

    var section = stories.slice(0, 24);
    if (entry.keywords) {
        section = getrelatedstories(entry.keywords, 24);
    }
    section.entry = entry;
    section.config = config;

    try {
        fs.mkdirSync(path.join(ROOT, entry.url));
    } catch (err) {}


    fs.writeFileSync(path.join(ROOT, entry.url, 'index.html'), indexhtml(section));
});

function getrelatedstories(keywords, amount, ignore, all) {

    var matches = {};
    amount = amount || 1000;

    // loop through all stories
    stories.forEach(function(story) {

        // loop through keys and look for matches
        keywords.forEach(function(keyword) {

            var regex = new RegExp('\\b' + keyword + '\\b', 'gi');

            if (story.tags.indexOf(keyword) > 1) {
                if (!matches[story.path]) {
                    matches[story.path] = {
                        story: story,
                        count: 0
                    };
                }

                matches[story.path]['count']++;
            }

        });


    });

    // turn matches object into array and sort
    var matchesArray = [];

    for (var match in matches) {
        matchesArray.push(matches[match]);
    }

    matchesArray.sort(function(a, b) {
        return b.count - a.count;
    });

    matchesArray = matchesArray.map(function(item) {
        return item.story;
    });

    var ignoreStoryIndex = matchesArray.indexOf(ignore);
    if (ignoreStoryIndex > -1) {
        matchesArray.splice(ignoreStoryIndex, 1);
    }

    return matchesArray.slice(0, amount);

}