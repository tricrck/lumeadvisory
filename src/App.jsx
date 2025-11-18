import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ICTInvestmentAdvisory from './pages/services/ICTInvestmentAdvisory';
import AIStrategy from './pages/services/AIStrategy';
import CloudServices from './pages/services/CloudServices';
import ICTProjectConsulting from './pages/services/ICTProjectConsulting';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Error404 from './pages/Error404';
import Team from './pages/Team';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/services/ict-investment-advisory" element={<ICTInvestmentAdvisory />} />
        <Route path="/services/ai-strategy-implementation" element={<AIStrategy />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/ict-project-consulting" element={<ICTProjectConsulting />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;