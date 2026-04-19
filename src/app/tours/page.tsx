import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import { TourCard } from '@/components/TourCard';
import { client } from '@/sanity/client';
import { allToursQuery } from '@/sanity/queries';

export default async function ToursPage() {
    const tours = await client.fetch(allToursQuery);

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar className="!bg-white/80 !backdrop-blur-md" />
            
            <div className="flex-1 pt-24">
                {/* Hero Section similar to BlogHero but for Tours */}
                <section className="px-6 py-12 md:py-16 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[350px] flex items-center justify-center text-center p-8 shadow-2xl">
                            <div className="absolute inset-0 z-0 opacity-60">
                                <div 
                                    className="w-full h-full bg-cover bg-center" 
                                    style={{ backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3d/35/4a/caption.jpg?w=1100&h=-1&s=1')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10 max-w-3xl">
                                <span className="inline-block py-1 px-3 rounded-full bg-[#49e619]/20 text-[#49e619] text-xs font-bold uppercase tracking-widest mb-4">
                                    Our Experiences
                                </span>
                                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                                    Explore all our Tours
                                </h1>
                                <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed mb-8">
                                    Discover carefully curated journeys designed to connect you deeply with the authentic magic of Medellín and its beautiful surroundings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Section matching BlogGrid layout */}
                <section className="px-6 py-8 pb-16 lg:pb-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.map((tour: any) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </div>
                </section>
                
                <Newsletter />
            </div>

            <Footer />
        </main>
    );
}
