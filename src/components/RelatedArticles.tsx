import React from 'react';
import { BLOG_POST_DETAIL_DATA } from '@/data/mockData';
import Link from 'next/link';

interface RelatedArticlesProps {
    readonly className?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`mt-16 border-t border-primary/10 pt-16 ${className}`} {...props}>
            <h2 className="text-3xl font-extrabold mb-8">Continue Exploring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POST_DETAIL_DATA.relatedArticles.map((article, idx) => (
                    <Link key={idx} href={article.link} className="group flex flex-col">
                        <div className="aspect-video rounded-xl overflow-hidden mb-4">
                            <img 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                alt={article.title} 
                                src={article.image}
                            />
                        </div>
                        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-2">
                            {article.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedArticles;
