import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <header className="text-center py-20 text-white">
          <h1 className="text-8xl font-black mb-6 tracking-tight drop-shadow-lg">
            ✨ Snapt
          </h1>
          <p className="text-4xl font-light mb-12 opacity-95">
            Instant visual identity for your GitHub projects
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              href="#features"
              className="px-11 py-5 bg-white text-[#667eea] rounded-xl text-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Explore Features
            </Link>
            <Link
              href="https://github.com/sylphxltd/snapt"
              className="px-11 py-5 bg-white/20 text-white rounded-xl text-xl font-semibold backdrop-blur-md border border-white/30 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </header>

        {/* Features */}
        <section
          id="features"
          className="bg-white rounded-3xl p-16 my-12 shadow-2xl"
        >
          <h2 className="text-6xl font-black mb-12 text-gray-900">
            ✨ Premium Image Generation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: '🎨',
                title: 'Social Banners',
                description: 'Stunning 1280×640px banners with live GitHub stats',
              },
              {
                icon: '📊',
                title: 'Star History',
                description: 'Beautiful charts showing star growth over time',
              },
              {
                icon: '🌈',
                title: 'Language Stats',
                description: 'Visual breakdown of your repository languages',
              },
              {
                icon: '👥',
                title: 'Contributors',
                description: 'Showcase your amazing contributors (Coming soon)',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="text-6xl mb-5">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section className="bg-white rounded-3xl p-16 my-12 shadow-2xl">
          <h2 className="text-6xl font-black mb-12 text-gray-900">🚀 Usage</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Social Banner</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <code className="text-sm">
                  {`/api/banner?title=Silk&tagline=Zero-runtime CSS&features=Type-safe,Fast,Small&gradient=667eea,764ba2&icon=🎨&repo=sylphxltd/silk`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Star History Chart</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <code className="text-sm">{`/api/star-history?repo=sylphxltd/silk`}</code>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Language Stats</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <code className="text-sm">{`/api/languages?repo=sylphxltd/silk`}</code>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">💡 Pro Tip</h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              Add <code className="px-2 py-1 bg-white rounded text-sm">GITHUB_TOKEN</code> to
              your environment variables for higher API rate limits and access to private repos.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-white py-12">
          <p className="text-xl">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/sylphxltd"
              className="font-bold hover:underline"
            >
              SylphX
            </a>
          </p>
          <p className="mt-3 opacity-85">Open source • MIT License</p>
        </footer>
      </div>
    </main>
  );
}
