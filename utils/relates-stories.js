export default function relatedStories(items, keywords) {

    return items.filter((s) => {
        let match = 0;
        s.tags.forEach((t) => {
            if (keywords.includes(t)) { match++ }
        });
        return match > 0;
    }).map((s) => {
        return {
            path: s.path,
            title: s.title,
            headline: s.headline,
            subheadline: s.subheadline,
            tags: s.tags
        }
    });

}