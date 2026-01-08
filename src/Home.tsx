import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Brain, Zap, BarChart3, Shield, TrendingUp, Users, ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Floating elements - AI theme with neural network inspired shapes
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating diamond - violet */}
      <div className="absolute top-20 left-[10%] w-20 h-20 float-elegant">
        <div className="w-full h-full border-2 border-[#8B5CF6]/40 bg-gradient-to-br from-[#8B5CF6]/10 to-[#7C3AED]/5 transform rotate-45 backdrop-blur-sm shadow-lg shadow-[#8B5CF6]/10" />
      </div>

      {/* Medium diamond - fuchsia */}
      <div className="absolute top-40 right-[15%] w-16 h-16 float-medium" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full border-2 border-[#D946EF]/35 bg-gradient-to-br from-[#D946EF]/10 to-[#C026D3]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Small diamonds - cyan */}
      <div className="absolute bottom-32 left-[20%] w-12 h-12 float-fast" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full border-2 border-[#06B6D4]/30 bg-[#06B6D4]/8 transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Small diamond - purple */}
      <div className="absolute top-60 left-[5%] w-8 h-8 float-medium" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full border border-[#9333EA]/40 bg-[#9333EA]/10 transform rotate-45 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-40 right-[10%] w-18 h-18 float-elegant" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full border-2 border-[#D946EF]/25 bg-gradient-to-br from-[#D946EF]/8 to-transparent transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Floating rings - neural network inspired */}
      <div className="absolute top-32 right-[25%] w-28 h-28 float-medium opacity-50" style={{ animationDelay: '0.7s' }}>
        <div className="w-full h-full border-2 border-[#8B5CF6]/30 rounded-full shadow-lg shadow-[#8B5CF6]/10" />
      </div>

      <div className="absolute bottom-48 left-[30%] w-20 h-20 float-elegant opacity-40" style={{ animationDelay: '2.5s' }}>
        <div className="w-full h-full border-2 border-[#9333EA]/25 rounded-full" />
      </div>

      {/* Rotating ring - AI circuit style */}
      <div className="absolute top-1/2 right-[8%] w-32 h-32 rotate-slow opacity-35">
        <div className="w-full h-full border-2 border-[#06B6D4]/30 rounded-full" />
        <div className="absolute inset-3 border border-dashed border-[#06B6D4]/15 rounded-full" />
      </div>
    </div>
  );
}

// Animated wave lines - AI/neural theme
function AnimatedLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Violet to Fuchsia gradient */}
        <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
        </linearGradient>
        {/* Fuchsia to Cyan gradient */}
        <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0" />
          <stop offset="50%" stopColor="#D946EF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
        {/* Cyan to Purple gradient */}
        <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Curved wave lines */}
      <path d="M0,150 Q300,100 600,150 T1200,150 T1800,150" stroke="url(#line-gradient-1)" strokeWidth="1.5" fill="none">
        <animate attributeName="d"
          values="M0,150 Q300,100 600,150 T1200,150 T1800,150;M0,150 Q300,200 600,150 T1200,150 T1800,150;M0,150 Q300,100 600,150 T1200,150 T1800,150"
          dur="8s" repeatCount="indefinite" />
      </path>
      <path d="M0,300 Q400,250 800,300 T1600,300" stroke="url(#line-gradient-2)" strokeWidth="1" fill="none" opacity="0.6">
        <animate attributeName="d"
          values="M0,300 Q400,250 800,300 T1600,300;M0,300 Q400,350 800,300 T1600,300;M0,300 Q400,250 800,300 T1600,300"
          dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M0,450 Q250,400 500,450 T1000,450 T1500,450" stroke="url(#line-gradient-3)" strokeWidth="0.75" fill="none" opacity="0.45">
        <animate attributeName="d"
          values="M0,450 Q250,400 500,450 T1000,450 T1500,450;M0,450 Q250,500 500,450 T1000,450 T1500,450;M0,450 Q250,400 500,450 T1000,450 T1500,450"
          dur="7s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

const IoMarketsAI: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen">
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

      {/* Hero Section - Premium Animated */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          {/* Base gradient - deep navy with purple undertones */}
          <div className="absolute inset-0 hero-gradient-bg" />

          {/* Elegant grid pattern */}
          <div className="absolute inset-0 elegant-grid" />

          {/* Diamond pattern overlay */}
          <div className="absolute inset-0 diamond-pattern opacity-40" />

          {/* Dynamic multi-color orbs matching tagline colors */}
          <div className="absolute top-0 left-[15%] w-[600px] h-[600px] bg-[#8B5CF6] orb-hero" />
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#D946EF] orb-hero" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[10%] left-[30%] w-[550px] h-[550px] bg-[#06B6D4] orb-hero" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 right-[25%] w-[450px] h-[450px] bg-[#9333EA] orb-hero" style={{ animationDelay: '3s' }} />
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#D946EF]/10 via-[#8B5CF6]/8 to-[#9333EA]/10 rounded-full blur-[150px]" />
        </div>

        {/* Floating elements */}
        <FloatingElements />
        <AnimatedLines />

        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 z-10"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge - AI Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-violet mb-12 border-2 border-[#8B5CF6]/30"
            >
              <span className="relative flex h-4 w-4">
                <span className="animate-ping-violet absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#A78BFA]"></span>
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                <span className="gradient-text-violet">AI-Powered</span> Financial Intelligence
              </span>
              <Sparkles className="w-5 h-5 text-[#A78BFA]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tight"
            >
              <span className="relative inline-block">
                IoMarkets
                <span className="text-[#A78BFA] text-xl sm:text-2xl lg:text-3xl font-bold align-super ml-1">®</span>
              </span>
              {' '}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">.ai</span>
            </motion.h1>

            {/* Tagline - Two lines with animated gradient bold words */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="relative inline-block">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed text-gray-300">
                  <span>Where </span>
                  <span className="gradient-text-animated-violet font-bold">Intelligence</span>
                  <span> meets </span>
                  <span className="gradient-text-animated-fuchsia font-bold">Innovation</span>
                  <br />
                  <span>& </span>
                  <span className="gradient-text-animated-cyan font-bold">Precision</span>
                  <span> meets </span>
                  <span className="gradient-text-animated-purple font-bold">Performance</span>
                  <span className="text-[#A78BFA] text-base sm:text-lg lg:text-xl font-bold align-super ml-1">™</span>
                </div>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent rounded-full origin-center"
                />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive financial data platform powered by advanced <span className="text-[#8B5CF6] font-semibold">AI & Machine Learning</span>. Real-time analytics, <span className="text-[#D946EF] font-semibold">predictive modeling</span>, and <span className="text-[#06B6D4] font-semibold">investment intelligence</span> for institutional clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button className="group relative w-full sm:w-auto px-12 py-6 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-black text-xl overflow-hidden shadow-2xl shadow-[#8B5CF6]/40 hover:shadow-[#A78BFA]/60 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Access Platform
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="group w-full sm:w-auto px-12 py-6 rounded-2xl border-2 border-[#8B5CF6]/50 bg-[#8B5CF6]/10 text-white font-bold text-xl hover:bg-[#8B5CF6]/20 hover:border-[#A78BFA] transition-all flex items-center justify-center gap-3">
                API Documentation
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-sm font-medium text-gray-400">Scroll to explore</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#8B5CF6]/60 flex justify-center pt-2 shadow-lg shadow-[#8B5CF6]/20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#A78BFA]"
            />
          </div>
        </motion.div>

        {/* Bottom gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* AI Analytics Dashboard */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Market Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced charting and analytics powered by machine learning algorithms
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div style={{ height: "500px", width: "100%" }}>
              <div className="h-[500px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">Trading Chart Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Data & AI Capabilities</h2>
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
                <feature.icon className="w-12 h-12 text-[#8B5CF6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="py-16 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white">
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Enterprise AI Integration</h2>
            <p className="text-xl text-gray-100 mb-8 font-medium">
              Seamlessly integrate IoMarkets<sup className="text-xs">®</sup> AI into your existing infrastructure with our comprehensive API suite and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#8B5CF6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] transition-colors shadow-lg hover:shadow-[#8B5CF6]/30">
                View API Documentation
              </button>
              <button className="border-2 border-[#8B5CF6] text-[#A78BFA] px-8 py-3 rounded-lg font-semibold hover:bg-[#8B5CF6]/10 transition-colors">
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
