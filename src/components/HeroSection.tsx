import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Shield, Target } from "lucide-react";
import heroImage from "@/assets/hero-retirement.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-teal/5">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                How much do you need to{" "}
                <span className="text-teal">retire</span>?
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get personalized retirement projections based on your EPF, salary, and investment goals. Plan with confidence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal hover:bg-teal/90 text-lg px-8 py-6">
                <Calculator className="mr-2 h-5 w-5" />
                Start Planning Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="p-3 bg-teal/10 rounded-full w-fit mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-semibold text-sm">Smart Projections</h3>
                <p className="text-xs text-muted-foreground">EPF + investments analysis</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-gold/10 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-semibold text-sm">Risk Assessment</h3>
                <p className="text-xs text-muted-foreground">Personalized strategies</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-success/10 rounded-full w-fit mx-auto mb-3">
                  <Target className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold text-sm">Goal Tracking</h3>
                <p className="text-xs text-muted-foreground">Monitor your progress</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Retirement planning visualization" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -left-4 top-8 bg-card rounded-lg shadow-lg p-4 border">
              <div className="text-sm font-medium text-teal">Current EPF</div>
              <div className="text-2xl font-bold">RM 250K</div>
            </div>
            <div className="absolute -right-4 bottom-8 bg-card rounded-lg shadow-lg p-4 border">
              <div className="text-sm font-medium text-gold">Target Goal</div>
              <div className="text-2xl font-bold">RM 1.2M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;