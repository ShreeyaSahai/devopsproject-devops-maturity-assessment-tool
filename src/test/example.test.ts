import { describe, it, expect } from "vitest";

function calculatePercentage(totalScore: number, numQuestions: number) {
  const minScore = numQuestions * 1;
  const maxScore = numQuestions * 4;

  return Math.round(((totalScore - minScore) / (maxScore - minScore)) * 100);
}

describe("DevOps maturity score calculation", () => {

  it("should return 0% when all answers are manual (score 1)", () => {
    const numQuestions = 18;
    const totalScore = 18; // all answers = 1

    const pct = calculatePercentage(totalScore, numQuestions);

    expect(pct).toBe(0);
  });

  it("should return around 33% when all answers are score 2", () => {
    const numQuestions = 18;
    const totalScore = 36; // all answers = 2

    const pct = calculatePercentage(totalScore, numQuestions);

    expect(pct).toBeCloseTo(33, 0);
  });

  it("should return 100% when all answers are score 4", () => {
    const numQuestions = 18;
    const totalScore = 72; // all answers = 4

    const pct = calculatePercentage(totalScore, numQuestions);

    expect(pct).toBe(100);
  });

});