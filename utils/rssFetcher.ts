import Parser from "rss-parser";

const parser = new Parser();

export async function fetchNIMHArticles() {
    const feed = await parser.parseURL("https://www.npr.org/rss/rss.php?id=1146"); // NPR Health

    return feed.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.contentSnippet,
        source: 'NIMH',
    }));
}