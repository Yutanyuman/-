# 採用クエスト診断サイト

中小企業向けに、採用課題を8問で可視化してLPへ送客する診断サイトです。

## まず提案したディレクトリ構成

```text
app/
  page.tsx                 # トップページ
  diagnosis/page.tsx       # 診断ページ（1問ずつ表示）
  result/page.tsx          # 結果ページ（4タイプ分岐）
  lp/page.tsx              # 送客先の仮LP
components/
  QuestCard.tsx            # 枠線ウィンドウUI
  ProgressBar.tsx          # 診断進捗バー
  BossIcon.tsx             # 結果タイプ用の抽象ボスアイコン
  ResultDetailList.tsx     # 結果の箇条書きUI
data/
  questions.ts             # 設問・選択肢・配点
  results.ts               # タイプ別結果文言
  types.ts                 # データ型定義
lib/
  scoring.ts               # スコア計算と同点優先ロジック
```

## 画面構成

- `/` トップページ
  - ヒーロー、診断概要、この診断でわかること、対象者、診断開始ボタン
  - 下部に「採用支援LPを見る」導線
- `/diagnosis` 診断ページ
  - 8問、4択、前へ/次へ、進捗バー
  - 回答完了で自動集計のため結果ページへ遷移
- `/result` 結果ページ
  - 最高スコアタイプを表示
  - 同点優先: C > B > A > D
  - タイプ説明、よくある原因、最初の一手、おすすめ改善策
  - CTA2種とも `/lp` へ遷移
- `/lp` 仮LPページ

## 実装ポイント

- Next.js + React + TypeScript + Tailwind CSS
- データドリブン構成
  - 設問データと結果データを外部ファイル化
  - スコアロジックを `lib/scoring.ts` に関数化
- JRPG風のUI
  - ダークネイビー/深緑ベース
  - ゴールド/アイボリー装飾
  - 枠線ウィンドウ、クエスト風ボタン、軽いピクセル装飾
- レスポンシブ対応
  - スマホで回答しやすいタップ領域を確保

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## ビルド確認

```bash
npm run build
```

## 今後のデザイン改善余地

- 結果タイプごとの背景モチーフ（紋章や地形パターン）を追加
- 選択肢クリック時のSE風マイクロアニメーション
- トップページにスクロール連動のパララックスを軽く導入
- LP側と共通トーンのアイコンセットを整備
