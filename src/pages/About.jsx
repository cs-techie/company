import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import CubeCanvas from '../components/CubeCanvas';

export default function About() {
  const milestones = [
    { year: '2021', title: 'Agency Founded', detail: 'Started in Silicon Valley with 4 core cloud architects.' },
    { year: '2023', title: 'Enterprise Scaling', detail: 'Expanded engineering pods across AI, mobile apps, and Web3.' },
    { year: '2025', title: 'AI & Data Integration', detail: 'Integrated LLM agent automation and predictive analytics suites.' },
    { year: '2026', title: 'Global Tech Delivery', detail: 'Scaled to 45+ senior engineers delivering $12M+ client value.' },
  ];

  const techBadges = [
    'React 18', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PyTorch',
    'Flutter', 'Swift', 'Kotlin', 'AWS', 'Azure', 'Kubernetes', 'Docker',
    'PostgreSQL', 'GraphQL', 'TailwindCSS', 'Terraform', 'Figma'
  ];

  return (
    <div className="flex-1 bg-[#FAFAFA]">
      
      {/* Distinct Split-Screen Hero Header for About / Solutions with Three.js 3D WebGL Canvas */}
      <section className="pt-28 pb-20 px-6 md:px-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollReveal variant="reveal-mask" className="space-y-6">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block bg-[#EDFFE3] border border-[#EDFFE3] px-3.5 py-1 rounded-full w-fit">
              ✦ COMPANY & ENGINEERING VISION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#141414] leading-tight">
              Engineering the Future of Enterprise Technology
            </h1>
            <p className="font-sans text-base text-[#636363] leading-relaxed">
              Kernalytics Solutions is a premier IT engineering agency. We bridge the gap between high-level business goals and high-performance software architecture.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#1F514C] text-white text-xs font-sans font-semibold rounded-full hover:bg-[#153B37] transition-colors shadow-md"
              >
                Request Technical Call →
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-[#FAFAFA] border border-[#E5E5E5] text-[#141414] text-xs font-sans font-semibold rounded-full hover:bg-[#E5E5E5]/50 transition-colors"
              >
                Explore Methodology
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="rise" delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5E5E5] h-96 bg-[#141414] group">
              {/* High-Resolution Tech HQ Background Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="Kernalytics Silicon Valley HQ & Engineering Operations Hub"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent z-5" />

              {/* Three.js Interactive 3D Hyper-Cube Lattice Canvas */}
              <CubeCanvas className="absolute inset-0 z-10" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent flex items-end p-8 z-20 pointer-events-none">
                <div className="text-white">
                  <span className="font-sans text-xs text-[#EDFFE3] font-bold block mb-1">Silicon Valley HQ</span>
                  <h4 className="font-serif text-xl font-semibold">Senior Engineering & Cloud Operations Hub</h4>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Company Timeline & Milestones */}
      <section className="py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <ScrollReveal variant="reveal-mask" className="max-w-2xl mb-16">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              Company Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414]">
              Our Journey of Technical Innovation
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 80}>
                <div className="p-8 bg-white border border-[#E5E5E5] rounded-2xl h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="font-serif text-4xl font-bold text-[#1F514C] block mb-2">{m.year}</span>
                    <h3 className="font-serif text-lg text-[#141414] mb-2">{m.title}</h3>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal variant="reveal-mask" className="max-w-2xl mx-auto mb-10">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#141414]">
              Built with Modern Open Standards
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techBadges.map((badge, idx) => (
              <ScrollReveal key={badge} delay={idx * 30}>
                <span className="px-4 py-2 bg-[#FAFAFA] border border-[#E5E5E5] text-[#141414] font-sans text-xs font-semibold rounded-full hover:border-[#1F514C] hover:text-[#1F514C] transition-all">
                  {badge}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
