
import React from 'react';
import { BLOG_POST_DETAIL_DATA } from '@/data/mockData';

interface BlogPostContentProps {
    readonly className?: string;
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({
    className = '',
    ...props
}) => {
    return (
        <article className={`flex flex-col gap-8 ${className}`} {...props}>
            <div className="flex items-center gap-4 py-4 border-b border-primary/10">
                <div
                    className="size-14 rounded-full bg-cover bg-center border-2 border-primary"
                    style={{ backgroundImage: `url("${BLOG_POST_DETAIL_DATA.author.avatar}")` }}
                />
                <div>
                    <p className="font-bold text-lg">{BLOG_POST_DETAIL_DATA.author.name}</p>
                    <p className="text-slate-500 text-sm">
                        Published on {BLOG_POST_DETAIL_DATA.author.date} • {BLOG_POST_DETAIL_DATA.author.readTime}
                    </p>
                </div>
            </div>

            <div className="prose prose-slate max-w-none text-lg leading-relaxed space-y-6">
                <p className="text-xl font-medium text-slate-700 italic border-l-4 border-primary pl-6">
                    Medellín is more than just a city of eternal spring; it is the beating heart of Colombia’s coffee revolution. Today, we take you deep into the mountains of La Sierra.
                </p>

                <h2 className="text-2xl font-bold text-slate-900">The Journey of the Bean</h2>
                <p>
                    The process begins long before the sun rises over the Aburrá Valley. Local farmers, or <i>cafeteros</i>, meticulously hand-pick only the ripest red cherries. Unlike industrial farms, the steep hills of Medellín require a human touch that machines simply cannot replicate.
                </p>

                <blockquote className="bg-primary/10 p-8 rounded-xl my-8">
                    <p className="text-2xl font-bold text-slate-900 italic">"Coffee is not just a drink in Medellín; it’s our history, our resilience, and our future."</p>
                    <footer className="mt-4 text-primary font-bold">— Don Jose, 3rd Generation Farmer</footer>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900">The Processing and Drying</h2>
                <p>
                    Once picked, the cherries are de-pulped to reveal the beans inside. We watched as they were fermented for 24 hours—a critical stage that develops the bright, acidic notes Medellín coffee is famous for. The beans are then spread across elevated 'drying beds' where they soak up the tropical sun.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                <div className="rounded-lg overflow-hidden h-48">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Coffee cherries" src={BLOG_POST_DETAIL_DATA.images[0]} />
                </div>
                <div className="rounded-lg overflow-hidden h-48">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Green coffee beans" src={BLOG_POST_DETAIL_DATA.images[1]} />
                </div>
                <div className="rounded-lg overflow-hidden h-48 col-span-2 md:col-span-1">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform" alt="Coffee roasting" src={BLOG_POST_DETAIL_DATA.images[2]} />
                </div>
            </div>

            <div className="prose prose-slate max-w-none text-lg leading-relaxed space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">The Art of the Roast</h2>
                <p>
                    The transformation from green bean to aromatic brown treasure happens in the roaster. In La Sierra, they prefer a medium roast that highlights the caramel and citrus undertones of the local soil.
                </p>
            </div>
        </article>
    );
};

export default BlogPostContent;
