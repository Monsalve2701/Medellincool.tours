"use client";

import React from 'react';
import { BLOG_POST_DETAIL_DATA } from '@/data/mockData';

interface BlogPostSidebarProps {
    readonly className?: string;
}

export const BlogPostSidebar: React.FC<BlogPostSidebarProps> = ({
    className = '',
    ...props
}) => {
    return (
        <aside className={`space-y-8 ${className}`} {...props}>
            <div className="bg-background-light border border-primary/20 rounded-xl p-6 shadow-xl sticky top-24">
                <h3 className="text-xl font-bold mb-4">{BLOG_POST_DETAIL_DATA.sidebar.title}</h3>
                <img 
                    className="w-full h-40 object-cover rounded-lg mb-4" 
                    alt="Tour View" 
                    src={BLOG_POST_DETAIL_DATA.sidebar.image}
                />
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Starting from</p>
                        <p className="text-3xl font-extrabold text-primary">{BLOG_POST_DETAIL_DATA.sidebar.price}</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <span className="material-symbols-outlined fill-1">star</span>
                        <span className="font-bold">{BLOG_POST_DETAIL_DATA.sidebar.rating}</span>
                    </div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                    {BLOG_POST_DETAIL_DATA.sidebar.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span> 
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 bg-primary text-slate-900 font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                    {BLOG_POST_DETAIL_DATA.sidebar.button}
                </button>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-bold mb-2">{BLOG_POST_DETAIL_DATA.sidebarNewsletter.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{BLOG_POST_DETAIL_DATA.sidebarNewsletter.subtitle}</p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className="rounded-lg border-slate-200 focus:ring-primary focus:border-primary text-sm bg-white" 
                        placeholder={BLOG_POST_DETAIL_DATA.sidebarNewsletter.placeholder} 
                        type="email"
                        required
                    />
                    <button className="bg-slate-900 text-white font-bold py-2 rounded-lg text-sm">
                        {BLOG_POST_DETAIL_DATA.sidebarNewsletter.buttonText}
                    </button>
                </form>
            </div>
        </aside>
    );
};

export default BlogPostSidebar;
