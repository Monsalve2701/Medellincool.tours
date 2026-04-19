import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ToursGrid } from '@/components/ToursGrid';
import { InsiderGuide } from '@/components/InsiderGuide';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { client } from '@/sanity/client';
import { allToursQuery } from '@/sanity/queries';

export default async function Home() {
  const tours = await client.fetch(allToursQuery);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToursGrid tours={tours} />
      <InsiderGuide />
      <CtaSection />
      <Footer />
    </main>
  );
}
