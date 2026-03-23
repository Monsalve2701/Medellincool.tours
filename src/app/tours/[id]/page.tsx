import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOURS_DATA } from '@/data/mockData';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function TourDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const tour = TOURS_DATA.find((t) => t.id === id);

    if (!tour) {
        notFound();
    }

    // Default gallery if none exists (just in case)
    const gallery = tour.gallery || [tour.image];
    // Ensure we have at least 5 images for the grid, otherwise repeat or handle gracefully
    const gridImages = [...gallery, ...Array(5).fill(tour.image)].slice(0, 5);
    const totalPhotos = gallery.length;

    return (
        <main className="min-h-screen bg-white font-sans overflow-x-hidden">
            <Navbar className="!bg-white/80 !backdrop-blur-md" />

            {/* Breadcrumbs Section */}
            <div className="pt-32 pb-6">
                <div className="container mx-auto px-6 max-w-7xl">
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
                        <Link href="/" className="hover:text-slate-900 transition-colors uppercase tracking-wider text-[11px]">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link href="/#tours" className="hover:text-slate-900 transition-colors uppercase tracking-wider text-[11px]">Tours</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-900 uppercase tracking-wider text-[11px] font-bold">{tour.title}</span>
                    </nav>

                    {/* Title & Info Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                {tour.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex items-center text-[#49e619]">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="font-bold text-slate-900 text-lg">{tour.rating.toFixed(1)}</span>
                                    <span className="text-slate-400 font-medium">({tour.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{tour.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Booking Preview */}
                        <div className="hidden lg:flex flex-col items-end">
                            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Starting from</span>
                            <div className="text-4xl font-black text-slate-900">{tour.price}</div>
                        </div>
                    </div>

                    {/* Image Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50">
                        {/* Main Image */}
                        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer border border-slate-100">
                            <img
                                src={gridImages[0]}
                                alt={tour.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Smaller Images */}
                        {gridImages.slice(1, 5).map((img, idx) => (
                            <div key={idx} className="relative overflow-hidden group cursor-pointer border border-slate-100">
                                <img
                                    src={img}
                                    alt={`${tour.title} detail ${idx + 2}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {idx === 3 && totalPhotos > 5 && (
                                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-slate-900/50">
                                        <span className="text-white font-black text-2xl tracking-tight">+{totalPhotos - 5} Photos</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        <div className="lg:col-span-8">
                            <div className="prose prose-slate max-w-none">
                                <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="bg-[#49e619] w-2 h-8 rounded-full"></span>
                                    Experience Overview
                                </h2>
                                <p className="text-slate-600 text-xl leading-[1.8] font-medium mb-10">
                                    {tour.description}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-12">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Duration</span>
                                        <span className="text-slate-900 font-bold text-lg">{tour.duration}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pricing</span>
                                        <span className="text-slate-900 font-bold text-lg">{tour.price} per person</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Language</span>
                                        <span className="text-slate-900 font-bold text-lg">English & Spanish</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-slate-900">What's included</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Professional local guide', 'Private transportation', 'All entrance fees', 'Hydration & Snacks'].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                                                <div className="bg-[#49e619]/20 p-1 rounded-full">
                                                    <svg className="w-4 h-4 text-[#4cb135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Booking Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-28 bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/60 overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#49e619] text-slate-900 font-black px-6 py-2 rounded-bl-2xl text-xs uppercase tracking-widest">
                                    Trusted Local
                                </div>

                                <div className="mb-10">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-5xl font-black text-slate-900">{tour.price}</span>
                                        <span className="text-slate-400 font-bold text-lg uppercase tracking-tight">/ Person</span>
                                    </div>
                                    <p className="text-slate-400 font-semibold text-sm">Includes all taxes and fees</p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <a
                                        href={`https://wa.me/573193091827?text=${encodeURIComponent(`Hey I am interested on booking ${tour.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#49e619] hover:bg-[#3db814] text-slate-900 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#49e619]/20 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Book via WhatsApp
                                    </a>

                                    <button className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-slate-900/10">
                                        Check Availability
                                    </button>
                                </div>

                                <div className="mt-10 flex flex-col gap-6 pt-10 border-t border-slate-100">
                                    {[
                                        { label: 'High Demand', text: 'This tour is selling out fast', icon: '🔥' },
                                        { label: 'Flexible', text: 'Cancel free up to 24h before', icon: '✅' }
                                    ].map((badge) => (
                                        <div key={badge.label} className="flex gap-4">
                                            <div className="text-2xl">{badge.icon}</div>
                                            <div>
                                                <div className="text-slate-900 font-bold text-sm uppercase tracking-wider">{badge.label}</div>
                                                <div className="text-slate-400 font-medium text-sm">{badge.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
