import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We provide honest, unbiased advice that prioritizes your success above all else'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We deliver world-class solutions tailored to each unique business context'
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

  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Proven Track Record',
      description: 'Years of successful digital transformation projects across diverse industries and markets'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Industry-Certified Experts',
      description: 'Team of certified professionals in cloud architecture, AI/ML, cybersecurity, and enterprise systems'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'ROI-Focused Approach',
      description: 'Every recommendation tied directly to measurable business outcomes and value creation'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Vendor-Agnostic Guidance',
      description: 'Unbiased recommendations focused on what works best for your specific needs'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Lume Advisory",
    "description": "Learn about Lume Advisory's mission, vision, and approach to ICT consulting and digital transformation"
  };

  return (
    <>
      <SEO
        title="About Lume Advisory - ICT & Digital Transformation Experts"
        description="Meet the team behind Lume Advisory. We deliver AI strategy, cloud services, and digital transformation expertise to forward-thinking enterprises."
        keywords="ICT consulting firm, digital advisory team, technology consultants, AI strategy experts"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Your Partners in Digital Transformation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Lume Advisory is a premier ICT advisory firm dedicated to helping organizations unlock digital value through strategic guidance and expert implementation.
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
                  Founded by a team of ICT veterans with deep expertise in technology strategy and implementation, Lume Advisory was born from a clear observation: organizations worldwide were investing heavily in technology but struggling to realize its full potential.
                </p>
                <p className="mb-6">
                  We witnessed ambitious digital transformation initiatives fail due to inadequate planning, poor technology selection, misalignment with business objectives, and lack of proper governance frameworks. We knew there had to be a better way.
                </p>
                <p>
                  Today, Lume Advisory serves as a trusted partner to enterprises across various industries, helping them navigate the complexities of ICT investment, AI adoption, cloud migration, and digital transformation with confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations to unlock measurable digital value through strategic ICT advisory, AI implementation, and technology transformation that drives sustainable competitive advantage and business growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted ICT advisory partner for organizations seeking to navigate the complexities of digital transformation, recognized for delivering exceptional business value through technology excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Clients Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver results that matter to your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
              <div className="space-y-6 text-gray-600">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Value First</h3>
                  <p>
                    We don't start with technology—we start with your business objectives. Every recommendation we make is tied directly to measurable outcomes that matter to your organization, ensuring technology investments drive real value.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Context-Aware Solutions</h3>
                  <p>
                    We understand that every market has unique dynamics. We design solutions that work in your specific context, considering regulatory requirements, infrastructure realities, and business environments—not generic one-size-fits-all approaches.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Transfer</h3>
                  <p>
                    We believe in empowering your team, not creating dependency. Our engagements include comprehensive training and documentation to build lasting internal capability, ensuring your organization can continue to innovate independently.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Partnership</h3>
                  <p>
                    Digital transformation is a journey, not a project. We're committed to supporting you through implementation, optimization, and beyond, adapting our approach as your needs evolve and new opportunities emerge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
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

        {/* Team CTA */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Learn more about the professionals driving digital transformation for our clients
            </p>
            <Link
              to="/team"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
            >
              View Our Team
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Let's discuss how Lume Advisory can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
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