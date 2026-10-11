type Props = { index: string; children: React.ReactNode };

// Libellé de section façon « SERVICES ——— 01 ».
export default function SectionLabel({ index, children }: Props) {
  return (
    <div className="mb-12 flex items-center gap-4 sm:mb-16">
      <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-fg">{children}</p>
      <div className="h-px flex-1 bg-line" />
      <span className="font-mono text-[0.7rem] text-accent">{index}</span>
    </div>
  );
}
