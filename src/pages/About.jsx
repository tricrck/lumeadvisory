import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const About = () => {
  const team = [
    {
      name: 'Leadership Team',
      role: 'Strategic Vision',
      description: 'Decades of combined experience in ICT strategy and digital transformation across Eastern Africa'
    },
    {
      name: 'Technical Experts',
      role: 'Implementation Excellence',
      description: 'Certified professionals in cloud architecture, AI/ML, and enterprise systems'
    },
    {
      name: 'Advisory Consultants',
      role: 'Business Value',
      description: 'Industry specialists who understand your challenges and deliver practical solutions'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We provide honest, unbiased advice that prioritizes your success'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We deliver world-class solutions tailored to the African context'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partnership',
      description: 'We work alongside you as trusted advisors, not just vendors'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We stay ahead of technology trends to keep you competitive'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Lume Advisory",
    "description": "Learn about Lume Advisory's team, mission, and approach to ICT consulting in Eastern Africa"
  };

  return (
    <>
      <SEO
        title="About Lume Advisory - ICT Experts in East Africa"
        description="Meet the team behind Kenya's leading ICT advisory firm. We deliver AI strategy, cloud services, and digital transformation expertise."
        keywords="ICT consulting firm Kenya, digital advisory team, technology consultants East Africa"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Who We Are: Your Partners in Digital Transformation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Lume Advisory is Kenya's ICT advisory powerhouse, dedicated to helping organizations across Eastern Africa unlock digital value through strategic guidance and expert implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Founded by a team of ICT veterans with deep roots in Eastern Africa, Lume Advisory was born from a simple observation: organizations across the region were investing heavily in technology but struggling to realize its full potential.
                </p>
                <p className="mb-6">
                  Too often, we saw ambitious digital transformation initiatives fail due to inadequate planning, poor vendor selection, lack of regulatory understanding, or misalignment with business objectives. We knew there was a better way.
                </p>
                <p>
                  Today, Lume Advisory serves as a trusted partner to leading enterprises across Kenya, Uganda, Tanzania, and Rwanda, helping them navigate the complexities of ICT investment, AI adoption, cloud migration, and digital transformation with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team of Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A dedicated team bringing together strategic vision, technical excellence, and business acumen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Value First</h3>
                  <p>
                    We don't start with technology—we start with your business objectives. Every recommendation we make is tied directly to measurable outcomes that matter to your organization.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Context-Aware Solutions</h3>
                  <p>
                    Eastern Africa has unique regulatory, infrastructure, and market dynamics. We design solutions that work in this context, not generic approaches imported from elsewhere.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Transfer</h3>
                  <p>
                    We believe in empowering your team, not creating dependency. Our engagements include comprehensive training and documentation to build lasting internal capability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Partnership</h3>
                  <p>
                    Digital transformation is a journey, not a project. We're committed to supporting you through implementation, optimization, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Eastern Africa */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why We Focus on Eastern Africa</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Eastern Africa is one of the world's most dynamic technology markets. From mobile money innovation to rapid cloud adoption, the region is at the forefront of digital transformation in emerging markets.
                </p>
                <p className="mb-6">
                  However, this dynamism also brings complexity: evolving regulatory frameworks, diverse infrastructure maturity, and unique business contexts that require deep local expertise.
                </p>
                <p>
                  By focusing exclusively on Kenya, Uganda, Tanzania, and Rwanda, we've developed unmatched expertise in the region's ICT landscape. We understand the challenges you face and the opportunities available—because we've navigated them ourselves and helped dozens of organizations do the same.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how Lume Advisory can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;