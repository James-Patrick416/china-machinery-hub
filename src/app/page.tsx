import Hero from "@/components/home/hero";
import FeatureCards from "@/components/home/feature-cards";
import FeaturedProducts from "@/components/home/featured-products";
import AboutSection from "@/components/home/about-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import PartnersSection from "@/components/home/partners-section";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureCards />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}