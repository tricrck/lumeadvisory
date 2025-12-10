import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Strategy & Implementation', path: '/services/ai-strategy-implementation' },
    { name: 'ICT Investment Advisory', path: '/services/ict-investment-advisory' },
    { name: 'Cloud Services', path: '/services/cloud-services' },
    { name: 'ICT Project Consulting', path: '/services/ict-project-consulting' }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <img 
                src={logo} 
                alt="Lume Advisory" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
            />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/teams"
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Teams
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1 ${
                    isActive ? 'text-primary-600' : ''
                  }`
                }
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink 
              to="/case-studies" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Case Studies
            </NavLink>

            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Resources
            </NavLink>

            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                px-5 py-1.5
                rounded-2xl
                bg-primary-600 text-white
                font-semibold tracking-tight
                shadow-sm
                hover:bg-primary-700 hover:shadow-md
                active:scale-[0.98]
                transition-all duration-200
              "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 pt-4">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              About
            </NavLink>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={closeMobileMenu}
                      className="block text-gray-600 hover:text-primary-600 transition-colors py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink 
              to="/case-studies" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Case Studies
            </NavLink>

            <NavLink 
              to="/resources" 
              onClick={closeMobileMenu}
              className={({ isActive }) => 
                `text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Resources
            </NavLink>

            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;