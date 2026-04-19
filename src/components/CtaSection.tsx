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

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Features */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white mb-6 leading-[1.15] tracking-tight flex flex-wrap items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#00ff2a]">
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
                            </svg>
                            <span>
                                {CTA_CONTENT.titleStart}
                                <span className="text-[#00ff2a] block mt-1">{CTA_CONTENT.titleHighlight}</span>
                            </span>
                        </h2>

                        <p className="text-slate-300 text-lg font-medium mb-10 leading-relaxed opacity-90">
                            {CTA_CONTENT.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {CTA_CONTENT.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-[#112318] border border-[#1d3d2a] px-4 py-2.5 rounded-xl">
                                    {feature.icon === 'cash' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ff2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )}
                                    {feature.icon === 'location' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ff2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                    {feature.icon === 'shield' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ff2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )}
                                    <span className="text-white font-bold text-sm">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="bg-white rounded-[24px] p-8 lg:p-10 shadow-2xl relative w-full max-w-lg ml-auto">
                        <h3 className="text-[22px] font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                            {CTA_CONTENT.form.title} 🚘
                        </h3>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">
                                    {CTA_CONTENT.form.pickupLabel}
                                </label>
                                <input
                                    type="text"
                                    placeholder={CTA_CONTENT.form.pickupPlaceholder}
                                    className="w-full bg-[#f8fafc] border border-slate-100 text-slate-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00ff2a] focus:border-transparent transition-all placeholder:text-slate-400 text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">
                                    {CTA_CONTENT.form.destLabel}
                                </label>
                                <input
                                    type="text"
                                    placeholder={CTA_CONTENT.form.destPlaceholder}
                                    className="w-full bg-[#f8fafc] border border-slate-100 text-slate-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00ff2a] focus:border-transparent transition-all placeholder:text-slate-400 text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">
                                    {CTA_CONTENT.form.serviceLabel}
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-[#f8fafc] border border-slate-100 text-slate-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00ff2a] focus:border-transparent transition-all appearance-none text-sm font-medium cursor-pointer">
                                        {CTA_CONTENT.form.serviceOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-800 mb-2">
                                        {CTA_CONTENT.form.dateLabel}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full bg-[#f8fafc] border border-slate-100 text-slate-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00ff2a] focus:border-transparent transition-all text-sm font-medium color-slate-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-800 mb-2">
                                        {CTA_CONTENT.form.timeLabel}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            className="w-full bg-[#f8fafc] border border-slate-100 text-slate-900 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#00ff2a] focus:border-transparent transition-all text-sm font-medium color-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-3 bg-[#00ff2a] hover:bg-[#00e025] text-slate-900 py-3.5 rounded-lg font-bold flex items-center justify-center transition-transform hover:-translate-y-0.5 text-sm"
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
