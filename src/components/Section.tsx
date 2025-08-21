type Props = { id?: string; eyebrow?: string; title: string; children: React.ReactNode };

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            <span className="neon-text bg-clip-text">{title}</span>
          </h2>
          <div className="mt-3 gradient-bar rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}
