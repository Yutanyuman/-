import Link from "next/link";
import { BossIcon } from "@/components/BossIcon";
import { QuestCard } from "@/components/QuestCard";
import { ResultDetailList } from "@/components/ResultDetailList";
import { resultsByType } from "@/data/results";
import { calculateScores, determineResultType } from "@/lib/scoring";

export default function ResultPage({
  searchParams,
}: {
  searchParams: { answers?: string };
}) {
  const parsedAnswers = (searchParams.answers ?? "")
    .split("-")
    .map((v) => Number.parseInt(v, 10))
    .filter((v) => Number.isFinite(v));

  const scores = calculateScores(parsedAnswers);
  const type = determineResultType(scores);
  const result = resultsByType[type];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-10">
      <QuestCard>
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-gold">診断結果</p>
            <h1 className="mt-2 text-2xl font-bold leading-relaxed md:text-3xl">{result.title}</h1>
          </div>
          <BossIcon icon={result.bossIcon} />
        </div>

        <p className="mb-8 text-sm leading-relaxed text-ivory/95 md:text-base">{result.description}</p>

        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          <ResultDetailList title="よくある原因" items={result.causes} />
          <ResultDetailList title="最初の一手" items={result.firstStep} />
          <ResultDetailList title="おすすめ改善策" items={result.improvements} />
        </div>

        <section className="cta-glow mt-10 rounded-sm border-2 border-gold/70 p-5 text-center md:p-7">
          <p className="mb-2 text-xs tracking-[0.12em] text-gold/90">NEXT QUEST</p>
          <h2 className="mb-3 text-xl font-bold text-gold">{result.ctaHeading}</h2>
          <p className="mb-6 text-sm text-ivory/90 md:text-base">
            診断結果をふまえ、次に実行すべき施策をLPで具体的に確認しましょう。
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/lp" className="quest-btn inline-flex items-center justify-center">
              次のクエストへ進む
            </Link>
            <Link href="/lp" className="quest-btn-sub inline-flex items-center justify-center">
              採用支援サービスを見る
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/diagnosis" className="text-sm text-ivory/80 underline hover:text-gold">
              もう一度診断する
            </Link>
          </div>
        </section>
      </QuestCard>
    </main>
  );
}
