import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in real app, this would come from CMS or API
  const article = {
    id: 1,
    title: "How to Evaluate ICT Investment Opportunities",
    excerpt: "A comprehensive guide to identifying and assessing high-value technology investment opportunities in the market.",
    content: `
      <p>Technology landscape is rapidly evolving, presenting numerous investment opportunities for forward-thinking organizations. However, navigating this dynamic market requires careful evaluation and strategic planning.</p>
      
      <h2>Understanding the Market Dynamics</h2>
      <p>ICT sector has experienced significant growth in recent years, driven by increasing mobile penetration, improving infrastructure, and growing digital literacy. Countries like Kenya, Uganda, Tanzania, and Rwanda have implemented progressive ICT policies that encourage investment and innovation.</p>
      
      <h2>Key Evaluation Criteria</h2>
      <p>When assessing ICT investment opportunities in this region, consider the following factors:</p>
      
      <h3>Market Size and Growth Potential</h3>
      <p>Evaluate the target market's size, growth rate, and potential for expansion. Consider demographic trends, economic indicators, and technology adoption rates.</p>
      
      <h3>Regulatory Environment</h3>
      <p>Understand the regulatory frameworks in each country, including licensing requirements, data protection laws, and compliance obligations.</p>
      
      <h3>Competitive Landscape</h3>
      <p>Analyze existing competitors, market saturation, and potential barriers to entry. Identify unique value propositions that can differentiate your investment.</p>
      
      <h2>Practical Steps for Evaluation</h2>
      <ol>
        <li>Conduct comprehensive market research</li>
        <li>Assess technical feasibility</li>
        <li>Evaluate financial viability</li>
        <li>Review regulatory compliance requirements</li>
        <li>Develop risk mitigation strategies</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Successful ICT investment requires a balanced approach that considers market opportunities, regulatory requirements, and implementation challenges. By following a structured evaluation process, organizations can identify high-potential opportunities and make informed investment decisions.</p>
    `,
    category: "ICT Investment",
    readTime: "8 min read",
    author: {
      name: "John Doe",
      role: "Senior ICT Advisor",
      bio: "John has over 10 years of experience in ICT investment advisory."
    },
    date: "January 15, 2024",
    relatedArticles: [
      {
        title: "Navigating Kenya's ICT Regulatory Framework",
        slug: "kenya-ict-regulatory-framework-guide",
        category: "ICT Investment"
      },
      {
        title: "ICT Investment Due Diligence Checklist",
        slug: "ict-investment-due-diligence-checklist",
        category: "ICT Investment"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lume Advisory"
    },
    "datePublished": "2024-01-15",
    "articleSection": article.category
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords="ICT investment Kenya, technology opportunities, ICT market analysis"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.readTime}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">{article.author.name}</div>
                  <div className="text-gray-600 text-sm">{article.author.role}</div>
                </div>
              </div>
              <div className="text-gray-500 text-sm">{article.date}</div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-600">{article.author.bio}</p>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="space-y-4">
              {article.relatedArticles.map((related, index) => (
                <Link
                  key={index}
                  to={`/resources/${related.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded mr-3">
                    {related.category}
                  </span>
                  <span className="text-gray-900 hover:text-primary-600 font-medium">
                    {related.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Expert ICT Investment Guidance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team can help you evaluate opportunities and make informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/ict-investment-advisory"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg"
              >
                Explore Advisory Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPost;