import Hero from "@/components/Hero";
import WhyTikTok from "@/components/WhyTikTok";
import CtaBanner from "@/components/CtaBanner";
import WhenTikTok from "@/components/WhenTikTok";
import OurProcess from "@/components/OurProcess";
import AboutUs from "@/components/AboutUs";
import BlogArticles from "@/components/BlogArticles";
import ClientLogos from "@/components/ClientLogos";
import TeamSection from "@/components/TeamSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTikTok />
      <CtaBanner />
      <WhenTikTok />
      <OurProcess />
      <AboutUs />
      <BlogArticles />
      <ClientLogos />
      <TeamSection />
      <CtaSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </>
  );
}
