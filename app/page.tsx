import Link from "next/link";
import { QuestCard } from "@/components/QuestCard";

const insights = [
  "自社の採用課題のタイプ",
  "つまずきやすいポイント",
  "最初に見直すべき打ち手",
];

const targets = [
  "求人を出しても応募が少ない",
  "採用ページに自信がない",
  "何を改善すればいいか整理したい",
  "採用を強化したい中小企業の方",
];

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-8 md:py-14">
      <div className="pixel-stars pointer-events-none absolute inset-0" aria-hidden />

      <section className="quest-window hero-mist relative mb-6 overflow-hidden p-5 md:mb-8 md:p-10">
        <div className="hero-path pointer-events-none absolute inset-y-0 left-1/2 w-36 -translate-x-1/2" aria-hidden />
        <div className="absolute right-4 top-4 text-[11px] tracking-[0.16em] text-gold/80">QUEST ENTRY</div>

        <p className="mb-3 inline-block border border-gold/60 bg-night/60 px-3 py-1 text-xs text-ivory/90">
          採用の現在地を見える化する、最初のクエスト
        </p>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-ivory md:text-5xl">
          採用の悩み、どこでつまずいてる？
          <br />
          3分でわかる 採用クエスト診断
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ivory/90 md:text-lg">
          中小企業の採用で起こりがちな課題を、ゲーム感覚で整理できる診断です。
          応募が来ない理由、伝わらない原因、改善のヒントが見えてきます。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
          <Link href="/diagnosis" className="quest-btn inline-flex items-center justify-center">
            診断をはじめる
          </Link>
        </div>
      </section>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <QuestCard title="この診断でわかること">
          <ul className="space-y-2 text-sm md:text-base">
            {insights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </QuestCard>

        <QuestCard title="対象者">
          <ul className="space-y-2 text-sm md:text-base">
            {targets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </QuestCard>
      </div>

      <QuestCard className="mt-6 text-center md:mt-8" title="サービス詳細を先に確認する">
        <p className="mb-4 text-sm text-ivory/85 md:text-base">
          診断前に採用支援サービスの内容を確認したい方はこちら。
        </p>
        <Link href="/lp" className="quest-btn-sub inline-flex items-center justify-center">
          採用支援LPを見る
        </Link>
      </QuestCard>
    </main>
  );
}
