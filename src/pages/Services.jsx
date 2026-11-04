import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';
import SpotlightCard from '../components/SpotlightCard';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const serviceImageCollections = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1645226880663-81561dcab0ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  ];

  const services = [
    {
      id: 'web-development',
      category: 'Web',
      title: 'Web Development',
      subtitle: 'Corporate Sites, E-Commerce & React Frontend',
      description: 'Build fast, responsive web applications, corporate portals, e-commerce platforms, and modern React interfaces engineered for conversion.',
      techStack: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
      timeline: '3 - 6 Weeks',
      deliverables: [
        'Corporate websites & landing pages',
        'E-commerce platform development',
        'Custom React & Next.js web applications',
        'Headless CMS & performance optimization',
      ],
      icon: 'code',
    },
    {
      id: 'mobile-app-development',
      category: 'Mobile',
      title: 'Mobile App Development',
      subtitle: 'iOS, Android & Cross-Platform Applications',
      description: 'Design and deploy native iOS & Android applications or cross-platform mobile apps with real-time sync and seamless user flows.',
      techStack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase'],
      timeline: '4 - 8 Weeks',
      deliverables: [
        'Native Android (Kotlin) & iOS (Swift) apps',
        'Cross-platform React Native & Flutter apps',
        'Customer-facing mobile applications',
        'Enterprise mobile workforce software',
      ],
      icon: 'smartphone',
    },
    {
      id: 'ui-ux-design',
      category: 'Design',
      title: 'UI/UX Design',
      subtitle: 'Mobile App Design, Wireframing & Design Systems',
      description: 'Craft beautiful, accessible user interfaces, design systems, and interactive clickable prototypes based on empirical user research.',
      techStack: ['Figma', 'Framer', 'Prototyping', 'Design Tokens', 'User Testing'],
      timeline: '2 - 4 Weeks',
      deliverables: [
        'Website UI/UX & responsive layouts',
        'Mobile application interface design',
        'Clickable interactive prototypes & wireframes',
        'Scalable component design systems',
      ],
      icon: 'palette',
    },
    {
      id: 'software-development',
      category: 'Software',
      title: 'Software Development',
      subtitle: 'Custom Enterprise Software & SaaS Solutions',
      description: 'Architect custom enterprise applications, SaaS platforms, and secure REST/GraphQL API integrations built for long-term scalability.',
      techStack: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker'],
      timeline: '6 - 12 Weeks',
      deliverables: [
        'Custom enterprise software solutions',
        'Multi-tenant SaaS product engineering',
        'RESTful & GraphQL API integration',
        'Legacy code refactoring & modernization',
      ],
      icon: 'terminal',
    },
    {
      id: 'ai-machine-learning',
      category: 'AI',
      title: 'AI & Machine Learning',
      subtitle: 'AI Agents, Automation & Predictive Analytics',
      description: 'Integrate intelligent LLM chatbots, AI-driven workflow automation, and custom predictive machine learning algorithms.',
      techStack: ['Python', 'LangChain', 'OpenAI API', 'PyTorch', 'Vector DBs'],
      timeline: '3 - 6 Weeks',
      deliverables: [
        'AI-powered business applications',
        'Intelligent conversational agents & chatbots',
        'AI process automation workflows',
        'Predictive analytics & ML model deployment',
      ],
      icon: 'auto_awesome',
    },
    {
      id: 'cloud-devops',
      category: 'Cloud',
      title: 'Cloud & DevOps',
      subtitle: 'AWS, Azure, GCP Migration & CI/CD Pipelines',
      description: 'Migrate to modern cloud infrastructure, automate deployment pipelines, and maintain zero-downtime serverless architecture.',
      techStack: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      timeline: '2 - 5 Weeks',
      deliverables: [
        'Cloud migration to AWS, Azure & GCP',
        'Automated CI/CD deployment pipelines',
        'Docker containerization & Kubernetes clusters',
        'Infrastructure as Code (Terraform / CloudFormation)',
      ],
      icon: 'cloud_done',
    },
    {
      id: 'data-analytics',
      category: 'Data',
      title: 'Data & Analytics',
      subtitle: 'Business Intelligence & Data Engineering',
      description: 'Transform complex raw data into interactive real-time dashboards, BI pipelines, and automated reporting systems.',
      techStack: ['Snowflake', 'BigQuery', 'Tableau', 'dbt', 'Apache Spark'],
      timeline: '3 - 6 Weeks',
      deliverables: [
        'Business Intelligence (BI) dashboards',
        'Real-time data visualization tools',
        'Data engineering & ETL pipeline building',
        'Data warehouse architecture & optimization',
      ],
      icon: 'analytics',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Design', 'Software', 'AI', 'Cloud', 'Data'];

  const filteredServices =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <div className="flex-1 bg-[#FAFAFA]">
      
      {/* Distinct Dark Hero Header Banner for Services */}
      <section className="bg-[#1F514C] text-white pt-28 pb-20 px-6 md:px-12 border-b border-[#E5E5E5]/20">
        <div className="max-w-[1280px] mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider block mb-3 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full w-fit mx-auto md:mx-0">
              ⚡ IT PRACTICE AREAS & CAPABILITIES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Enterprise IT Services & Engineering Solutions
            </h1>
            <p className="font-sans text-base text-[#EDFFE3]/90 leading-relaxed font-light">
              Explore our core technical practice areas. Filter by domain or click any service to review tech stacks, timelines, and deliverables.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center shrink-0 w-full sm:w-auto">
            <span className="font-serif text-4xl font-bold text-[#EDFFE3] block mb-1">7</span>
            <span className="font-sans text-xs text-white/80 uppercase">Specialized Practice Pods</span>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <div className="bg-white border-b border-[#E5E5E5] sticky top-20 z-30 shadow-2xs">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between overflow-x-auto gap-3">
          <span className="font-sans text-xs font-semibold text-[#636363] uppercase tracking-wider shrink-0 mr-2">
            Filter Practice Area:
          </span>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-all shrink-0 ${
                  activeFilter === cat
                    ? 'bg-[#1F514C] text-white shadow-xs scale-105'
                    : 'bg-[#FAFAFA] text-[#636363] border border-[#E5E5E5] hover:text-[#141414] hover:bg-[#E5E5E5]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid Layout with Spotlight Cards */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 60}>
              <TiltCard className="h-full">
                <SpotlightCard className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between h-full group hover:border-[#1F514C]/40 transition-colors">
                  
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={serviceImageCollections[idx % serviceImageCollections.length]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#1F514C] flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-xl">{service.icon}</span>
                      </div>
                      <span className="absolute top-4 right-4 bg-[#1F514C] text-[#EDFFE3] font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        {service.timeline}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl text-[#141414] mb-1">{service.title}</h3>
                      <p className="font-sans text-[11px] font-semibold text-[#1F514C] uppercase tracking-wider mb-3">
                        {service.subtitle}
                      </p>
                      <p className="font-sans text-xs text-[#636363] leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.techStack.map((tech) => (
                          <span key={tech} className="bg-[#FAFAFA] border border-[#E5E5E5] text-[#141414] text-[10px] font-sans font-medium px-2.5 py-0.5 rounded-md hover:border-[#1F514C] transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#E5E5E5]">
                        <p className="font-sans text-[11px] font-semibold text-[#141414] uppercase tracking-wider mb-2">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-1.5 font-sans text-xs text-[#636363]">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#1F514C] font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full text-center py-3 bg-[#FAFAFA] hover:bg-[#1F514C] hover:text-white border border-[#E5E5E5] text-[#141414] font-sans text-xs font-semibold rounded-full transition-all"
                    >
                      View Specs & Schedule Call →
                    </button>
                  </div>

                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Detailed Service Modal Popup */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-[#141414]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAFAFA] text-[#141414] flex items-center justify-center font-bold hover:bg-[#E5E5E5]"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{selectedService.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#141414]">{selectedService.title}</h3>
                  <span className="font-sans text-xs text-[#1F514C] font-semibold">{selectedService.subtitle}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#636363] leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="font-sans text-xs font-semibold text-[#141414] uppercase mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((t) => (
                    <span key={t} className="bg-[#EDFFE3] text-[#1F514C] font-sans text-xs font-bold px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs font-semibold text-[#141414] uppercase mb-2">Typical Timeline:</h4>
                <p className="font-sans text-xs text-[#636363] font-medium">{selectedService.timeline}</p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex gap-3">
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-center py-3 bg-[#1F514C] text-white font-sans text-xs font-semibold rounded-full hover:bg-[#153B37]"
                >
                  Request Technical Proposal
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
