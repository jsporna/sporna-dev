import { createContentLoader } from "vitepress";

export default createContentLoader('blog/*.md', {
    excerpt: true,
    transform(raw) {
        return raw
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                url,
                excerpt: truncateText(frontmatter.description, 100),
                date: formatDate(frontmatter.date),
                image: getImagePath(url)
            }))
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function truncateText(text: String, length) {
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
}

function formatDate(raw) {
    const date = new Date(raw)
    return {
        time: +date,
        string: date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}

function getImagePath(url: String) {
    const filename = url.split('/').slice(-1)[0].split('.')[0]
    return filename + '.png'
}
