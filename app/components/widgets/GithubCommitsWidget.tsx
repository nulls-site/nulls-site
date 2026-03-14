/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

type Props = {
  user: string;
  repo: string;
  branch?: string;
  last?: number;
  limitMessageTo?: number;
  maxBodyLength?: number;
};

export default function GitHubCommitsWidget({
  user,
  repo,
  branch = "main",
  last = 1,
  limitMessageTo = 100,
}: Props) {
  const [commits, setCommits] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${user}/${repo}/commits?sha=${branch}&per_page=${last}`,
        );
        if (!res.ok) throw new Error("Failed to fetch commits");
        const data = await res.json();
        setCommits(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      }
    }

    fetchCommits();
  }, [user, repo, branch, last]);

  if (error) {
    return (
      <div className="rounded-md border border-neutral-300 bg-neutral-50 p-3 text-xs text-neutral-600">
        Unable to load commits
      </div>
    );
  }

  return (
    <>
      {commits.map((commit) => {
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
              className="
            block
            text-sm
            font-medium
            hover:text-green-600
            transition-colors
          "
            >
              {shortTitle}
            </a>
          </div>
        );
      })}
    </>
  );
}
