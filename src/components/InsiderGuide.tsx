import React from 'react';
import { INSIDER_GUIDE_DATA } from '@/data/mockData';

interface InsiderGuideProps {
    readonly className?: string;
}

export const InsiderGuide: React.FC<InsiderGuideProps> = ({
    className = '',
    ...props
}) => {
    return (
        <section className={`bg-white py-20 lg:py-32 ${className}`} id="insider-guide" {...props}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">
                        {INSIDER_GUIDE_DATA.titleStart}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight text-slate-900">
                        {INSIDER_GUIDE_DATA.titleHighlight}
                    </h2>
                    <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
                        {INSIDER_GUIDE_DATA.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {INSIDER_GUIDE_DATA.categories.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                            </div>
                            <div className="p-6 flex-grow">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.tag}</span>
                                <h3 className="text-xl font-bold mt-2 mb-3 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    {item.description}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <a className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href={item.link}>
                                    Explore Recommendations
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsiderGuide;
