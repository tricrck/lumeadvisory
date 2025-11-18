import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const Resources = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "How to Evaluate ICT Investment Opportunities",
      excerpt: "A comprehensive guide to identifying and assessing high-value technology investment opportunities in the market.",
      category: "ICT Investment",
      readTime: "8 min read",
      slug: "evaluate-ict-investment-opportunities",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "AI Strategy Framework for Enterprises",
      excerpt: "Learn how to develop a practical AI strategy that delivers measurable business value.",
      category: "AI Strategy",
      readTime: "10 min read",
      slug: "ai-strategy-framework-enterprises",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Cloud Migration Mistakes (and How to Avoid Them)",
      excerpt: "Common pitfalls in cloud migration projects and proven strategies to ensure successful implementation.",
      category: "Cloud Services",
      readTime: "6 min read",
      slug: "cloud-migration-mistakes-how-to-avoid",
      date: "2024-01-05"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ICT Insights & Resources - Lume Advisory Blog",
    "description": "Expert insights on ICT investment, AI strategy, cloud migration, and digital transformation."
  };

  return (
    <>
      <SEO
        title="ICT Insights & Resources - Lume Advisory Blog"
        description="Expert insights on ICT investment, AI strategy, cloud migration, and digital transformation."
        keywords="ICT insights Kenya, digital transformation guides, technology resources"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-primary-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Stay Ahead: ICT Insights and Resources
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert insights on ICT investment, AI strategy, cloud migration, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Insights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-primary-100 flex items-center justify-center">
                    <div className="text-green-600 opacity-20">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/resources/${article.slug}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Types of Resources
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Blog Articles</h3>
                    <p className="text-gray-600">
                      In-depth insights on ICT trends, strategies, and best practices.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Guides & Checklists</h3>
                    <p className="text-gray-600">
                      Practical resources to help you plan and execute successful ICT initiatives.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Webinars</h3>
                    <p className="text-gray-600">
                      Live and recorded sessions with our experts on current ICT topics and trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get monthly ICT insights and digital transformation tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resources;