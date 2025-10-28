import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation for Leading Kenyan Bank",
      excerpt: "How we helped a major financial institution modernize their core banking systems and implement AI-powered customer service.",
      service: "ICT Project Consulting",
      industry: "Financial Services",
      results: "40% reduction in operational costs, 25% increase in customer satisfaction",
      image: "/images/case-study-bank.jpg",
      slug: "digital-transformation-kenyan-bank"
    },
    {
      id: 2,
      title: "AI-Powered Supply Chain Optimization",
      excerpt: "Implementing machine learning algorithms to optimize inventory management and logistics for a manufacturing company.",
      service: "AI Strategy & Implementation",
      industry: "Manufacturing",
      results: "30% reduction in inventory costs, 15% improvement in delivery times",
      image: "/images/case-study-supply-chain.jpg",
      slug: "ai-supply-chain-optimization"
    },
    {
      id: 3,
      title: "Cloud Migration for E-commerce Platform",
      excerpt: "Seamless migration to AWS for a growing online retailer, enabling scalability and improved performance.",
      service: "Cloud Services",
      industry: "Retail & E-commerce",
      results: "99.9% uptime, 50% reduction in infrastructure costs",
      image: "/images/case-study-ecommerce.jpg",
      slug: "cloud-migration-ecommerce"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Client Success Stories - ICT Advisory Results",
    "description": "Real results from Eastern African enterprises. See how our ICT advisory, AI strategy, and cloud services deliver measurable value."
  };

  return (
    <>
      <SEO
        title="Client Success Stories - ICT Advisory Results"
        description="Real results from Eastern African enterprises. See how our ICT advisory, AI strategy, and cloud services deliver measurable value."
        keywords="ICT consulting success stories Kenya, digital transformation case studies"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-primary-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Proven Results: Our Client Success Stories
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real results from Eastern African enterprises. See how our ICT advisory, AI strategy, and cloud services deliver measurable value.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-primary-600 opacity-20">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {study.service}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.excerpt}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900">Key Results:</p>
                      <p className="text-sm text-gray-600">{study.results}</p>
                    </div>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Read Full Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Measurable Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">4</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help you achieve similar results for your organization.
            </p>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg"
            >
              Start Your Transformation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies;