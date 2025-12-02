import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO.jsx';

const AIStrategy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Strategy & Implementation",
    "description": "Transform AI from buzzword to measurable business value. Comprehensive AI readiness assessment, strategy development, and implementation advisory.",
    "provider": {
      "@type": "Organization",
      "name": "Lume Advisory"
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "AI Readiness Assessment",
      description: "Understand where you stand and what you need to succeed in the era of AI. We assess your data maturity, talent, technology, governance, and operational capacity to implement AI safely and at scale."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "AI Strategy Development",
      description: "We work with your leadership team to define where AI creates the greatest impact whether in operations, customer engagement, finance, sales, or product innovation to turn your ambition into a practical AI roadmap."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI Use Case Identification & Prioritization",
      description: "We evaluate opportunities across your business using ROI, feasibility, data availability, and strategic importance to identify use cases with the greatest impact and ensure AI investments are aligned with business goals."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "AI Solution Design & Implementation Advisory",
      description: "Whether your AI use case requires integrating third-party tools or building custom AI, we help you navigate architecture, technology selection, model design, deployment, and change management."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "AI Governance, Ethics & Risk Management",
      description: "To build trust, protect your business and stay compliant, we help your organization establish responsible, transparent, and compliant AI frameworks."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "AI Training & Capacity Building",
      description: "We equip your teams with essential AI skills to navigate AI solutions and continually innovate using AI, ensuring lasting organizational capability."
    }
  ];

  const whyAI = [
    {
      stat: "Increasing Pressure",
      description: "Organizations face pressure to increase efficiency and scale in the face of competition"
    },
    {
      stat: "Data Complexity",
      description: "The sheer amount of data generated makes decision-making increasingly complex"
    },
    {
      stat: "AI as Growth Engine",
      description: "AI is no longer optional, it's the new engine of growth for forward-thinking organizations"
    }
  ];

  return (
    <>
      <SEO
        title="AI Strategy & Implementation - From Buzzword to Business Value"
        description="Transform AI from buzzword to measurable business value. Comprehensive AI readiness assessment, strategy development, use case prioritization, and implementation advisory."
        keywords="AI strategy consulting, AI implementation, AI readiness assessment, AI governance, AI transformation"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-primary-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transform AI from Buzzword to Measurable Business Value
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In today's world, AI is no longer optional, it's the new engine of growth. We help you transform AI from a buzzword into measurable business value through strategic guidance and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                  to="/contact"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg shadow-lg"
                >
                  Get AI Readiness Assessment
                </Link> */}
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

        {/* Why AI Now */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why AI? Why Now?
              </h2>
              <p className="text-lg text-gray-600">
                Organizations worldwide face unprecedented challenges that AI is uniquely positioned to address
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyAI.map((item, index) => (
                <div key={index} className="bg-purple-50 p-8 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-3">
                    {item.stat}
                  </div>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Can Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI services from assessment to implementation and beyond
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our AI Strategy Framework
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Align AI with Business Goals</h3>
                    <p className="text-gray-600">
                      Ensure every AI initiative directly supports your strategic objectives and delivers measurable business value, not just technology for technology's sake.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Maturity Assessment & Roadmap</h3>
                    <p className="text-gray-600">
                      Evaluate your current AI readiness across data, talent, technology, and governance. Build a practical implementation roadmap with clear milestones and quick wins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize Technology & Data Governance</h3>
                    <p className="text-gray-600">
                      Establish robust data management, model governance, and technology infrastructure for sustainable, scalable, and responsible AI implementation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-3 mr-6 flex-shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Empower Your Workforce</h3>
                    <p className="text-gray-600">
                      Develop AI skills across your organization and create a culture ready for AI adoption. Build internal capability for continuous innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                AI Investments That Drive Value
              </h2>
              <p className="text-xl text-purple-100 mb-12">
                We ensure your AI investments are aligned with business goals and deliver worthwhile returns through rigorous ROI analysis, feasibility assessment, and strategic prioritization.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">ROI-Focused</div>
                  <p className="text-purple-100">Every use case evaluated for business impact</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Risk-Aware</div>
                  <p className="text-purple-100">Responsible AI governance from day one</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Scalable</div>
                  <p className="text-purple-100">Built for enterprise-grade implementation</p>
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
              Schedule a consultation to discuss how our AI strategy services can drive measurable value for your organization
            </p>
            <Link
              to="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all font-semibold text-lg shadow-lg"
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