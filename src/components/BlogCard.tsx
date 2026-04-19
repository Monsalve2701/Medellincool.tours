import React from 'react';

export interface BlogCardProps {
    readonly id: string;
    readonly tag: string;
    readonly readTime: string;
    readonly date: string;
    readonly title: string;
    readonly description: string;
    readonly image: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    id, tag, readTime, date, title, description, image, ...props
}) => {
    return (
        <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" {...props}>
            <div className="relative aspect-[16/10] overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-slate-950 text-xs font-bold rounded-lg">{tag}</span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{readTime}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {description}
                </p>
                <a className="flex items-center gap-2 text-primary font-bold text-sm" href={`/blog/${id}`}>
                    Read More
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
