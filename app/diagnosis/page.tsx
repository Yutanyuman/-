"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestCard } from "@/components/QuestCard";
import { questions } from "@/data/questions";

export default function DiagnosisPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));

  const question = questions[current];
  const selected = answers[current];

  const canNext = selected !== -1;
  const isLast = current === questions.length - 1;
  const progress = useMemo(() => current + 1, [current]);

  const updateAnswer = (idx: number) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const goNext = () => {
    if (!canNext) return;
    if (isLast) {
      router.push(`/result?answers=${answers.join("-")}`);
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 md:py-12">
      <div className="mb-3 text-sm text-ivory/80 md:mb-4">
        <Link href="/" className="hover:text-gold">
          ← トップへ戻る
        </Link>
      </div>
      <QuestCard>
        <ProgressBar current={progress} total={questions.length} />

        <div className="mt-6 md:mt-8">
          <p className="mb-3 text-sm text-gold md:mb-5">Q{question.id}</p>
          <h1 className="mb-5 text-lg font-bold leading-relaxed md:mb-6 md:text-2xl">{question.prompt}</h1>

          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={opt.id}
                onClick={() => updateAnswer(idx)}
                className={`w-full rounded-sm border-2 p-4 text-left text-sm leading-relaxed transition md:text-base ${
                  selected === idx
                    ? "border-gold bg-forest/80"
                    : "border-ivory/50 bg-night/60 hover:border-gold"
                }`}
              >
                {idx + 1}. {opt.text}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-between gap-3 md:mt-8">
            <button
              onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
              disabled={current === 0}
              className="quest-btn-sub inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              前へ
            </button>
            <button
              onClick={goNext}
              disabled={!canNext}
              className="quest-btn inline-flex items-center justify-center disabled:opacity-50"
            >
              {isLast ? "結果を見る" : "次へ"}
            </button>
          </div>
        </div>
      </QuestCard>
    </main>
  );
}
