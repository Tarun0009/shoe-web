import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Categories } from "@/components/Categories";
import { FeaturedDrop } from "@/components/FeaturedDrop";
import { Collection } from "@/components/Collection";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-dvh overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedDrop />
      <Collection />
      <Story />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
