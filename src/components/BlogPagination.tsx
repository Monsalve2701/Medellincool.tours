import React from 'react';

interface BlogPaginationProps {
    readonly className?: string;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
    className = '',
    ...props
}) => {
    return (
        <div className={`flex items-center justify-center gap-2 mt-16 ${className}`} {...props}>
            <button className="size-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl bg-primary text-slate-950 font-bold">
                1
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                2
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                3
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    );
};

export default BlogPagination;
