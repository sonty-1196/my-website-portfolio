type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export function ProjectCard({ title, description, tech, link, repo }: Project) {
  return (
    <div className="card-gradient transition hover:scale-[1.01]">
      <div className="card-surface p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-foreground/80">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {link ? (
            <a className="btn btn-primary" href={link} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
          {repo ? (
            <a className="btn btn-ghost" href={repo} target="_blank" rel="noreferrer">
              Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
