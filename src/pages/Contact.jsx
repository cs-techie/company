import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budgetOption: '₹50K – ₹1L',
    customBudget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    'Under ₹50K',
    '₹50K – ₹1L',
    '₹1L – ₹2.5L',
    '₹2.5L – ₹5L',
    '₹5L+',
    'I have a different budget',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-[#FAFAFA]">
      
      {/* Distinct Split Header for Contact Page */}
      <section className="bg-[#1F514C] text-white pt-28 pb-16 px-6 md:px-12 border-b border-[#E5E5E5]/20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EDFFE3] text-[#1F514C] text-xs font-bold px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
              <span>Engineering Team Online · Response Time &lt; 2 Hours</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white mb-2">
              Get a Custom Quote & Technical Discovery
            </h1>
            <p className="font-sans text-base text-[#EDFFE3]/90 font-light">
              Tell us what you're looking to build and your expected investment. We'll recommend the right solution.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-xs text-[#EDFFE3]">
            <span className="font-semibold block text-white text-sm">Direct RFP Submissions:</span>
            <span>rfp@kernalytics.com</span>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information & Office Map */}
          <div className="space-y-8 lg:col-span-1">
            <ScrollReveal delay={0}>
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-1">Email Us Directly</h3>
                <p className="font-sans text-xs text-[#636363] mb-3">For project inquiries & technical RFPs:</p>
                <a href="mailto:contact@kernalytics.com" className="font-sans text-sm font-bold text-[#1F514C] hover:underline">
                  contact@kernalytics.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-1">Call Our Engineering Team</h3>
                <p className="font-sans text-xs text-[#636363] mb-3">Monday – Friday, 9:00 AM – 6:00 PM PST:</p>
                <a href="tel:+18005376259" className="font-sans text-sm font-bold text-[#1F514C] hover:underline">
                  +1 (800) 537-6259
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-1">Global Headquarters</h3>
                <p className="font-sans text-xs text-[#636363] leading-relaxed">
                  Kernalytics Solutions IT Agency<br />
                  Silicon Valley Tech Center<br />
                  California, USA
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Technical Inquiry Form */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="rise" delay={150}>
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 md:p-10 shadow-xs">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center mx-auto text-3xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-serif text-3xl text-[#141414]">Custom Quote Request Submitted!</h3>
                    <p className="font-sans text-sm text-[#636363] max-w-md mx-auto">
                      Thank you for contacting Kernalytics Solutions. A senior software architect will analyze your scope and budget option to recommend the right solution within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#1F514C] text-white text-xs font-sans font-semibold rounded-full hover:bg-[#153B37] transition-colors mt-4"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-xs text-[#141414] focus:outline-none focus:border-[#1F514C]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-xs text-[#141414] focus:outline-none focus:border-[#1F514C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Tech Inc."
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-xs text-[#141414] focus:outline-none focus:border-[#1F514C]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                          IT Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-xs text-[#141414] focus:outline-none focus:border-[#1F514C]"
                        >
                          <option>Web Development</option>
                          <option>E-commerce Development</option>
                          <option>Web Applications</option>
                          <option>Mobile App Development</option>
                          <option>UI/UX Design</option>
                          <option>AI & Automation</option>
                          <option>Cloud & DevOps</option>
                          <option>Data & Analytics</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget Selector Buttons */}
                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                        Estimated Investment Budget *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, budgetOption: opt })}
                            className={`py-2.5 px-3 rounded-xl font-sans text-xs font-semibold border transition-all text-center ${
                              formData.budgetOption === opt
                                ? 'bg-[#1F514C] text-white border-[#1F514C] shadow-xs'
                                : 'bg-[#FAFAFA] text-[#636363] border-[#E5E5E5] hover:text-[#141414] hover:border-[#1F514C]/40'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {/* Custom Budget Write-in Input */}
                      {formData.budgetOption === 'I have a different budget' && (
                        <div className="mt-3">
                          <label className="block font-sans text-[11px] font-semibold text-[#1F514C] mb-1">
                            Enter your expected budget:
                          </label>
                          <input
                            type="text"
                            value={formData.customBudget}
                            onChange={(e) => setFormData({ ...formData, customBudget: e.target.value })}
                            placeholder="e.g. ₹7,50,000"
                            className="w-full px-4 py-2.5 bg-[#EDFFE3]/40 border border-[#1F514C] rounded-xl text-xs text-[#141414] focus:outline-none"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#141414] mb-2 uppercase tracking-wider">
                        Project Overview & Technical Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you're looking to build and any specific requirements..."
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-xs text-[#141414] focus:outline-none focus:border-[#1F514C]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1F514C] hover:bg-[#153B37] text-white font-sans text-sm font-semibold rounded-full transition-colors shadow-md"
                    >
                      Get a Custom Quote →
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
}
