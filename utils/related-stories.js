export default function relatedStories(items, keywords) {

    const matches = items.filter((s) => {
        let match = 0;
        s.tags.forEach((t) => {
            var regex = new RegExp('\\b' + t + '\\b', 'gi');
            if (keywords.indexOf(t) > -1) { match++ }
        });
        s.matches = match;
        return match > 0;
    }).map((s) => {
        return {
            path: s.path,
            title: s.title,
            headline: s.headline,
            subheadline: s.subheadline,
            tags: s.tags,
            matches: s.matches
        }
    });

    matches.sort(function(a, b) {
        if (b.matches < a.matches) {
            return -1;
        };

        if (b.date > a.date) {
            return 1;
        };

        return 0;
    });

    return matches;

}