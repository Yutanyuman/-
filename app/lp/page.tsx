import Link from "next/link";
import { QuestCard } from "@/components/QuestCard";

export default function LpPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <QuestCard title="採用支援サービス（仮LP）">
        <p className="leading-relaxed text-ivory/95">
          こちらは送客先の仮ページです。実運用時には本番LPへ差し替えてください。
          診断結果に応じた訴求や事例、料金プラン、問い合わせ導線を設置すると成果が安定します。
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/diagnosis" className="quest-btn">
            診断に戻る
          </Link>
          <Link href="/" className="quest-btn-sub">
            トップへ
          </Link>
        </div>
      </QuestCard>
    </main>
  );
}
