import { Hero } from "@/components/sections/Hero";
import { GainSection } from "@/components/sections/GainSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <GainSection />
      <ProgramsSection />
      <ReviewSection />
      <BookingSection />
      <FAQSection />
    </>
  );
}
