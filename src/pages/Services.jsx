import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'ICT Investment Advisory',
      description: 'Strategic guidance for technology investments in Eastern Africa. We help you identify high-value opportunities, conduct feasibility studies, navigate regulatory frameworks, and ensure long-term sustainability.',
      features: [
        'Opportunity identification and market analysis',
        'Comprehensive feasibility studies',
        'Regulatory compliance guidance',
        'Investment sustainability planning'
      ],
      link: '/services/ict-investment-advisory'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Strategy & Implementation',
      description: 'Cut through the AI hype and deliver real business value. From maturity assessments to full implementation support, we help you build AI capabilities that drive measurable results.',
      features: [
        'AI maturity assessment',
        'Strategic roadmap development',
        'Use case identification and prioritization',
        'Governance framework design',
        'Workforce enablement and training'
      ],
      link: '/services/ai-strategy-implementation'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Services',
      description: 'Accelerate your cloud journey without costly mistakes. Expert strategy development, migration planning, and managed services to help you leverage cloud capabilities effectively.',
      features: [
        'Cloud readiness assessment',
        'Migration strategy and planning',
        'Multi-cloud architecture design',
        'Managed cloud operations',
        'Cost optimization and governance'
      ],
      link: '/services/cloud-services'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'ICT Project Consulting',
      description: 'Ensure your technology projects deliver intended business value. Comprehensive consulting from strategic alignment through implementation to continuous improvement.',
      features: [
        'Project strategy and business case development',
        'End-to-end project lifecycle management',
        'Infrastructure and systems design',
        'Risk assessment and mitigation',
        'Post-implementation optimization'
      ],
      link: '/services/ict-project-consulting'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business objectives, current capabilities, and challenges'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Together, we develop a roadmap aligned with your goals and resources'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'We guide or execute the implementation with agility and precision'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Continuous monitoring, refinement, and support to maximize value'
    }
  ];

  const industries = [
    'Financial Services',
    'Telecommunications',
    'Retail & E-commerce',
    'Manufacturing',
    'Government & Public Sector',
    'Healthcare',
    'Education',
    'Logistics & Supply Chain'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://www.lumeadvisory.ai${service.link}`,
        "provider": {
          "@type": "Organization",
          "name": "Lume Advisory"
        }
      }
    }))
  };

  return (
    <>
      <SEO
        title="ICT Consulting Services - Advisory, AI & Cloud"
        description="Comprehensive ICT services: investment advisory, AI strategy, cloud migration, and project consulting for Eastern African enterprises."
        keywords="ICT consulting services Kenya, digital transformation services, AI consulting, cloud services Africa"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive ICT Solutions for Modern Enterprises
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From strategic planning to hands-on implementation, we deliver the expertise you need to succeed in today's digital landscape
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="text-primary-600 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-primary-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-primary-600 opacity-20">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Engagement Model
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven, collaborative approach that ensures successful outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-primary-200" style={{ width: 'calc(100% - 3rem)', marginLeft: '1.5rem' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep expertise across diverse sectors in Eastern Africa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all">
                  <p className="font-semibold text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Delivering Measurable Results
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-primary-100">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-primary-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4</div>
                <p className="text-primary-100">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <p className="text-primary-100">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our services can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;