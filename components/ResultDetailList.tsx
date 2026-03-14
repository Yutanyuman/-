type ResultDetailListProps = {
  title: string;
  items: string[];
};

export function ResultDetailList({ title, items }: ResultDetailListProps) {
  return (
    <section>
      <h3 className="mb-3 text-lg font-bold text-gold">{title}</h3>
      <ul className="space-y-2 text-sm leading-relaxed md:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
