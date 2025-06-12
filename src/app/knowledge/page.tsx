'use client';

import useArticles from '@/hooks/useArticles';

export default function KnowledgePage() {
  const { articles, loading } = useArticles();

  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#5AC0EC] mb-4">Knowledge Base</h1>
      <p className="text-gray-700 text-lg mb-6">
        Learn about mental, behavioral, and neurological conditions from credible sources.
      </p>

      {loading ? (
        <p className="text-center mt-20">Loading articles...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.summary}</p>
              <a
                href={article.sourceURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#5AC0EC] font-medium hover:underline"
              >
                Read on {article.source}
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
