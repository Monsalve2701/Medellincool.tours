import React from 'react';
import { BLOG_FILTERS } from '@/data/mockData';

interface BlogFiltersProps {
    readonly className?: string;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`px-6 lg:px-10 ${className}`} {...props}>
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
                    {BLOG_FILTERS.map((filter, index) => (
                        <button 
                            key={index}
                            className={`shrink-0 h-10 px-6 rounded-full text-sm font-semibold transition-colors ${
                                index === 0 
                                ? 'bg-primary text-slate-950 font-bold' 
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-primary'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogFilters;
