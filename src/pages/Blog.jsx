import React, { useState } from 'react';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 1,
      pubCode: 'pub: business-strategy/growth-roadmap',
      title: 'Architecting Enterprise Growth Roadmaps That Deliver Real Results',
      category: 'Business Strategy',
      date: 'August 12, 2026',
      readTime: '6 min read',
      author: 'Sarah Mitchell',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      excerpt: 'A strategic deep-dive into market positioning, operational alignment, and revenue scaling for modern enterprises.',
    },
    {
      id: 2,
      pubCode: 'pub: operations/process-optimization',
      title: 'Streamlining Organizational Workflows & Reducing Operational Friction',
      category: 'Operational Efficiency',
      date: 'July 28, 2026',
      readTime: '8 min read',
      author: 'Emily Ross',
      image: 'https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?auto=format&fit=crop&w=600&q=80',
      excerpt: 'How we identify operational bottlenecks, optimize resource allocation, and drive productivity across multi-team organizations.',
    },
    {
      id: 3,
      pubCode: 'pub: digital/tech-modernization',
      title: 'Leveraging Modern Technology Infrastructure for Competitive Advantage',
      category: 'Digital Transformation',
      date: 'July 14, 2026',
      readTime: '5 min read',
      author: 'James Carter',
      image: 'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Practical techniques using AI tools, workflow automation, and cloud platforms to stay ahead of market shifts.',
    },
  ];

  const categories = ['All', 'Business Strategy', 'Operational Efficiency', 'Digital Transformation'];

  const filtered =
    selectedCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="flex-1 bg-[#FAFAFA] pt-28 pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <ScrollReveal variant="reveal-mask" className="max-w-3xl mb-12 pb-6 border-b border-[#E5E5E5]">
          <span className="font-sans text-xs font-semibold text-[#1F514C] uppercase tracking-wider block mb-2">
            Blog & Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#141414] mb-4">
            Strategic Insights & Industry Expertise
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#636363] leading-relaxed">
            In-depth strategy guides, operational benchmarks, and business insights written directly by Stratex senior consultants.
          </p>
        </ScrollReveal>

        {/* Categories */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-[#E5E5E5] pb-4 font-sans text-xs">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === c
                  ? 'bg-[#141414] text-white font-semibold'
                  : 'bg-white text-[#636363] border border-[#E5E5E5] hover:text-[#141414]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {filtered.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 100}>
              <TiltCard className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between h-full group hover:border-[#1F514C]/40 transition-colors">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1F514C] font-sans text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#636363] mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#141414] mb-3 leading-snug hover:text-[#1F514C] transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-[#636363] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-sans text-[#636363]">
                  <span className="font-semibold text-[#141414]">By {article.author}</span>
                  <span className="text-[#1F514C] font-semibold">Read article →</span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
