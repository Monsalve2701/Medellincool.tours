import React from 'react';
import { BLOG_POSTS } from '@/data/mockData';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
    readonly className?: string;
}

export const BlogGrid: React.FC<BlogGridProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`px-6 py-12 lg:px-10 ${className}`} {...props}>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
