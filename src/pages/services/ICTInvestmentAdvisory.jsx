import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO.jsx';

const ICTInvestmentAdvisory = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ICT Investment Advisory",
    "description": "Navigate ICT investments with confidence. Feasibility studies, regulatory guidance, and sustainability planning.",
    "provider": {
      "@type": "Organization",
      "name": "Lume Advisory"
    },
    "areaServed": "Kenya",
    "serviceType": "ICT Consulting"
  };

  const faqs = [
    {
      question: "What is ICT investment advisory and why do I need it?",
      answer: "ICT investment advisory helps organizations evaluate, plan, and execute technology investments strategically. We provide market analysis, feasibility studies, regulatory guidance, and sustainability planning to ensure your ICT investments deliver maximum value and comply with regulations."
    },
    {
      question: "How long does an ICT investment feasibility study take?",
      answer: "Typical feasibility studies take 4-8 weeks depending on project complexity. We conduct market analysis, technical assessments, financial modeling, and risk evaluation to provide you with actionable recommendations."
    },
    {
      question: "Which countries' ICT regulations do you cover?",
      answer: "We specialize in Kenya, Uganda, Tanzania, and Rwanda. Our team has deep expertise in each country's Communications Authority requirements, licensing frameworks, and compliance obligations for ICT investments."
    }
  ];

  return (
    <>
      <SEO
        title="ICT Investment Advisory Services"
        description="Navigate ICT investments with confidence. Feasibility studies, regulatory guidance, and sustainability planning."
        keywords="ICT investment advisory Kenya, technology investment consulting, ICT feasibility studies, regulatory compliance ICT Kenya"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Expert ICT Investment Advisory
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Strategic guidance for technology investments. We help you identify high-value opportunities, conduct feasibility studies, navigate regulatory frameworks, and ensure long-term sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg"
                >
                  Request Investment Analysis
                </Link> */}
                <Link
                  to="/case-studies"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Comprehensive Investment Guidance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Opportunity Identification</h3>
                  <p className="text-gray-600">
                    Identify high-value ICT opportunities through comprehensive market analysis and trend assessment.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Feasibility Studies</h3>
                  <p className="text-gray-600">
                    Comprehensive technical, financial, and operational feasibility analysis to validate investment viability.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Guidance</h3>
                  <p className="text-gray-600">
                    Navigate complex regulatory frameworks across countries with expert compliance guidance.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability Planning</h3>
                  <p className="text-gray-600">
                    Develop long-term sustainability frameworks ensuring ongoing value delivery and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make Strategic ICT Investments?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our investment advisory team to discuss your technology investment opportunities.
            </p>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg"
            >
              Talk to an Advisor
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ICTInvestmentAdvisory;