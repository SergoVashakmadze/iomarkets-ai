import React from 'react';
import { Helmet } from 'react-helmet';
import { Brain, Zap, BarChart3, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import TradingViewChart from '../components/TradingViewChart';

const IoMarketsAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 parallax-bg">
      <Helmet>
        <title>IoMarkets® AI-Powered Markets Intelligence</title>
        <meta name="title" content="IoMarkets® AI-Powered Markets Intelligence" />
        <meta name="description" content="IoMarkets® AI-Powered Markets Intelligence. Comprehensive financial data platform powered by advanced AI and machine learning with real-time analytics, predictive modeling, and investment intelligence." />
        <meta property="og:title" content="IoMarkets® AI-Powered Markets Intelligence" />
        <meta property="og:description" content="IoMarkets® AI-Powered Markets Intelligence. Comprehensive financial data platform powered by advanced AI and machine learning with real-time analytics, predictive modeling, and investment intelligence." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® AI-Powered Markets Intelligence" />
        <meta property="twitter:description" content="IoMarkets® AI-Powered Markets Intelligence. Comprehensive financial data platform powered by advanced AI and machine learning with real-time analytics, predictive modeling, and investment intelligence." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-blue-50/80"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-up relative z-10">
            <h1 className="text-5xl font-bold text-navy-900 mb-6">
              AI-Powered Financial Data & Intelligence Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive financial data platform powered by advanced AI and machine learning. 
              Real-time analytics, predictive modeling, and investment intelligence for institutional clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                Access Platform <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-navy-300 text-navy-700 px-8 py-3 rounded-lg font-medium hover:bg-navy-50 transition-colors">
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analytics Dashboard */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">AI-Powered Market Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced charting and analytics powered by machine learning algorithms
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div style={{ height: "500px", width: "100%" }}>
              <TradingViewChart height={500} symbol="NASDAQ:AAPL" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Financial Data & AI Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive data platform with advanced AI models for investment research and analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Data Feeds",
                description: "Institutional-grade market data with microsecond latency from global exchanges and data providers."
              },
              {
                icon: TrendingUp,
                title: "Predictive Modeling",
                description: "Machine learning models for price prediction, risk assessment, and portfolio optimization."
              },
              {
                icon: Brain,
                title: "Alternative Data Intelligence",
                description: "AI models processing satellite imagery, social sentiment, and alternative data sources for investment insights."
              },
              {
                icon: Zap,
                title: "Natural Language Processing",
                description: "AI-powered analysis of news, earnings calls, and regulatory filings for investment signals."
              },
              {
                icon: Shield,
                title: "ESG & Sustainability Analytics",
                description: "Comprehensive ESG scoring and sustainability metrics powered by AI analysis."
              },
              {
                icon: Users,
                title: "Custom Research Platform",
                description: "Tailored research and analytics platform for institutional investment teams and analysts."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Performance Metrics</h2>
            <p className="text-purple-100 font-medium">Real-world results from our AI-powered financial platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Data Sources" },
              { number: "1ms", label: "Data Latency" },
              { number: "500TB", label: "Daily Data Processing" },
              { number: "99.99%", label: "Data Accuracy" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Enterprise AI Integration</h2>
            <p className="text-xl text-gray-100 mb-8 font-medium">
              Seamlessly integrate IoMarkets<sup className="text-xs">®</sup> AI into your existing infrastructure with our comprehensive API suite and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/30">
                View API Documentation
              </button>
              <button className="border-2 border-gold-500 text-gold-100 px-8 py-3 rounded-lg font-semibold hover:bg-gold-500/10 transition-colors">
                Contact AI Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsAI;