type Props = { eyebrow: string; title: string; text?: string };

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-accent">{children}</p>
  );
}

export default function SectionHead({ eyebrow, title, text }: Props) {
  return (
    <header className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </header>
  );
}
