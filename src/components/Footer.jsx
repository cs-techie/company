import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-12 border-t border-[#E5E5E5]/10 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Kernalytics
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#EDFFE3]"></span>
            </Link>
            <p className="text-xs text-[#E5E5E5]/70 leading-relaxed">
              Kernalytics Solutions is a premier IT Services & Software Engineering Agency delivering custom web applications, mobile apps, AI automation, and cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5E5E5]/70">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5E5E5]/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Solutions</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Tiers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Technical Insights</Link></li>
              <li>
                <Link to="/careers" className="inline-flex items-center gap-2 text-[#EDFFE3] hover:text-white transition-colors font-medium">
                  <span>Careers & Hiring</span>
                  <span className="bg-[#EDFFE3] text-[#1F514C] text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Hiring
                  </span>
                </Link>
              </li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get in touch</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-[#EDFFE3] uppercase tracking-wider mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5E5E5]/70">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#EDFFE3]">mail</span>
                <span>contact@kernalytics.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#EDFFE3]">call</span>
                <span>+1 (800) 537-6259</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#EDFFE3]">location_on</span>
                <span>Silicon Valley · California, USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#E5E5E5]/50 gap-4">
          <p>© {new Date().getFullYear()} Kernalytics Solutions IT Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
