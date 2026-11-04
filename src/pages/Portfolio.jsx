import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const steps = [
    {
      num: '01',
      title: 'Technical Discovery & Architecture',
      description: 'We audit your requirements, select the optimal tech stack (React, Node, Python, AWS), and map out scalable database & API schemas.',
    },
    {
      num: '02',
      title: 'Agile Development Sprints',
      description: 'Our senior engineering pod builds your custom features in 2-week agile sprints with automated CI/CD and continuous staging deployments.',
    },
    {
      num: '03',
      title: 'QA, Security & Cloud Deployment',
      description: 'We perform end-to-end security audits, automated unit/integration testing, and zero-downtime production launches.',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Enterprise FinTech SaaS Platform',
      category: 'Web & Cloud',
      metrics: '4x Transaction Speed · 99.99% Uptime',
      description: 'Engineered a high-concurrency microservices platform handling over $50M in daily transaction volume.',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Healthcare Patient Telehealth App',
      category: 'Mobile Apps',
      metrics: '250k+ Active Users · 4.8 Rating',
      description: 'Built a HIPAA-compliant cross-platform mobile application with biometric login and real-time telehealth video sync.',
      tech: ['Flutter', 'Firebase', 'WebRTC', 'iOS/Android'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'AI Automated Customer Support Agent',
      category: 'AI & Automation',
      metrics: '70% Support Cost Reduction',
      description: 'Integrated custom LLM agents and workflow automation that resolved 15,000+ monthly customer tickets automatically.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
      image: 'https://images.unsplash.com/photo-1645226880663-81561dcab0ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Global Supply Chain Analytics Dashboard',
      category: 'Web & Cloud',
      metrics: '$12M+ Inventory Savings',
      description: 'Developed real-time logistics analytics dashboards tracking international container shipments across 14 ports.',
      tech: ['Next.js', 'TypeScript', 'BigQuery', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = ['All', 'Web & Cloud', 'Mobile Apps', 'AI & Automation'];

  const filteredProjects =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <div className="flex-1 bg-[#FAFAFA]">
      
      {/* Distinct Dark Theme Hero Banner for Portfolio / How It Works */}
      <section className="bg-[#141414] text-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <span className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider inline-block bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full">
            ✦ HOW IT WORKS & PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">
            Proven Software Engineering & Case Studies
          </h1>
          <p className="font-sans text-base text-[#E5E5E5]/70 max-w-2xl mx-auto leading-relaxed">
            Review our 3-step agile development process and explore real-world digital applications built for enterprise clients.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        
        {/* Process Steps */}
        <ScrollReveal variant="reveal-mask" className="max-w-2xl mb-12">
          <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
            Development Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141414]">
            3-Step Engineering Lifecycle
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 100}>
              <TiltCard className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <span className="font-serif text-4xl font-bold text-[#1F514C] block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-2xl text-[#141414] mb-3">{step.title}</h3>
                  <p className="font-sans text-xs text-[#636363] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Portfolio Showcase Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 border-b border-[#E5E5E5] pb-6">
          <div>
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-1">
              Featured Work
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#141414]">
              Enterprise IT Case Studies
            </h2>
          </div>

          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1F514C] text-white shadow-xs'
                    : 'bg-white text-[#636363] border border-[#E5E5E5] hover:text-[#141414]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((cs, idx) => (
            <ScrollReveal key={cs.id} delay={idx * 80}>
              <TiltCard className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between h-full group">
                <div>
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1F514C] font-sans text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs">
                      {cs.category}
                    </span>
                    <span className="absolute bottom-4 left-4 bg-[#1F514C] text-[#EDFFE3] font-sans text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                      ⚡ {cs.metrics}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl text-[#141414]">{cs.title}</h3>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed">
                      {cs.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cs.tech.map((t) => (
                        <span key={t} className="bg-[#FAFAFA] border border-[#E5E5E5] text-[#141414] font-sans text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-semibold text-[#1F514C] hover:underline"
                  >
                    Request Similar Solution →
                  </Link>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
