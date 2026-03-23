"use client";

import React from 'react';
import { CTA_CONTENT } from '@/data/mockData';

interface CtaSectionProps {
    readonly className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ className = '' }) => {
    return (
        <section className={`py-20 lg:py-32 bg-[#09150e] relative overflow-hidden ${className}`}>
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#49e619]/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Features */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {CTA_CONTENT.titleStart}
                            <span className="text-[#49e619]">{CTA_CONTENT.titleHighlight}</span>
                            {CTA_CONTENT.titleEnd}
                        </h2>

                        <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 leading-relaxed opacity-90">
                            {CTA_CONTENT.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {CTA_CONTENT.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    {/* SVG Icons based on the feature name, using standard heroicons paths */}
                                    {feature.icon === 'shield-check' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49e619]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )}
                                    {feature.icon === 'lock' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49e619]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    )}
                                    {feature.icon === 'thumb-up' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49e619]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                    )}
                                    <span className="text-white font-bold text-sm">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative">
                        <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">
                            {CTA_CONTENT.form.title}
                        </h3>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    {CTA_CONTENT.form.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    placeholder={CTA_CONTENT.form.namePlaceholder}
                                    className="w-full bg-[#f8fafc] border border-slate-200 text-slate-900 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#49e619] focus:border-transparent transition-all placeholder:text-slate-400 font-medium"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        {CTA_CONTENT.form.dateLabel}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full bg-[#f8fafc] border border-slate-200 text-slate-900 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#49e619] focus:border-transparent transition-all font-medium appearance-none"
                                        />
                                        {/* Native date picker icon overrides might be needed depending on browser, 
                        but standard inputs look acceptable on modern browsers. */}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        {CTA_CONTENT.form.tourLabel}
                                    </label>
                                    <div className="relative">
                                        <select className="w-full bg-[#f8fafc] border border-slate-200 text-slate-900 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#49e619] focus:border-transparent transition-all appearance-none font-medium">
                                            {CTA_CONTENT.form.tourOptions.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#49e619] hover:bg-[#3db814] text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-xl shadow-[#49e619]/20 hover:shadow-[#49e619]/40 hover:-translate-y-1 text-base"
                            >
                                {CTA_CONTENT.form.submitButton}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CtaSection;
