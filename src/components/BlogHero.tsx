import React from 'react';
import { BLOG_HERO_DATA } from '@/data/mockData';

interface BlogHeroProps {
    readonly className?: string;
}

export const BlogHero: React.FC<BlogHeroProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`px-6 py-12 md:py-20 lg:px-10 ${className}`} {...props}>
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[400px] flex items-center justify-center text-center p-8 shadow-2xl">
                    <div className="absolute inset-0 z-0 opacity-60">
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url('${BLOG_HERO_DATA.backgroundImage}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            {BLOG_HERO_DATA.tag}
                        </span>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                            {BLOG_HERO_DATA.title}
                        </h1>
                        <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed mb-8">
                            {BLOG_HERO_DATA.subtitle}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="rounded-xl h-12 px-8 bg-primary text-slate-950 font-bold hover:scale-105 transition-transform">
                                {BLOG_HERO_DATA.ctaPrimary}
                            </button>
                            <button className="rounded-xl h-12 px-8 bg-white/10 backdrop-blur-sm text-white font-bold border border-white/20 hover:bg-white/20 transition-all">
                                {BLOG_HERO_DATA.ctaSecondary}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
