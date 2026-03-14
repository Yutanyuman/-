type BossIconProps = {
  icon: string;
};

export function BossIcon({ icon }: BossIconProps) {
  return (
    <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-sm border-2 border-gold bg-night text-5xl text-gold shadow-pixel md:h-28 md:w-28 md:text-6xl">
      <span className="absolute inset-2 border border-ivory/35" />
      <span className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent" />
      <span className="relative animate-flicker">{icon}</span>
      <span className="absolute -bottom-2 h-[2px] w-10 bg-gold/70" />
    </div>
  );
}
