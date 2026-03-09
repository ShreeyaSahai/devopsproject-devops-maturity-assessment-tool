import { useMemo } from "react";
import { categories, questions, maturityLevels, recommendations } from "@/data/assessmentQuestions";
import RadarChart from "@/components/RadarChart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AssessmentResultsProps {
  answers: Record<string, number>;
  onRestart: () => void;
}

const AssessmentResults = ({ answers, onRestart }: AssessmentResultsProps) => {
  const categoryScores = useMemo(() => {
    return categories.map((cat) => {
      const catQuestions = questions.filter((q) => q.category === cat.id);
      const totalScore = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 1), 0);
      const maxScore = catQuestions.length * 4;
      const pct = Math.round((totalScore / maxScore) * 100);
      const avgScore = Math.ceil(totalScore / catQuestions.length);
      return { ...cat, totalScore, maxScore, pct, avgScore };
    });
  }, [answers]);

  const overallPct = Math.round(
    categoryScores.reduce((sum, c) => sum + c.pct, 0) / categoryScores.length
  );

  const maturityLevel =
    maturityLevels.find(
      (m) => overallPct >= m.range[0] && overallPct < m.range[1]
    ) || maturityLevels[maturityLevels.length - 1];

  const radarData = categoryScores.map((c) => ({
    category: c.name,
    score: c.totalScore,
    maxScore: c.maxScore,
  }));

  return (
    <div className="max-w-4xl mx-auto animate-slide-up print:max-w-full">

      {/* Overall Score */}
      <div className="text-center mb-12 print:mb-8">
        <p className="text-xs font-mono-display text-muted-foreground mb-2 tracking-widest uppercase">
          Overall Maturity Score
        </p>

        <div className="text-7xl font-mono-display font-bold gradient-text mb-2">
          {overallPct}%
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border font-mono-display text-sm"
          style={{
            borderColor: maturityLevel.color,
            color: maturityLevel.color,
            boxShadow: `0 0 20px ${maturityLevel.color}33`,
          }}
        >
          Level {maturityLevel.level}: {maturityLevel.name}
        </div>

        <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
          {maturityLevel.description}
        </p>
      </div>

      {/* Radar Chart */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 print:break-inside-avoid print:mb-6">
        <h3 className="font-mono-display text-sm text-muted-foreground mb-4 text-center tracking-widest uppercase">
          Category Breakdown
        </h3>

        <RadarChart data={radarData} />
      </div>

      {/* Category Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 print:flex print:flex-col">

        {categoryScores.map((cat) => {
          const level =
            maturityLevels.find(
              (m) => cat.pct >= m.range[0] && cat.pct < m.range[1]
            ) || maturityLevels[maturityLevels.length - 1];

          const rec = recommendations[cat.id]?.[cat.avgScore] || "";

          return (
            <div
              key={cat.id}
              className="bg-card border border-border rounded-xl p-5 transition-colors print:break-inside-avoid print:page-break-inside-avoid print:mb-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  <h4 className="font-mono-display font-semibold text-sm">
                    {cat.name}
                  </h4>
                </div>

                <span
                  className="font-mono-display text-lg font-bold"
                  style={{ color: level.color }}
                >
                  {cat.pct}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${cat.pct}%`,
                    backgroundColor: level.color,
                  }}
                />
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {rec}
              </p>
            </div>
          );
        })}
      </div>

      {/* Maturity Scale */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 print:break-inside-avoid">
        <h3 className="font-mono-display text-sm text-muted-foreground mb-4 tracking-widest uppercase">
          Maturity Scale Reference
        </h3>

        <div className="flex gap-2">
          {maturityLevels.map((m) => (
            <div
              key={m.level}
              className={cn(
                "flex-1 rounded-lg p-3 border transition-all",
                maturityLevel.level === m.level
                  ? "border-primary glow-primary"
                  : "border-border opacity-60"
              )}
            >
              <div
                className="text-xs font-mono-display font-bold mb-1"
                style={{ color: m.color }}
              >
                L{m.level}
              </div>

              <div className="text-xs font-mono-display font-semibold">
                {m.name}
              </div>

              <div className="text-[10px] text-muted-foreground mt-1 hidden md:block">
                {m.range[0]}–{m.range[1]}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 print:hidden">
        <Button variant="outline" onClick={onRestart} className="font-mono-display">
          ↻ Retake Assessment
        </Button>

        <Button
          className="font-mono-display gradient-primary text-primary-foreground glow-primary"
          onClick={() => window.print()}
        >
          📄 Export Report
        </Button>
      </div>

    </div>
  );
};

export default AssessmentResults;
