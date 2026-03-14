type Props = {
  commits: any[]; 
  limitMessageTo?: number; 
};

export default function GitHubCommitsWidget({ 
  commits, 
  limitMessageTo = 100 
}: Props) {
  
  if (!commits?.length) {
    return (
      <div className="text-xs text-neutral-400">
        Sem commits recentes
      </div>
    );
  }

  return (
    <>
      {commits.map((commit: any) => {
        const message = commit?.commit?.message ?? "";
        const [title] = message.split("\n");
        const shortTitle =
          title.length > limitMessageTo
            ? title.slice(0, limitMessageTo) + "…"
            : title;

        return (
          <div key={commit.sha}>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-mono tracking-wide text-neutral-200">
                CHANGE LOG
              </h3>
              <span className="text-[10px] text-neutral-500 font-mono">
                {new Date(commit.commit.author.date).toLocaleDateString()}
              </span>
            </div>
            <a
              href={commit.html_url}
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-medium hover:text-green-600 transition-colors"
            >
              {shortTitle}
            </a>
          </div>
        );
      })}
    </>
  );
}