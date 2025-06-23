import Parser from "rss-parser";
const parser = new Parser();

function determineTopic(title: string = "", content: string = ""): string {
  const text = `${title} ${content}`.toLowerCase();

  if (/addiction|substance|overdose|alcohol|drug|opioid|rehab/.test(text)) return 'Addiction';
  if (/mental health|depression|anxiety|therapy|stress|ptsd|trauma/.test(text)) return 'Mental Health';
  if (/brain|neuro|dementia|alzheimers|cognition|parkinsons/.test(text)) return 'Neurology';
  if (/school|children|youth|education|parent|caregiver/.test(text)) return 'Family & Education';
  if (/policy|initiative|government|law/.test(text)) return 'Policy & Public Health';

  return 'General';
}

export async function fetchAllMentalHealthArticles() {
  const feeds = [
    {
      url: "https://www.nimh.nih.gov/site-info/index-rss.atom",
      source: "NIMH"
    },
    {
      url: "https://www.samhsa.gov/blog/rss",
      source: "SAMHSA"
    },
    {
      url: "https://www.npr.org/rss/rss.php?id=1146",
      source: "NPR Health"
    }
  ];

  let allArticles = [];

  for (const { url, source } of feeds) {
    try {
      const feed = await parser.parseURL(url);

      const articles = feed.items.map((item) => {
        const title = item.title?.trim() || "Untitled";
        const content = (item.contentSnippet || item.content || "").trim();
        const topic = determineTopic(title, content);

        return {
          title,
          link: item.link,
          pubDate: new Date(item.pubDate || "").toISOString(),
          content,
          guid: item.guid || item.link,
          source,
          topic,
        };
      });

      allArticles.push(...articles);
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      console.error(`Failed to fetch from ${source}:`, errMsg);
    }
  }

  return allArticles;
}
