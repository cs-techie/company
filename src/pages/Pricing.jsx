import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';

export default function Pricing() {
  const [activeFaq, setActiveFaq] = useState(null);

  const packages = [
    {
      id: 'launch',
      name: 'Launch',
      price: '₹49,999',
      badge: 'Starter',
      description: 'Ideal for small businesses & startups looking to launch a fast, professional web presence.',
      popular: false,
      features: [
        'Up to 7 pages',
        'Responsive design',
        'Custom UI',
        'Contact/lead forms',
        'Basic SEO',
        'Analytics integration',
        '30 days support',
      ],
      cta: 'Select Launch',
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '₹99,999',
      badge: 'Recommended',
      description: 'Designed for growing brands requiring custom UI/UX, animations, CMS & performance SEO.',
      popular: true,
      features: [
        'Up to 15 pages',
        'Custom UI/UX',
        'Advanced animations',
        'CMS/blog integration',
        'SEO optimization',
        'API integrations',
        'Performance optimization',
        '90 days support',
      ],
      cta: 'Select Growth',
    },
    {
      id: 'scale',
      name: 'Scale',
      price: '₹2,49,999+',
      badge: 'Enterprise',
      description: 'Full custom web application with database, authentication, admin dashboard & cloud infra.',
      popular: false,
      features: [
        'Custom web application',
        'Authentication & roles',
        'Admin dashboard',
        'Scalable database',
        'API integrations',
        'Cloud deployment (AWS/GCP)',
        'Advanced security',
        'Dedicated support',
      ],
      cta: 'Select Scale',
    },
    {
      id: 'custom',
      name: 'Custom',
      price: "Let's Talk",
      badge: 'Tailored Scope',
      description: 'For complex enterprise platforms & bespoke AI/software builds that need custom scope.',
      popular: false,
      isCustom: true,
      features: [
        'Custom system architecture',
        'Tailored scope & deliverables',
        'Dedicated tech leads & pod',
        'Flexible milestone billing',
        'Enterprise SLA & NDA',
        'Custom API & ML integrations',
        'Dedicated 24/7 SLA support',
      ],
      cta: 'Custom Quote',
    },
  ];

  const serviceRates = [
    { service: 'Website Development', starter: '₹35,000', pro: '₹75,000', enterprise: '₹1,50,000+' },
    { service: 'E-commerce Development', starter: '₹75,000', pro: '₹1,50,000', enterprise: '₹3,00,000+' },
    { service: 'Web Applications', starter: '₹1,50,000', pro: '₹3,00,000', enterprise: '₹6,00,000+' },
    { service: 'Mobile App Development', starter: '₹1,50,000', pro: '₹3,00,000', enterprise: '₹6,00,000+' },
    { service: 'UI/UX Design', starter: '₹25,000', pro: '₹50,000', enterprise: '₹1,00,000+' },
    { service: 'AI & Automation', starter: '₹75,000', pro: '₹2,00,000', enterprise: '₹5,00,000+' },
    { service: 'Cloud & DevOps', starter: '₹40,000', pro: '₹1,00,000', enterprise: '₹2,50,000+' },
    { service: 'Data & Analytics', starter: '₹50,000', pro: '₹1,25,000', enterprise: '₹3,00,000+' },
  ];

  const faqs = [
    {
      q: 'How do custom quotes work?',
      a: 'We evaluate your exact requirements, feature list, and target investment level to engineer a tailored technical scope and delivery roadmap.',
    },
    {
      q: 'What is included in the 30-day / 90-day support period?',
      a: 'We provide bug fixes, performance monitoring, content updates, and server maintenance after project launch.',
    },
    {
      q: 'Do you offer payment milestones?',
      a: 'Yes, typically structured into 40% initial deposit, 40% staging milestone, and 20% final deployment release.',
    },
    {
      q: 'Do I get complete code ownership?',
      a: 'Yes! Kernalytics Solutions transfers 100% intellectual property and full repository ownership upon project completion.',
    },
  ];

  return (
    <div className="flex-1 bg-[#FAFAFA] pt-20">
      
      {/* Distinct Header */}
      <section className="bg-white pt-28 pb-16 px-6 md:px-12 border-b border-[#E5E5E5] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider inline-block bg-[#EDFFE3] border border-[#EDFFE3] px-3.5 py-1 rounded-full">
            ✦ TRANSPARENT PACKAGES & CUSTOM QUOTES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#141414]">
            Kernalytics Solutions Pricing Packages
          </h1>
          <p className="font-sans text-base text-[#636363] leading-relaxed">
            Choose a predefined package or talk to our senior engineering architects for a custom quote built around your budget.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        
        {/* 4 Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, idx) => (
            <ScrollReveal key={pkg.id} delay={idx * 80}>
              <TiltCard
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
                  <p className="font-sans text-xs text-[#636363] leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  <div className="pt-4 border-t border-[#E5E5E5] mb-6">
                    <p className="font-sans text-[11px] font-semibold text-[#141414] uppercase tracking-wider mb-2.5">
                      Includes:
                    </p>
                    <ul className="space-y-2.5 text-xs font-sans text-[#636363]">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="text-[#1F514C] font-bold text-sm leading-none mt-0.5">✓</span>
                          <span className="leading-snug">{feat}</span>
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
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom Quote CTA Banner */}
        <ScrollReveal variant="rise" className="mb-24">
          <div className="bg-[#1F514C] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider block">
                Have a specific budget?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Tell us what you're looking to build and your expected investment.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#EDFFE3]/90 max-w-xl">
                We'll analyze your project requirements and recommend the right solution tailored to your exact budget.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white hover:bg-[#EDFFE3] text-[#1F514C] font-sans text-sm font-bold rounded-full transition-all shrink-0 shadow-md"
            >
              Get a Custom Quote →
            </Link>
          </div>
        </ScrollReveal>

        {/* Detailed Service Rates Matrix Table */}
        <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-xs max-w-4xl mx-auto mb-24 overflow-x-auto">
          <div className="mb-6">
            <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-1">
              Service Breakdown
            </span>
            <h3 className="font-serif text-2xl text-[#141414]">Individual IT Service Rate Card</h3>
          </div>

          <table className="w-full text-left font-sans text-xs">
            <thead>
              <tr className="border-b border-[#E5E5E5] text-[#141414]">
                <th className="py-3 px-4 font-semibold">Service</th>
                <th className="py-3 px-4 font-semibold text-[#636363]">Starter</th>
                <th className="py-3 px-4 font-semibold text-[#1F514C]">Professional</th>
                <th className="py-3 px-4 font-semibold text-[#141414]">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]/60 text-[#636363]">
              {serviceRates.map((row) => (
                <tr key={row.service} className="hover:bg-[#FAFAFA]">
                  <td className="py-3.5 px-4 font-medium text-[#141414]">{row.service}</td>
                  <td className="py-3.5 px-4">{row.starter}</td>
                  <td className="py-3.5 px-4 font-semibold text-[#1F514C]">{row.pro}</td>
                  <td className="py-3.5 px-4 font-bold text-[#141414]">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="reveal-mask" className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#141414]">Pricing FAQ</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-6 font-serif text-lg text-[#141414] flex justify-between items-center"
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

      </div>
    </div>
  );
}
