import { fetchAllMentalHealthArticles } from "../../../../utils/rssFetcher";
import { db } from "../../../firebase/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export async function GET() {
  try {
    const articles = await fetchAllMentalHealthArticles();
    const articleRef = collection(db, "articles");

    for (const article of articles) {
      // Check if the article already exists using its link or guid
      const checkQuery = query(articleRef, where("link", "==", article.link));
      const existing = await getDocs(checkQuery);

      if (existing.empty) {
        await addDoc(articleRef, {
          ...article,
          topic: article.topic || "General", // ensures topic is saved
        });
        console.log(`✅ Added: ${article.title}`);
      } else {
        console.log(`⚠️ Skipped duplicate: ${article.title}`);
      }
    }

    return new Response(JSON.stringify({ message: "Articles stored successfully" }), {
      status: 200,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Failed to fetch or store articles:", errMsg);

    return new Response(JSON.stringify({ error: errMsg }), {
      status: 500,
    });
  }
}
