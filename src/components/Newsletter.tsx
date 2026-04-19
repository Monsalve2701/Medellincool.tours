"use client";

import React from 'react';
import { NEWSLETTER_DATA } from '@/data/mockData';

interface NewsletterProps {
    readonly className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`px-6 py-20 lg:px-10 bg-slate-900 dark:bg-slate-950 ${className}`} {...props}>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {NEWSLETTER_DATA.title}
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    {NEWSLETTER_DATA.description}
                </p>
                <form
                    className="flex flex-col sm:flex-row gap-4 items-stretch justify-center max-w-lg mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="flex-1 rounded-xl px-5 py-3 bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={NEWSLETTER_DATA.placeholder}
                        type="email"
                        required
                    />
                    <button
                        className="rounded-xl px-8 py-3 bg-primary text-slate-950 font-bold hover:scale-105 transition-transform"
                        type="submit"
                    >
                        {NEWSLETTER_DATA.buttonText}
                    </button>
                </form>
                <p className="text-slate-600 text-xs mt-6">
                    {NEWSLETTER_DATA.disclaimer}
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
