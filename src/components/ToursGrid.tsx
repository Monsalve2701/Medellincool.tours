import React from 'react';
import { TourCard } from './TourCard';

interface TourType {
    id: string;
    title: string;
    slug?: string;
    description: string;
    image: any;
    rating: number;
    reviews: number;
    duration: string;
    price: string;
    tags: string[];
    location?: string;
}

interface ToursGridProps {
    readonly tours: TourType[];
    readonly className?: string;
}

export const ToursGrid: React.FC<ToursGridProps> = ({ tours, className = '' }) => {
    return (
        <section id="tours" className={`py-20 lg:py-32 bg-white ${className}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                            Featured <span className="text-[#49e619]">Experiences</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Carefully designed journeys that go beyond the usual tourist path, connecting you with the authentic soul of Medellín.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button className="p-3 border-2 border-[#49e619]/20 rounded-full hover:bg-[#49e619]/10 transition-colors text-slate-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="p-3 bg-[#49e619] rounded-full hover:bg-[#3db814] text-slate-900 transition-colors shadow-lg shadow-[#49e619]/25 hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToursGrid;
