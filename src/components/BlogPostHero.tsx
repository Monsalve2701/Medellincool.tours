import React from 'react';
import { BLOG_POST_DETAIL_DATA } from '@/data/mockData';
import Link from 'next/link';

interface BlogPostHeroProps {
    readonly className?: string;
}

export const BlogPostHero: React.FC<BlogPostHeroProps> = ({
    className = '',
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-8 ${className}`} {...props}>
            <nav className="flex flex-wrap gap-2 text-sm">
                {BLOG_POST_DETAIL_DATA.breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-slate-300">/</span>}
                        {idx === BLOG_POST_DETAIL_DATA.breadcrumbs.length - 1 ? (
                            <span className="text-primary font-semibold">{crumb.label}</span>
                        ) : (
                            <Link href={crumb.href} className="text-slate-500 hover:text-primary transition-colors">
                                {crumb.label}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={BLOG_POST_DETAIL_DATA.hero.title} 
                    src={BLOG_POST_DETAIL_DATA.hero.image}
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
                        {BLOG_POST_DETAIL_DATA.hero.title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BlogPostHero;
