import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { title: "EPF Balance", description: "Current Employee Provident Fund balance" },
  { title: "Monthly Salary", description: "Your gross monthly income" },
  { title: "Other Investments", description: "Additional savings and investments" },
  { title: "Monthly Commitments", description: "Loans and monthly obligations" },
  { title: "Retirement Goals", description: "When and how long you plan to live" },
  { title: "Risk Profile", description: "Your investment risk tolerance" }
];

interface WizardData {
  epfBalance: string;
  monthlySalary: string;
  salaryGrowth: number[];
  otherInvestments: string;
  monthlyCommitments: string;
  retirementAge: number[];
  lifespan: number[];
  riskProfile: string;
}

const RetirementWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<WizardData>({
    epfBalance: '',
    monthlySalary: '',
    salaryGrowth: [3],
    otherInvestments: '',
    monthlyCommitments: '',
    retirementAge: [60],
    lifespan: [85],
    riskProfile: ''
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="epf">EPF Balance (RM)</Label>
            <Input
              id="epf"
              type="number"
              placeholder="e.g., 150000"
              value={data.epfBalance}
              onChange={(e) => setData({...data, epfBalance: e.target.value})}
              className="text-lg"
            />
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="salary">Monthly Gross Salary (RM)</Label>
              <Input
                id="salary"
                type="number"
                placeholder="e.g., 8000"
                value={data.monthlySalary}
                onChange={(e) => setData({...data, monthlySalary: e.target.value})}
                className="text-lg"
              />
            </div>
            <div className="space-y-4">
              <Label>Expected Annual Salary Growth: {data.salaryGrowth[0]}%</Label>
              <Slider
                value={data.salaryGrowth}
                onValueChange={(value) => setData({...data, salaryGrowth: value})}
                max={10}
                min={0}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0%</span>
                <span>10%</span>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <Label htmlFor="investments">Other Investments (RM)</Label>
            <Input
              id="investments"
              type="number"
              placeholder="Cash, unit trust, shares, crypto..."
              value={data.otherInvestments}
              onChange={(e) => setData({...data, otherInvestments: e.target.value})}
              className="text-lg"
            />
            <p className="text-sm text-muted-foreground">
              Include savings accounts, unit trusts, shares, cryptocurrency, and other investments
            </p>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="commitments">Monthly Commitments (RM)</Label>
            <Input
              id="commitments"
              type="number"
              placeholder="e.g., 2500"
              value={data.monthlyCommitments}
              onChange={(e) => setData({...data, monthlyCommitments: e.target.value})}
              className="text-lg"
            />
            <p className="text-sm text-muted-foreground">
              Total monthly loan payments (house, car, personal loans)
            </p>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Retirement Age: {data.retirementAge[0]} years</Label>
              <Slider
                value={data.retirementAge}
                onValueChange={(value) => setData({...data, retirementAge: value})}
                max={70}
                min={50}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>50</span>
                <span>70</span>
              </div>
            </div>
            <div className="space-y-4">
              <Label>Expected Lifespan: {data.lifespan[0]} years</Label>
              <Slider
                value={data.lifespan}
                onValueChange={(value) => setData({...data, lifespan: value})}
                max={100}
                min={70}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>70</span>
                <span>100</span>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-4">
            <Label>Investment Risk Profile</Label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'low', label: 'Conservative', desc: 'Lower risk, steady returns (3-5% annually)' },
                { value: 'medium', label: 'Balanced', desc: 'Moderate risk, balanced growth (5-7% annually)' },
                { value: 'high', label: 'Aggressive', desc: 'Higher risk, potential for higher returns (7-10% annually)' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setData({...data, riskProfile: option.value})}
                  className={`p-4 text-left rounded-lg border-2 transition-colors ${
                    data.riskProfile === option.value
                      ? 'border-teal bg-teal/10'
                      : 'border-border hover:border-muted-foreground'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl">Retirement Planning Wizard</CardTitle>
              <CardDescription>Step {currentStep + 1} of {steps.length}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-teal">{Math.round(progress)}% Complete</div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent className="py-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
          </div>
          
          {renderStepContent()}
        </CardContent>
        
        <div className="flex justify-between p-6 bg-muted/30 rounded-b-lg">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="bg-teal hover:bg-teal/90"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RetirementWizard;