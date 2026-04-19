import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogPostHero } from '@/components/BlogPostHero';
import { BlogPostContent } from '@/components/BlogPostContent';
import { BlogPostSidebar } from '@/components/BlogPostSidebar';
import { RelatedArticles } from '@/components/RelatedArticles';

export default function BlogPostPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
            <Navbar />
            
            <main className="px-6 md:px-20 lg:px-40 py-8 flex flex-col gap-8 mt-20">
                <BlogPostHero />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <BlogPostContent className="lg:col-span-8" />
                    <BlogPostSidebar className="lg:col-span-4" />
                </div>
                
                <RelatedArticles />
            </main>

            <Footer />
        </div>
    );
}
