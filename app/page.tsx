import Link from "next/link";
import Bento from "./components/Bento";
import NowPlaying from "./components/widgets/NowPlaying";

export default function Home() {
  return (
    <div className="min-h-screen px-20 py-10 flex flex-col">
      <header className="bg-[#3b3154] h-50 mb-5 p-5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-red-700 animate-pulse">
            UNDER CONSTRUCTION
          </h2>
          <p className=" text-sm md:text-base text-neutral-400 leading-relaxed">
            This section is not ready yet.
            <br />
            Something is forming in the dark.
          </p>
          <div className="text-xs text-red-900 tracking-wider uppercase">
            Proceed with caution
          </div>
        </div>
      </header>

      <div className="flex gap-5 flex-1">
        <aside className="flex flex-col gap-2 w-fit">
          <nav className=" bg-[#3b3154] p-5 min-w-60 min-h-60">
            <ul className="space-y-2">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Recs</Link>
              </li>
              <li>
                <Link href="#">Guests</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Stuff</Link>
              </li>
            </ul>
          </nav>
          <div className=" flex items-center justify-center">
            <NowPlaying />
          </div>
        </aside>
        <div className="flex flex-col gap-5 flex-1">
          <main className="flex-1">
            <Bento />
          </main>
          <div className="bg-[#3b3154] p-10 gap-2 flex items-center justify-center">
            Stamps
          </div>
        </div>
      </div>
    </div>
  );
}
