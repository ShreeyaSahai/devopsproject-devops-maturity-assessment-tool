import { useState } from "react";
import { questions, categories } from "@/data/assessmentQuestions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AssessmentWizardProps {
  onComplete: (answers: Record<string, number>) => void;
}

const AssessmentWizard = ({ onComplete }: AssessmentWizardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const question = questions[currentIndex];
  const category = categories.find((c) => c.id === question.category);
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const selectedScore = answers[question.id];

  const handleSelect = (score: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: score }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  return (
    <div className="max-w-2xl mx-auto animate-slide-up">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono-display text-muted-foreground">
            QUESTION {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-xs font-mono-display text-primary">
            {category?.icon} {category?.name}
          </span>
        </div>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-mono-display font-semibold mb-2 leading-relaxed">
          {question.text}
        </h2>
        <p className="text-sm text-muted-foreground">{category?.description}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option) => (
          <button
            key={option.score}
            onClick={() => handleSelect(option.score)}
            className={cn(
              "w-full text-left px-5 py-4 rounded-lg border transition-all duration-200",
              "hover:border-primary/50 hover:glow-primary",
              selectedScore === option.score
                ? "border-primary bg-primary/10 glow-primary"
                : "border-border bg-card"
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono-display font-bold border transition-colors",
                  selectedScore === option.score
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                )}
              >
                {option.score}
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="font-mono-display"
        >
          ← Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedScore === undefined}
          className="font-mono-display gradient-primary text-primary-foreground glow-primary"
        >
          {currentIndex < questions.length - 1 ? "Next →" : "View Results"}
        </Button>
      </div>
    </div>
  );
};

export default AssessmentWizard;
