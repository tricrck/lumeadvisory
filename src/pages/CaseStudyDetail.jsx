import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Mock data - in real app, this would come from CMS or API
  const caseStudy = {
    id: 1,
    title: "Digital Transformation for Leading Kenyan Bank",
    excerpt: "How we helped a major financial institution modernize their core banking systems and implement AI-powered customer service.",
    service: "ICT Project Consulting",
    industry: "Financial Services",
    results: "40% reduction in operational costs, 25% increase in customer satisfaction",
    client: "Leading Kenyan Bank",
    duration: "12 months",
    team: "8 consultants",
    challenge: "The client faced challenges with legacy systems that were costly to maintain, slow to adapt to market changes, and provided poor customer experience. Their core banking system was over 15 years old and couldn't support modern digital banking features.",
    solution: "We developed a comprehensive digital transformation strategy that included cloud migration, core system modernization, and AI-powered customer service implementation. Our approach focused on phased implementation to minimize disruption.",
    implementation: "The project was executed in three phases over 12 months. Phase 1 involved infrastructure modernization and cloud migration. Phase 2 focused on core banking system replacement. Phase 3 implemented AI-powered customer service and advanced analytics.",
    resultsDetail: "The transformation resulted in significant improvements across key metrics. Operational costs reduced by 40% through automation and cloud optimization. Customer satisfaction increased by 25% due to faster service and personalized experiences. The bank also gained the ability to launch new digital products 60% faster.",
    testimonial: {
      text: "Lume Advisory's expertise in digital transformation was instrumental in our success. They guided us through complex technical challenges while keeping business value at the forefront.",
      author: "Chief Technology Officer",
      company: "Leading Kenyan Bank"
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Lume Advisory"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lume Advisory"
    },
    "datePublished": "2024-01-15"
  };

  return (
    <>
      <SEO
        title={`${caseStudy.title} - Lume Advisory`}
        description={caseStudy.excerpt}
        keywords={`${caseStudy.industry} digital transformation, ${caseStudy.service} success story`}
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-600 text-white text-sm px-3 py-1 rounded">
                  {caseStudy.service}
                </span>
                <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">40%</div>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">25%</div>
                <p className="text-sm text-gray-600">Satisfaction Increase</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">12</div>
                <p className="text-sm text-gray-600">Months</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-1">8</div>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{caseStudy.challenge}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{caseStudy.solution}</p>
                </div>
              </div>

              {/* Implementation */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{caseStudy.implementation}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Results</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{caseStudy.resultsDetail}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  "{caseStudy.testimonial.text}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in similar solutions for your organization?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services/ict-project-consulting"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold"
                >
                  ICT Project Consulting
                </Link>
                <Link
                  to="/services/ai-strategy-implementation"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-all font-semibold"
                >
                  AI Strategy & Implementation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudyDetail;