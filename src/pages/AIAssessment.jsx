import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const AIAssessment = () => {
  const navigate = useNavigate();

  // --- pillars/questions (kept concise & business-focused) ---
  const pillars = [
    {
      name: 'Strategy & Business Alignment',
      questions: [
        {
          id: 's1',
          question: 'Are your AI goals explicitly linked to business outcomes?',
          options: [
            { value: 1, label: 'No — no documented goals' },
            { value: 2, label: 'Discussed but not formalized' },
            { value: 3, label: 'Documented, limited KPIs' },
            { value: 4, label: 'Clear goals with KPIs' },
            { value: 5, label: 'Enterprise-wide AI strategy with targets' }
          ]
        },
        {
          id: 's2',
          question: 'Do you prioritize AI use cases by business value?',
          options: [
            { value: 1, label: 'No prioritization' },
            { value: 2, label: 'Ad-hoc prioritization' },
            { value: 3, label: 'Some prioritized pilots' },
            { value: 4, label: 'Prioritization with ROI estimates' },
            { value: 5, label: 'Portfolio approach with scaling plans' }
          ]
        },
        {
          id: 's3',
          question: 'Is leadership actively sponsoring AI work?',
          options: [
            { value: 1, label: 'No executive support' },
            { value: 2, label: 'Low awareness' },
            { value: 3, label: 'Sponsors but limited follow-through' },
            { value: 4, label: 'Strong C-level sponsorship' },
            { value: 5, label: 'Board-level priority and funding' }
          ]
        }
      ]
    },
    {
      name: 'Data Readiness',
      questions: [
        {
          id: 'd1',
          question: 'Is your data accessible and of consistent quality?',
          options: [
            { value: 1, label: 'Siloed/poor quality' },
            { value: 2, label: 'Some usable data with gaps' },
            { value: 3, label: 'Mostly consistent but some work' },
            { value: 4, label: 'High quality and accessible' },
            { value: 5, label: 'Enterprise platform, real-time access' }
          ]
        },
        {
          id: 'd2',
          question: 'Are there governance and ownership policies for data?',
          options: [
            { value: 1, label: 'No governance' },
            { value: 2, label: 'Ad-hoc or nascent policies' },
            { value: 3, label: 'Basic governance in place' },
            { value: 4, label: 'Clear ownership and controls' },
            { value: 5, label: 'Automated compliance & stewardship' }
          ]
        },
        {
          id: 'd3',
          question: 'Is data prepared for model training/deployment?',
          options: [
            { value: 1, label: 'Requires heavy cleaning' },
            { value: 2, label: 'Manual prep per project' },
            { value: 3, label: 'Some standard processes' },
            { value: 4, label: 'Automated pipelines for many use cases' },
            { value: 5, label: 'ML-ready with feature stores' }
          ]
        }
      ]
    },
    {
      name: 'Technology & Infrastructure',
      questions: [
        {
          id: 't1',
          question: 'Do you have scalable compute and storage for AI?',
          options: [
            { value: 1, label: 'Very limited resources' },
            { value: 2, label: 'Basic cloud/on-prem' },
            { value: 3, label: 'Dedicated resources' },
            { value: 4, label: 'Scalable cloud + GPUs' },
            { value: 5, label: 'Hybrid enterprise platform' }
          ]
        },
        {
          id: 't2',
          question: 'Are deployment and monitoring automated (MLOps)?',
          options: [
            { value: 1, label: 'No deployments yet' },
            { value: 2, label: 'Manual deployment' },
            { value: 3, label: 'Basic CI/CD' },
            { value: 4, label: 'Automated pipelines & monitoring' },
            { value: 5, label: 'End-to-end MLOps with retraining' }
          ]
        },
        {
          id: 't3',
          question: 'Does your stack integrate with core systems via APIs?',
          options: [
            { value: 1, label: 'No integrations' },
            { value: 2, label: 'Limited/point integrations' },
            { value: 3, label: 'Integration requires custom dev' },
            { value: 4, label: 'Good API integrations' },
            { value: 5, label: 'Seamless enterprise integrations' }
          ]
        }
      ]
    },
    {
      name: 'People & Culture',
      questions: [
        {
          id: 'p1',
          question: 'What is the level of AI literacy across teams?',
          options: [
            { value: 1, label: 'Very limited' },
            { value: 2, label: 'Awareness only' },
            { value: 3, label: 'Core teams competent' },
            { value: 4, label: 'Wide training programs' },
            { value: 5, label: 'Continuous learning culture' }
          ]
        },
        {
          id: 'p2',
          question: 'Do you have the right AI talent and structure?',
          options: [
            { value: 1, label: 'No internal AI talent' },
            { value: 2, label: 'Rely on external vendors' },
            { value: 3, label: 'Small internal team' },
            { value: 4, label: 'Established team with roles' },
            { value: 5, label: 'Center of Excellence + champions' }
          ]
        },
        {
          id: 'p3',
          question: 'How receptive is the organisation to AI-driven change?',
          options: [
            { value: 1, label: 'Resistant' },
            { value: 2, label: 'Cautious' },
            { value: 3, label: 'Moderately open' },
            { value: 4, label: 'Supportive with change mgmt' },
            { value: 5, label: 'Proactive innovation culture' }
          ]
        }
      ]
    },
    {
      name: 'Governance & Ethics',
      questions: [
        {
          id: 'g1',
          question: 'Are AI governance and oversight defined?',
          options: [
            { value: 1, label: 'No governance' },
            { value: 2, label: 'Informal efforts' },
            { value: 3, label: 'Basic policies' },
            { value: 4, label: 'Comprehensive framework' },
            { value: 5, label: 'Active ethics board & audits' }
          ]
        },
        {
          id: 'g2',
          question: 'Do you test for bias and fairness in models?',
          options: [
            { value: 1, label: 'Not addressed' },
            { value: 2, label: 'Awareness only' },
            { value: 3, label: 'Ad-hoc checks' },
            { value: 4, label: 'Systematic testing' },
            { value: 5, label: 'Automated bias detection & mitigation' }
          ]
        },
        {
          id: 'g3',
          question: 'Is there a risk & compliance process for AI?',
          options: [
            { value: 1, label: 'No formal risk process' },
            { value: 2, label: 'Ad-hoc assessments' },
            { value: 3, label: 'Project-level assessments' },
            { value: 4, label: 'Integrated risk mgmt' },
            { value: 5, label: 'Proactive regulatory tracking' }
          ]
        }
      ]
    },
    {
      name: 'AI Execution & Model Management',
      questions: [
        {
          id: 'e1',
          question: 'Are development processes standardized for AI?',
          options: [
            { value: 1, label: 'No standards' },
            { value: 2, label: 'Varied approaches' },
            { value: 3, label: 'Some standards' },
            { value: 4, label: 'Clear methodologies & templates' },
            { value: 5, label: 'Enterprise lifecycle standards' }
          ]
        },
        {
          id: 'e2',
          question: 'Do you monitor and maintain models effectively?',
          options: [
            { value: 1, label: 'No production models' },
            { value: 2, label: 'Limited monitoring' },
            { value: 3, label: 'Basic tracking' },
            { value: 4, label: 'Comprehensive monitoring' },
            { value: 5, label: 'Automated retrain & optimization' }
          ]
        },
        {
          id: 'e3',
          question: 'Can you demonstrate business value of AI initiatives?',
          options: [
            { value: 1, label: 'No measurement' },
            { value: 2, label: 'Anecdotal evidence' },
            { value: 3, label: 'Some KPIs tracked' },
            { value: 4, label: 'Clear ROI measurement' },
            { value: 5, label: 'Continuous value optimization' }
          ]
        }
      ]
    }
  ];

  // --- state: answers & UI ---
  const [answers, setAnswers] = useState({});
  const [currentPillar, setCurrentPillar] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // contact form state (for sending via email)
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    website: '' // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleContactChange = (e) => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calculatePillarScore = (pillar) => {
    const qs = pillar.questions;
    let sum = 0, count = 0;
    qs.forEach(q => {
      const v = answers[q.id];
      if (v) {
        sum += v;
        count++;
      }
    });
    return count ? (sum / (count * 5)) * 100 : 0;
  };

  const calculateOverallScore = () => {
    let sum = 0, count = 0;
    pillars.forEach(p => p.questions.forEach(q => {
      const v = answers[q.id];
      if (v) { sum += v; count++; }
    }));
    return count ? Math.round((sum / (count * 5)) * 100) : 0;
  };

  const getMaturityLevel = (score) => {
    if (score >= 80) return { level: 'Advanced', color: 'text-green-600' };
    if (score >= 60) return { level: 'Developing', color: 'text-blue-600' };
    if (score >= 40) return { level: 'Emerging', color: 'text-yellow-600' };
    if (score >= 20) return { level: 'Initial', color: 'text-orange-600' };
    return { level: 'Not Started', color: 'text-red-600' };
  };

  const isPillarComplete = (index) =>
    pillars[index].questions.every(q => answers[q.id]);

  const allAnswered = () =>
    pillars.every(p => p.questions.every(q => answers[q.id]));

  const handleNext = () => {
    if (currentPillar < pillars.length - 1) {
      setCurrentPillar(currentPillar + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentPillar > 0) {
      setCurrentPillar(currentPillar - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentPillar(0);
    setShowResults(false);
    setContact({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      website: ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- email submission ---
  const handleSendAssessment = async (e) => {
    e.preventDefault();

    // honeypot spam check
    if (contact.website) return;

    // basic validation
    if (!contact.name || !contact.email || !contact.company) {
      alert('Please fill Name, Email and Company before sending.');
      return;
    }
    if (!allAnswered()) {
      alert('Please answer all questions before sending.');
      return;
    }

    setIsSubmitting(true);

    const overall = calculateOverallScore();
    const pillarDetails = pillars.map(p => ({
      name: p.name,
      score: Math.round(calculatePillarScore(p)),
      maturity: getMaturityLevel(Math.round(calculatePillarScore(p))).level
    }));

    const templateParams = {
      client_name: contact.name,
      client_email: contact.email,
      client_phone: contact.phone || 'N/A',
      client_company: contact.company,
      client_role: contact.role || 'N/A',
      overall_score: `${overall}%`,
      maturity_level: getMaturityLevel(overall).level,
      pillar_breakdown: JSON.stringify(pillarDetails, null, 2),
      answers: JSON.stringify(answers, null, 2)
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // optional analytics event
      if (window.gtag) {
        window.gtag('event', 'assessment_submit', {
          overall_score: overall,
          company: contact.company
        });
      }

      navigate('/thank-you');
    } catch (err) {
      console.error('Email send error', err);
      alert('There was an error sending the assessment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UI rendering ---
  if (showResults) {
    const overall = calculateOverallScore();
    const maturity = getMaturityLevel(overall);

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Readiness — Results</h1>
              <p className="text-gray-600">A concise view of your organisational AI maturity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-center mb-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900">Overall Score</h2>
                <p className="text-sm text-gray-600 mb-4">This score is an aggregate across all pillars.</p>
                <div className={`text-6xl font-bold ${maturity.color}`}>{overall}%</div>
                <div className={`text-xl font-semibold ${maturity.color} mt-2`}>{maturity.level}</div>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Next Step</h3>
                <p className="text-gray-700 mb-4">Share your contact details and we’ll prepare a short roadmap tailored to your gaps.</p>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Send Assessment
                </button>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900">Pillar Breakdown</h3>
              {pillars.map((p, idx) => {
                const score = Math.round(calculatePillarScore(p));
                const pm = getMaturityLevel(score);
                return (
                  <div key={idx} className="border-l-4 border-primary-500 pl-6 py-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{p.name}</h4>
                        <p className="text-sm text-gray-600">Score: {score}% — <span className={`${pm.color}`}>{pm.level}</span></p>
                      </div>
                      <div className="w-40">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div style={{ width: `${score}%` }} className="bg-primary-600 h-2 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Send form */}
            <form onSubmit={handleSendAssessment} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                  <input
                    name="company"
                    value={contact.company}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <input
                    name="role"
                    value={contact.role}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="CTO / Head of Data / etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    name="phone"
                    value={contact.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                {/* honeypot */}
                <input
                  name="website"
                  value={contact.website}
                  onChange={handleContactChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Assessment'}
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Reset
                </button>

                <Link to="/" className="text-sm text-primary-600 font-semibold underline ml-auto">
                  Back to Home
                </Link>
              </div>

              <p className="text-sm text-gray-500">
                By sending this assessment you agree to be contacted by our team. We handle your data according to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- main assessment flow ---
  const pillar = pillars[currentPillar];
  const progress = Math.round(((currentPillar + 1) / pillars.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">AI Readiness Assessment</h1>
            <p className="text-gray-600">Answer a short set of questions across 6 pillars to gauge organisational maturity.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Pillar {currentPillar + 1} of {pillars.length}</span>
              <span className="text-sm font-semibold text-primary-600">{progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold">{pillar.name}</h2>
            <p className="text-primary-100 mt-1">Please answer the {pillar.questions.length} questions below.</p>
          </div>

          <div className="space-y-8 mb-6">
            {pillar.questions.map((q, idx) => (
              <div key={q.id} className="border-l-4 border-primary-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{idx + 1}. {q.question}</h3>
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label
                      key={opt.value}
                      className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers[q.id] === opt.value
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        checked={answers[q.id] === opt.value}
                        onChange={() => handleAnswerChange(q.id, opt.value)}
                        className="mt-1 mr-4 w-4 h-4 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-700 flex-1">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentPillar === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentPillar === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {pillar.questions.filter(q => answers[q.id]).length} of {pillar.questions.length} answered
              </p>
            </div>

            {currentPillar === pillars.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={!allAnswered()}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  allAnswered() ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                View Results
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isPillarComplete(currentPillar)}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isPillarComplete(currentPillar) ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next Pillar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssessment;