import React from 'react';
import Link from 'next/link';
import { NAV_LINKS, FOOTER_CONTENT } from '@/data/mockData';

interface NavbarProps {
    readonly children?: React.ReactNode;
    readonly className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
    className = '',
    ...props
}) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-slate-100 ${className}`} {...props}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-2">
                    {/* Logo Match exactly with text styling */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-[1.8rem] font-bold tracking-tight text-slate-900">
                            medellincool.<span className="text-[#49e619]">tours</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Links centered visually with matching font weights */}
                <div className="hidden md:flex items-center gap-8 xl:gap-12">
                    {NAV_LINKS.map(link => (
                        <Link key={link.label} href={link.href} className="text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="#tours" className="bg-[#49e619] hover:bg-[#3db814] text-slate-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-sm">
                        Book Now
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-slate-900 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
