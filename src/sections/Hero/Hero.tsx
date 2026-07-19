import HeroContent from "@/components/hero/HeroContent";
import HeroDashboard from "@/components/hero/HeroDashboard";
import Section from "@/components/layout/Section";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

export default function Hero() {
  return (
    <Section>
  <div className="flex min-h-[90vh] flex-col justify-center">
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <HeroContent />
      </div>

      <div className="lg:col-span-6">
        <HeroDashboard />
      </div>
    </div>

    <ScrollIndicator />
  </div>
</Section>
  );
}