import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';
import TechCanvas from '../components/TechCanvas';
import CyberGlobeCanvas from '../components/CyberGlobeCanvas';
import SphereCanvas from '../components/SphereCanvas';
import Counter from '../components/Counter';
import SpotlightCard from '../components/SpotlightCard';
import ShimmerText from '../components/ShimmerText';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Hardware-accelerated smooth parallax scroll
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroTextY = useTransform(scrollY, [0, 600], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // High-Resolution IT & Tech Architecture Unsplash Background
  const heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85';

  const serviceImageCollections = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1645226880663-81561dcab0ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=800&q=80',
  ];

  const testimonialAvatar = 'https://images.unsplash.com/photo-1630939687530-241d630735df?auto=format&fit=crop&w=300&q=80';

  const partners = ['AURA', 'VERTEX', 'NEXUS', 'PULSE', 'KINETIC'];

  const services = [
    {
      title: 'Web Development',
      subtitle: 'Corporate Sites, E-Commerce & React Frontend',
      description: 'Build fast, responsive web applications, e-commerce platforms, and modern frontend solutions engineered for performance.',
      icon: 'code',
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Native iOS, Android & Cross-Platform',
      description: 'Create high-converting iOS and Android mobile applications with seamless offline sync and intuitive user flows.',
      icon: 'smartphone',
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Design Systems & Interactive Prototypes',
      description: 'Craft beautiful user experiences, design systems, and clickable wireframes based on deep user research.',
      icon: 'palette',
    },
    {
      title: 'Software Development',
      subtitle: 'Custom Software & Enterprise SaaS',
      description: 'Develop robust enterprise applications, SaaS platforms, and REST/GraphQL APIs with clean, maintainable architecture.',
      icon: 'terminal',
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'AI Automation & Intelligent Chatbots',
      description: 'Integrate custom LLM agents, AI automation workflows, and predictive analytics to automate repetitive operations.',
      icon: 'auto_awesome',
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'AWS, Azure, GCP & CI/CD Pipelines',
      description: 'Migrate to the cloud, optimize serverless infrastructure, and automate zero-downtime CI/CD deployment pipelines.',
      icon: 'cloud_done',
    },
  ];

  const packages = [
    {
      name: 'Launch',
      price: '₹49,999',
      cta: 'Select Launch',
      features: ['Up to 7 pages', 'Responsive design', 'Custom UI', 'Contact/lead forms', 'Basic SEO', 'Analytics integration', '30 days support'],
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹99,999',
      cta: 'Select Growth',
      features: ['Up to 15 pages', 'Custom UI/UX', 'Advanced animations', 'CMS/blog', 'SEO optimization', 'API integrations', 'Performance optimization', '90 days support'],
      popular: true,
    },
    {
      name: 'Scale',
      price: '₹2,49,999+',
      cta: 'Select Scale',
      features: ['Custom web application', 'Authentication & roles', 'Admin dashboard', 'Database architecture', 'API integrations', 'Cloud deployment', 'Advanced security', 'Dedicated support'],
      popular: false,
    },
    {
      name: 'Custom',
      price: "Let's Talk",
      cta: 'Custom Quote',
      features: ['Custom system architecture', 'Tailored scope', 'Dedicated tech leads', 'Flexible milestone billing', 'Enterprise SLA & NDA', 'Custom AI/API features', 'Dedicated SLA support'],
      popular: false,
      isCustom: true,
    },
  ];

  const benefits = [
    {
      title: 'Dedicated Senior Engineers',
      description: 'Work directly with experienced software architects and senior developers.',
    },
    {
      title: 'Agile Sprint Delivery',
      description: 'Receive continuous code deployments, live staging previews, and weekly demos.',
    },
    {
      title: 'Enterprise Security',
      description: 'SOC2 compliant code practices, end-to-end encryption, and vulnerability testing.',
    },
    {
      title: 'Scalable Cloud Architecture',
      description: 'Built to handle high concurrency with auto-scaling AWS/Azure infrastructure.',
    },
    {
      title: 'Dedicated SLA Support',
      description: 'Proactive uptime monitoring and dedicated technical support for production apps.',
    },
    {
      title: '100% Code Ownership',
      description: 'You own all intellectual property, source code, and deployment repositories.',
    },
  ];

  const faqs = [
    {
      q: 'What IT services does Kernalytics Solutions provide?',
      a: 'We specialize in Web Development, Mobile App Development, UI/UX Design, Custom Enterprise Software, AI & Machine Learning, and Cloud & DevOps Infrastructure.',
    },
    {
      q: 'How long does a typical software project take to launch?',
      a: 'Initial MVPs and web applications launch within 4 to 8 weeks, while complex enterprise software platforms are delivered through bi-weekly agile sprints.',
    },
    {
      q: 'What tech stacks do you specialize in?',
      a: 'Our team builds with React, Next.js, Node.js, Python, TypeScript, Flutter, Swift, Kotlin, AWS, Azure, PostgreSQL, and Kubernetes.',
    },
    {
      q: 'Do I retain ownership of the source code?',
      a: 'Yes! Kernalytics Solutions grants you 100% full IP and code ownership upon completion of every milestone.',
    },
    {
      q: 'Can you scale or modernize an existing codebase?',
      a: 'Absolutely. We regularly refactor legacy codebases, migrate applications to modern cloud stacks, and integrate new AI/API features.',
    },
    {
      q: 'How do I start a project consultation?',
      a: 'Click "Request Consultation" or contact our engineering leads directly to schedule a technical discovery call.',
    },
  ];

  return (
    <div className="flex-1 bg-[#FAFAFA] text-[#141414]">
      
      {/* Full Viewport-Covering Hero Section with Transparent Navbar Overlay */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden border-b border-[#E5E5E5] bg-[#141414] pt-28 pb-12">
        
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 z-0 opacity-45"
          style={{ y: heroImageY, willChange: 'transform' }}
        >
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={heroImage}
            alt="Kernalytics IT Agency Technology Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/95 via-[#141414]/85 to-[#141414]/95" />
        </motion.div>

        {/* 3D Interactive Cyber-Globe Canvas */}
        <CyberGlobeCanvas />

        {/* 3D Interactive Node Constellation Layer */}
        <TechCanvas />

        {/* High-Contrast Focal Radial Gradient Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#141414]/90 via-[#141414]/70 to-transparent" />

        {/* Hero Copy Overlay */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, willChange: 'transform, opacity' }}
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center py-16 md:py-24 space-y-6"
        >
          
          {/* Rating Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 font-sans text-xs bg-[#EDFFE3] border border-[#EDFFE3] px-4 py-1.5 rounded-full font-bold shadow-xl"
            style={{ color: '#1F514C' }}
          >
            <span>★</span> Rated 4.9/5 · Kernalytics IT Agency
          </motion.div>

          {/* Main Headline with Shimmer Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            <ShimmerText>Custom Software & Cloud Engineering That Scales</ShimmerText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Kernalytics Solutions engineers high-performance web applications, mobile apps, custom software, and AI systems tailored for growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-2"
          >
            <Link
              to="/contact"
              style={{ color: '#1F514C' }}
              className="inline-flex items-center justify-center bg-[#EDFFE3] hover:bg-white font-sans text-sm font-bold rounded-full px-8 py-3.5 transition-all shadow-2xl hover:scale-105"
            >
              Request Consultation →
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/40 backdrop-blur-md font-sans text-sm font-medium rounded-full px-8 py-3.5 transition-all hover:scale-105 shadow-lg"
            >
              Explore IT Services
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* Partner Logos Strip */}
      <div className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal variant="rise">
            <p className="font-sans text-xs text-[#636363] uppercase tracking-wider mb-6 font-semibold">
              Powering technologies for industry leaders:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-70">
              {partners.map((partner) => (
                <span key={partner} className="font-serif font-bold text-xl tracking-widest text-[#141414]">
                  {partner}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid with Spotlight Cards */}
      <section className="py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <ScrollReveal variant="reveal-mask" className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              Our Core IT Services
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#141414] leading-tight">
              End-to-end digital solutions & IT engineering
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 80}>
                <TiltCard className="h-full">
                  <SpotlightCard className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between h-full group hover:border-[#1F514C]/40 transition-colors">
                    
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={serviceImageCollections[idx]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#1F514C] flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-xl">{service.icon}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-serif text-xl text-[#141414] mb-1">{service.title}</h3>
                        <p className="font-sans text-[11px] font-semibold text-[#1F514C] uppercase tracking-wider mb-3">
                          {service.subtitle}
                        </p>
                        <p className="font-sans text-xs text-[#636363] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#E5E5E5] text-xs font-semibold text-[#1F514C] flex items-center gap-1">
                        Explore Service <span>→</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing / Packages Section with Clean Non-Compressed Typography */}
      <section className="py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <ScrollReveal variant="reveal-mask" className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              Pricing Packages
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#141414]">
              Transparent packages & custom quotes
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <ScrollReveal key={pkg.name} delay={idx * 80}>
                <TiltCard className="h-full">
                  <SpotlightCard
                    className={`bg-white rounded-2xl p-7 flex flex-col justify-between h-full relative transition-all ${
                      pkg.popular
                        ? 'border-2 border-[#1F514C] shadow-md'
                        : pkg.isCustom
                        ? 'border-2 border-[#141414] bg-[#FAFAFA]'
                        : 'border border-[#E5E5E5] shadow-xs'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-6 bg-[#1F514C] text-white font-sans text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        ⭐ Recommended
                      </span>
                    )}
                    {pkg.isCustom && (
                      <span className="absolute -top-3 right-6 bg-[#141414] text-[#EDFFE3] font-sans text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        Custom Quote
                      </span>
                    )}
                    
                    <div>
                      <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider">
                        {pkg.name} {pkg.name === 'Custom' ? '' : 'Package'}
                      </span>
                      <div className="my-3">
                        <span className="font-serif text-3xl sm:text-4xl font-bold text-[#141414] tracking-tight">
                          {pkg.price}
                        </span>
                      </div>
                      
                      <div className="pt-3 border-t border-[#E5E5E5] mb-6">
                        <ul className="space-y-2.5 text-xs font-sans text-[#636363]">
                          {pkg.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="text-[#1F514C] font-bold text-sm leading-none mt-0.5">✓</span>
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={`w-full text-center py-3.5 px-4 text-xs font-sans font-bold rounded-xl transition-all whitespace-nowrap shadow-xs hover:scale-[1.02] ${
                        pkg.popular
                          ? 'bg-[#1F514C] text-white hover:bg-[#153B37]'
                          : pkg.isCustom
                          ? 'bg-[#141414] text-white hover:bg-black'
                          : 'bg-[#FAFAFA] hover:bg-[#E5E5E5]/70 border border-[#E5E5E5] text-[#141414]'
                      }`}
                    >
                      {pkg.cta} →
                    </Link>
                  </SpotlightCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Kernalytics */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <ScrollReveal variant="reveal-mask" className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              Why choose us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#141414]">
              The Kernalytics Advantage over traditional vendors
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Traditional Vendors */}
            <ScrollReveal variant="rise" delay={0}>
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <h3 className="font-serif text-2xl text-[#141414]">Traditional IT Vendors</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-base font-semibold text-[#141414] mb-1">Bloated Off-Shore Teams</h4>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed">
                      Layered communication management with junior developers writing brittle code.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-base font-semibold text-[#141414] mb-1">Unpredictable Deadlines</h4>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed">
                      Constant project scope creep, delayed sprints, and unexpected tech debt.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-base font-semibold text-[#141414] mb-1">Vendor Lock-In</h4>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed">
                      Proprietary frameworks that make it difficult to migrate or update software.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* With Kernalytics Solutions */}
            <ScrollReveal variant="rise" delay={100}>
              <div className="bg-[#1F514C] text-white rounded-2xl p-8 md:p-10 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-[#EDFFE3]"></span>
                  <h3 className="font-serif text-2xl text-white">With Kernalytics Solutions</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-base font-semibold text-white mb-1">Senior Engineering Pods</h4>
                    <p className="font-sans text-xs text-[#EDFFE3]/90 leading-relaxed">
                      Direct access to senior cloud architects, AI engineers, and UI designers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-base font-semibold text-white mb-1">Guaranteed Sprint Cadence</h4>
                    <p className="font-sans text-xs text-[#EDFFE3]/90 leading-relaxed">
                      Bi-weekly staging demos, continuous integration, and transparent timelines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-base font-semibold text-white mb-1">100% Code Ownership</h4>
                    <p className="font-sans text-xs text-[#EDFFE3]/90 leading-relaxed">
                      Clean open-standard code, fully documented APIs, and complete repo control.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* IT Delivery Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl">
                  <span className="text-[#1F514C] font-bold text-lg block mb-2">✓</span>
                  <h4 className="font-serif text-lg text-[#141414] mb-1">{b.title}</h4>
                  <p className="font-sans text-xs text-[#636363] leading-relaxed">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Impact & Performance Metrics with 3D Cyber Sphere WebGL & Animated Counter Numbers */}
      <section className="py-24 bg-[#141414] text-white border-b border-[#E5E5E5]/10 relative overflow-hidden">
        
        {/* 3D Wireframe Cyber Sphere Canvas */}
        <SphereCanvas />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          
          <ScrollReveal variant="reveal-mask" className="max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider block mb-2">
              Proven Track Record
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">
              Real metrics driving digital transformation
            </h2>
            <p className="font-sans text-base text-[#E5E5E5]/70 max-w-xl mx-auto">
              Kernalytics Solutions engineers resilient cloud platforms, high-conversion mobile apps, and robust enterprise systems.
            </p>
          </ScrollReveal>

          {/* Animated Smooth Counter Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <span className="font-serif text-5xl font-bold text-[#EDFFE3] block mb-2">
                <Counter value="$12M+" />
              </span>
              <span className="font-sans text-xs text-[#E5E5E5]/70 uppercase">Client Revenue Scaled</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <span className="font-serif text-5xl font-bold text-[#EDFFE3] block mb-2">
                <Counter value="99.9%" />
              </span>
              <span className="font-sans text-xs text-[#E5E5E5]/70 uppercase">Cloud SLA Uptime</span>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <span className="font-serif text-5xl font-bold text-[#EDFFE3] block mb-2">
                <Counter value="150+" />
              </span>
              <span className="font-sans text-xs text-[#E5E5E5]/70 uppercase">Apps Delivered</span>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <span className="font-serif text-5xl font-bold text-[#EDFFE3] block mb-2">
                <Counter value="45+" />
              </span>
              <span className="font-sans text-xs text-[#E5E5E5]/70 uppercase">Senior Engineers</span>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          
          <ScrollReveal variant="rise" className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-[#1F514C]">
              <img
                src={testimonialAvatar}
                alt="Muzamal Hussain"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#1F514C] text-3xl block mb-4">“</span>
            <blockquote className="font-serif text-3xl sm:text-4xl text-[#141414] leading-snug mb-6">
              “Kernalytics Solutions transformed our digital infrastructure and delivered our custom SaaS platform 3 weeks ahead of schedule.”
            </blockquote>
            <p className="font-sans text-base font-bold text-[#141414]">Muzamal Hussain</p>
            <p className="font-sans text-xs text-[#636363]">CTO · Enterprise Cloud Transformation</p>
          </ScrollReveal>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-b border-[#E5E5E5]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          
          <ScrollReveal variant="reveal-mask" className="text-center mb-16">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              FAQ
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#141414]">
              Frequently asked questions about our IT services
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-6 font-serif text-xl text-[#141414] flex justify-between items-center"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#1F514C] text-2xl font-sans ml-4">
                      {activeFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 text-xs font-sans text-[#636363] leading-relaxed border-t border-[#E5E5E5]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-[#1F514C] text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal variant="rise">
            <span className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider block mb-3">
              Start Your IT Project
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4 max-w-2xl mx-auto">
              Ready to engineer your next software or cloud application?
            </h2>
            <p className="font-sans text-sm text-[#EDFFE3]/90 mb-8">
              Get in touch with Kernalytics Solutions senior tech leads today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-[#EDFFE3] text-[#1F514C] font-sans text-sm font-semibold rounded-full px-8 py-4 transition-all shadow-md"
            >
              Request Technical Discovery Call →
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
