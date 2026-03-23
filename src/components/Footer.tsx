import React from 'react';
import Link from 'next/link';
import { FOOTER_CONTENT } from '@/data/mockData';

interface FooterProps {
    readonly className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={`bg-white border-t border-slate-100 mt-20 ${className}`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Top Section: Logo & Social Links */}
                <div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-16 gap-10">

                    {/* Logo Block */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-[#49e619] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#49e619]/20 group-hover:scale-105 transition-transform duration-300">
                            {/* Mountain icon SVG similar to visual screenshot */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-900" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16L10 8L13 12.5L16 9L21 16H5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 19H21.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-[1.7rem] font-black tracking-tighter text-slate-900">
                            {FOOTER_CONTENT.logo.textStandard}
                            <span className="text-[#49e619]">{FOOTER_CONTENT.logo.textHighlight}</span>
                        </span>
                    </Link>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {FOOTER_CONTENT.socialLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-base font-bold text-slate-500 hover:text-slate-900 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100" />

                {/* Bottom Section: Copyright & Legal */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8 gap-6 text-sm">
                    <p className="text-slate-400 font-medium text-center md:text-left">
                        {FOOTER_CONTENT.copyright}
                    </p>

                    <div className="flex gap-6">
                        {FOOTER_CONTENT.legalLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-slate-400 hover:text-slate-900 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
