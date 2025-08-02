import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RetirementWizard from "@/components/RetirementWizard";

const Index = () => {
  const [showWizard, setShowWizard] = useState(false);

  if (showWizard) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-8">
          <RetirementWizard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureCards />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal to-teal/80">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Plan Your Retirement?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take our comprehensive assessment and get your personalized retirement roadmap in minutes.
          </p>
          <button
            onClick={() => setShowWizard(true)}
            className="bg-white text-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/95 transition-colors shadow-lg"
          >
            Start Your Calculation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
