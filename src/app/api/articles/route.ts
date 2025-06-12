import { fetchNIMHArticles } from "../../../../utils/rssFetcher";
import { db } from "../../../firebase/firebase"; // assuming you have this
import { collection, addDoc } from "firebase/firestore";

export async function GET() {
  try {
    const articles = await fetchNIMHArticles();
    console.log("Fetched articles:", articles);
    const articleRef = collection(db, 'articles');

    for (const article of articles) {
      await addDoc(articleRef, article);
    }

    return new Response(JSON.stringify({ message: "Articles stored successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch or store articles" }), {
      status: 500,
    });
  }
}
