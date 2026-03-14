import { useEffect, useState, useCallback, useMemo, useRef } from "react";

interface Track {
  name: string;
  url: string;
  artist: { "#text": string };
  image: Array<{ size: string; "#text": string }>;
  "@attr"?: { nowplaying: string };
}

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const prevTrackKey = useRef<string | null>(null);

  const USERNAME = "Colossusnd";
  const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

  const fetchNowPlaying = useCallback(async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) return;
      const data = await response.json();
      const currentTrack = data.track as Track | undefined;
      const isNowPlaying = currentTrack?.["@attr"]?.nowplaying === "true";

      setTrack((prev) => {
        if (isNowPlaying && currentTrack) return currentTrack;
        return prev;
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, [fetchNowPlaying]);

  const trackKey = useMemo(() => {
    if (!track) return null;
    return `${track.name}-${track.artist["#text"]}`;
  }, [track]);

  useEffect(() => {
    if (!trackKey) return;
    if (prevTrackKey.current && prevTrackKey.current !== trackKey) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 1200);
      return () => clearTimeout(timeout);
    }
    prevTrackKey.current = trackKey;
  }, [trackKey]);

  if (loading || !track || !trackKey) return null;

  const coverImage =
    track.image.at(-1)?.["#text"] ||
    track.image.find((img) => img.size === "extralarge")?.["#text"] ||
    "";

  return (
    <div>
      <div className={`now-playing-glow ${animate ? "animate-once" : ""}`}>
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block now-playing-inner text-sm"
        >
          {coverImage && (
            <div className="w-50 aspect-square overflow-hidden mb-2">
              <img
                src={coverImage}
                alt={`${track.name} capa`}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
          <strong className="block leading-tight truncate max-w-45">{track.name}</strong>
          <span className="block opacity-60 truncate">{track.artist["#text"]}</span>
        </a>
      </div>
    </div>
  );
}