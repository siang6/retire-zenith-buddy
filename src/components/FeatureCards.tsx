import { Card, CardContent } from "@/components/ui/card";
import { Calculator, PieChart, TrendingUp, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "EPF Integration",
    description: "Factor in your Employee Provident Fund balance and projections",
    color: "teal"
  },
  {
    icon: PieChart,
    title: "Investment Portfolio",
    description: "Include unit trusts, shares, crypto, and other investments",
    color: "gold"
  },
  {
    icon: TrendingUp,
    title: "Salary Growth",
    description: "Account for career progression and salary increases",
    color: "success"
  },
  {
    icon: Users,
    title: "Life Goals",
    description: "Customize retirement age and lifestyle expectations",
    color: "teal"
  },
  {
    icon: Shield,
    title: "Risk Profiling",
    description: "Conservative to aggressive investment strategies",
    color: "gold"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get probability analysis and monthly savings targets",
    color: "success"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Retirement Planning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our calculator considers all aspects of your financial life to give you accurate retirement projections
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = {
              teal: "text-teal bg-teal/10",
              gold: "text-gold bg-gold/10", 
              success: "text-success bg-success/10"
            }[feature.color];
            
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-full w-fit mb-4 ${colorClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;