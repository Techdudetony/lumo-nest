import { useEffect, useState } from "react";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export interface Article {
    id: string;
    title: string;
    summary: string;
    source: string;
    sourceURL: string;
    tags?: string[];
    type?: string;
    publishedAt?: string;
    topic?: string;
}

export default function useArticles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Article[];

            setArticles(data);
            setLoading(false);
        }

        fetchArticles();
    }, []);

    return { articles, loading };
}