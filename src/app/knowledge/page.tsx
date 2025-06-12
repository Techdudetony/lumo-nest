export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-[#5AC0EC] mb-4">Knowledge Base</h1>
      <p className="text-gray-700 text-lg mb-8">
        Learn about mental, behavioral, and neurological conditions in calming, approachable language.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Anxiety</h2>
          <p className="text-gray-600">Understand what anxiety is, how it affects you, and what can help.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">ADHD</h2>
          <p className="text-gray-600">Explore the signs, strengths, and support systems for living with ADHD.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Mindfulness</h2>
          <p className="text-gray-600">Learn how mindfulness practices can improve emotional clarity and calm.</p>
        </div>
      </div>
    </main>
  );
}
