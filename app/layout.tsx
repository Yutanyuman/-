import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "採用クエスト診断",
  description: "中小企業向け 採用課題診断サイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
