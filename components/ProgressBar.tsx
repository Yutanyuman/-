type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const width = Math.round((current / total) * 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm text-ivory/80">
        <span>進捗</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-sm border border-gold bg-night/80">
        <div
          className="h-full bg-gradient-to-r from-gold to-ivory transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
