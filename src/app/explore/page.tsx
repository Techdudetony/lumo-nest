export default function ExplorePage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <h1 className="text-4xl font-bold text-[#5AC0EC] mb-4">Explore</h1>
            <p className="text-gray-700 text-lg">
                Discover resources, articles, and mindfulness tools tailored to your journey.
            </p>

            <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2">Featured Tool</h2>
                    <p className="text-gray-600">Something calming, useful, or educational goes here.</p>
                </div>
            </section>
        </main>
    );
}