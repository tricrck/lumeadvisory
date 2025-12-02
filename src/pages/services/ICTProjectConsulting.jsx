import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';

const ICTProjectConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ICT Project Consulting",
    "description": "End-to-end ICT project consulting: strategic alignment, lifecycle management, infrastructure design, and continuous improvement.",
    "provider": {
      "@type": "Organization",
      "name": "Lume Advisory"
    }
  };

  const lifecyclePhases = [
    {
      phase: "Strategic Alignment",
      description: "Ensure technology projects align with organizational goals and deliver measurable business value from day one."
    },
    {
      phase: "End-to-end Consultancy",
      description: "Comprehensive support throughout the entire ICT project lifecycle, from initiation to closure."
    },
    {
      phase: "Infrastructure & Systems Design",
      description: "Expert design of robust, scalable ICT infrastructure and systems tailored to your specific needs."
    },
    {
      phase: "Post-implementation Excellence",
      description: "Continuous evaluation and improvement to ensure lasting value and optimal performance."
    }
  ];

  return (
    <>
      <SEO
        title="ICT Project Consulting - Strategy to Success"
        description="End-to-end ICT project consulting: strategic alignment, lifecycle management, infrastructure design, and continuous improvement."
        keywords="ICT project management Kenya, technology consulting, digital project implementation, IT infrastructure design Kenya"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Ensure Your Tech Projects Deliver Business Value
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We support organizations to ensure tech solutions deliver intended business value through comprehensive project consulting and management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg"
                >
                  Start Your Project Assessment
                </Link> */}
                <Link
                  to="/case-studies"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all font-semibold text-lg"
                >
                  View Project Success
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lifecycle Phases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Full Project Lifecycle Support
            </h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {lifecyclePhases.map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full p-4 mr-6 flex-shrink-0">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Management Excellence */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Project Management Excellence
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Methodologies</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Agile & Scrum Implementation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Waterfall Methodology
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hybrid Approaches
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Focus Areas</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Risk Assessment & Mitigation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Stakeholder Management
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quality Assurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Successful ICT Project
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us to ensure your technology initiatives deliver the intended business outcomes.
            </p>
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg"
            >
              Meet Our PM Team
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ICTProjectConsulting;