import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ToursGrid } from '@/components/ToursGrid';
import { InsiderGuide } from '@/components/InsiderGuide';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToursGrid />
      <InsiderGuide />
      <CtaSection />
      <Footer />
    </main>
  );
}
