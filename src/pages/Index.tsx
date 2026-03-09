import { useState } from "react";
import { Button } from "@/components/ui/button";
import AssessmentWizard from "@/components/AssessmentWizard";
import AssessmentResults from "@/components/AssessmentResults";

type Phase = "landing" | "assessment" | "results";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleComplete = (ans: Record<string, number>) => {
    setAnswers(ans);
    setPhase("results");
  };

  const handleRestart = () => {
    setAnswers({});
    setPhase("landing");
  };

  return (
    <div className="min-h-screen bg-background scanline">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10 bg-background/80 print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
          </div>
          {phase !== "landing" && (
            <Button
              variant="ghost"
              size="sm"
              className="font-mono-display text-xs"
              onClick={handleRestart}
            >
              ← Start Over
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {phase === "landing" && (
          <div className="max-w-2xl mx-auto text-center animate-slide-up">
            <div className="mb-6">
              <span className="text-xs font-mono-display text-primary tracking-[0.3em] uppercase">
                Created by Shreeya Sahai
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-mono-display font-bold mb-6 leading-tight">
              Measure Your{" "}
              <span className="gradient-text">DevOps Maturity</span>
            </h1>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-lg mx-auto">
              Evaluate your organization across 6 key dimensions — CI/CD,
              Infrastructure, Monitoring, Culture, Security, and Testing — and
              get actionable recommendations.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["18 Questions", "6 Categories", "Radar Visualization", "Custom Recommendations"].map(
                (f) => (
                  <span
                    key={f}
                    className="px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono-display text-muted-foreground"
                  >
                    {f}
                  </span>
                )
              )}
            </div>

            <Button
              size="lg"
              onClick={() => setPhase("assessment")}
              className="font-mono-display gradient-primary text-primary-foreground glow-primary text-base px-10"
            >
              Start Assessment →
            </Button>

            <p className="text-xs text-muted-foreground mt-6">
              Takes approximately 5 minutes • No sign-up required
            </p>
          </div>
        )}

        {phase === "assessment" && (
          <AssessmentWizard onComplete={handleComplete} />
        )}

        {phase === "results" && (
          <AssessmentResults answers={answers} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default Index;
