"use client"
import React from 'react';
import Link from 'next/link';

interface TourType {
    id: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    duration: string;
    price: string;
    tags: string[];
    location?: string;
}

interface TourCardProps {
    readonly tour: TourType;
    readonly className?: string;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, className = '' }) => {
    return (
        <div className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/40 hover:border-[#49e619]/50 transition-all duration-300 flex flex-col ${className}`}>

            {/* Image Container */}
            <Link href={`/tours/${tour.id}`} className="relative h-64 overflow-hidden shrink-0 block">
                <div className="w-full h-full relative overflow-hidden">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {tour.tags && tour.tags.length > 0 && (
                        <div className="absolute top-4 right-4 bg-[#49e619] text-slate-900 font-bold px-3 py-1.5 rounded-md text-sm z-10">
                            {tour.tags[0]}
                        </div>
                    )}
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <Link href={`/tours/${tour.id}`}>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight hover:text-[#49e619] transition-colors">{tour.title}</h3>
                </Link>

                <p className="text-slate-500 mb-8 line-clamp-2 font-medium">
                    {tour.description}
                </p>

                {/* Buttons matching the design directly */}
                <div className="mt-auto flex flex-col gap-3">
                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/573193091827?text=${encodeURIComponent(`Hey I am interested on booking ${tour.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#49e619] hover:bg-[#3db814] text-slate-900 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                        {/* Outline Chat Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Book via WhatsApp
                    </a>

                    {/* TripAdvisor Button */}
                    <button className="w-full bg-[#f4f6f8] hover:bg-slate-200 text-slate-700 hover:text-slate-900 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                        {/* Outline Star Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Book on TripAdvisor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
