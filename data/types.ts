export type DiagnosticType = "A" | "B" | "C" | "D";

export type OptionScore = Partial<Record<DiagnosticType, number>>;

export type QuestionOption = {
  id: string;
  text: string;
  score: OptionScore;
};

export type Question = {
  id: number;
  prompt: string;
  options: QuestionOption[];
};

export type ResultContent = {
  type: DiagnosticType;
  title: string;
  description: string;
  causes: string[];
  firstStep: string[];
  improvements: string[];
  ctaHeading: string;
  bossIcon: string;
};
