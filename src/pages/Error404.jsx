import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const Error404 = () => {
  return (
    <>
      <SEO
        title="Page Not Found - Lume Advisory"
        description="The page you're looking for doesn't exist. Return to Lume Advisory homepage."
      />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-indigo-50 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Illustration */}
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
                <div className="text-6xl">🔍</div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Page Not Found
              </h2>
              
              <p className="text-xl text-gray-600 mb-12">
                Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg"
                >
                  Go to Homepage
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
                >
                  Contact Us
                </Link>
              </div>

              {/* Popular Pages */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Popular Pages
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <Link
                    to="/services"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Our Services</div>
                      <div className="text-sm text-gray-600">Explore our ICT solutions</div>
                    </div>
                  </Link>

                  <Link
                    to="/about"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">About Us</div>
                      <div className="text-sm text-gray-600">Meet our team</div>
                    </div>
                  </Link>

                  <Link
                    to="/case-studies"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Case Studies</div>
                      <div className="text-sm text-gray-600">Client success stories</div>
                    </div>
                  </Link>

                  <Link
                    to="/resources"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Resources</div>
                      <div className="text-sm text-gray-600">ICT insights & guides</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Error404;