import React from 'react';
import { HERO_CONTENT } from '@/data/mockData';

interface HeroSectionProps {
    readonly className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    className = '',
}) => {
    return (
        <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 ${className}`}>
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/40 z-10" />
                <img
                    src="https://images.pexels.com/photos/32427248/pexels-photo-32427248.jpeg"
                    alt="Medellín view"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center justify-center h-full">
                <div className="max-w-4xl">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#49e619]" />
                            Experience the eternal spring
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-[4.8rem] font-black text-white mb-6 leading-[1.1] tracking-tight">
                        <span className="block md:inline-block md:whitespace-nowrap">{HERO_CONTENT.titleStart}</span>
                        <br className="hidden md:block" />
                        <span className="text-[#49e619]">{HERO_CONTENT.titleHighlight}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-medium">
                        {HERO_CONTENT.subtitle}
                    </p>

                    <div className="flex justify-center">
                        <button className="bg-[#49e619] hover:bg-[#3db814] text-slate-900 px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#49e619]/25 hover:-translate-y-1 text-lg flex items-center gap-2">
                            {HERO_CONTENT.primaryCta}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
