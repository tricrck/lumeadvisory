import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO.jsx';

const AIStrategy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Strategy & Implementation",
    "description": "Turn AI noise into business value. Maturity assessment, roadmap development, governance, and workforce enablement.",
    "provider": {
      "@type": "Organization",
      "name": "Lume Advisory"
    }
  };

  const frameworkPillars = [
    {
      title: "Align AI with Business Goals",
      description: "Ensure every AI initiative directly supports your strategic objectives and delivers measurable business value."
    },
    {
      title: "Maturity Assessment & Roadmap",
      description: "Evaluate your current AI readiness and build a practical implementation roadmap with clear milestones."
    },
    {
      title: "Optimize Tech & Data Governance",
      description: "Establish robust data management, model governance, and technology infrastructure for sustainable AI."
    },
    {
      title: "Empower Your Workforce",
      description: "Develop AI skills across your organization and create a culture ready for AI adoption."
    }
  ];

  return (
    <>
      <SEO
        title="AI Strategy & Implementation - From Plan to Value"
        description="Turn AI noise into business value. Maturity assessment, roadmap development, governance, and workforce enablement."
        keywords="AI strategy Kenya, AI implementation consulting, AI maturity assessment, AI roadmap development"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                AI Strategy That Delivers Measurable Business Value
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Cut through the AI hype and deliver real business value. From maturity assessments to full implementation support, we help you build AI capabilities that drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg"
                >
                  Get AI Readiness Assessment
                </Link>
                <Link
                  to="/resources"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all font-semibold text-lg"
                >
                  Read AI Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our AI Strategy Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {frameworkPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                From Strategy to Implementation
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Maturity Assessment</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of your organization's AI readiness across data, technology, skills, and governance dimensions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Roadmap Development</h3>
                    <p className="text-gray-600">
                      Create a phased implementation plan with clear milestones, resource requirements, and success metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation Support</h3>
                    <p className="text-gray-600">
                      Hands-on guidance through vendor selection, proof-of-concept development, and production deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our AI strategy services can drive measurable value for your organization.
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg"
            >
              Book AI Strategy Session
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIStrategy;