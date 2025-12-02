import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO.jsx';

const CloudServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Services",
    "description": "Avoid costly mistakes. Expert cloud strategy, migration planning, and managed services for enterprises.",
    "provider": {
      "@type": "Organization",
      "name": "Lume Advisory"
    }
  };

  const serviceTiers = [
    {
      title: "Cloud Strategy",
      description: "Assessment of cloud readiness and development of migration framework to avoid the 'Lift & Shift' mistake.",
      features: ["Cloud readiness assessment", "Migration framework design", "Cost-benefit analysis", "Multi-cloud strategy"]
    },
    {
      title: "Cloud Migration",
      description: "Prepare your technical and business workforce and manage adoption with minimal disruption.",
      features: ["Application assessment", "Migration planning", "Execution management", "Business continuity"]
    },
    {
      title: "Cloud As A Service",
      description: "Provide Managed Services on Cloud Platforms so you can focus on your core business.",
      features: ["24/7 monitoring", "Cost optimization", "Security management", "Performance tuning"]
    }
  ];

  return (
    <>
      <SEO
        title="Cloud Migration & Managed Services in Kenya"
        description="Avoid costly mistakes. Expert cloud strategy, migration planning, and managed services for enterprises."
        keywords="cloud migration Kenya, cloud strategy consulting, managed cloud services, AWS migration Kenya"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-primary-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Accelerate Your Cloud Journey with Expert Guidance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We accelerate the cloud journey for organizations and make it less painful while offering managed services to enable you focus on your core business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg"
                >
                  Get Cloud Readiness Assessment
                </Link> */}
                <Link
                  to="/case-studies"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all font-semibold text-lg"
                >
                  View Migration Success
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Cloud Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceTiers.map((tier, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Platform Expertise
              </h2>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-orange-500 mb-2">AWS</div>
                    <p className="text-gray-600">Amazon Web Services</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-500 mb-2">Azure</div>
                    <p className="text-gray-600">Microsoft Azure</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-red-500 mb-2">GCP</div>
                    <p className="text-gray-600">Google Cloud Platform</p>
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
              Start Your Cloud Transformation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you navigate your cloud journey with confidence and avoid common pitfalls.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg"
            >
              Explore Managed Services
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CloudServices;