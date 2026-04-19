import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogHero } from '@/components/BlogHero';
import { BlogFilters } from '@/components/BlogFilters';
import { BlogGrid } from '@/components/BlogGrid';
import { BlogPagination } from '@/components/BlogPagination';
import { Newsletter } from '@/components/Newsletter';

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex-1">
                <BlogHero />
                <BlogFilters />
                
                {/* Wrap Grid and Pagination to match the design padding and layout structure */}
                <div className="pb-16 lg:pb-24">
                    <BlogGrid />
                    <BlogPagination />
                </div>
                
                <Newsletter />
            </div>

            <Footer />
        </main>
    );
}
