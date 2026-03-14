import { questions } from "@/data/questions";
import { DiagnosticType } from "@/data/types";

const typePriority: DiagnosticType[] = ["C", "B", "A", "D"];

export const initialScores = (): Record<DiagnosticType, number> => ({
  A: 0,
  B: 0,
  C: 0,
  D: 0,
});

export const calculateScores = (answers: number[]): Record<DiagnosticType, number> => {
  return answers.reduce((acc, answerIndex, questionIndex) => {
    const option = questions[questionIndex]?.options[answerIndex];
    if (!option) return acc;

    Object.entries(option.score).forEach(([type, points]) => {
      acc[type as DiagnosticType] += points ?? 0;
    });

    return acc;
  }, initialScores());
};

export const determineResultType = (scores: Record<DiagnosticType, number>): DiagnosticType => {
  return [...typePriority].sort((a, b) => {
    const diff = scores[b] - scores[a];
    if (diff !== 0) return diff;
    return typePriority.indexOf(a) - typePriority.indexOf(b);
  })[0];
};
