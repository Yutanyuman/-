import { ReactNode } from "react";

type QuestCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function QuestCard({ title, children, className = "" }: QuestCardProps) {
  return (
    <section className={`quest-window p-6 md:p-8 ${className}`}>
      {title ? <h2 className="mb-4 text-xl font-bold text-gold">{title}</h2> : null}
      {children}
    </section>
  );
}
