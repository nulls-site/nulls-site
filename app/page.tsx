import Bento from "./components/Bento";
import NowPlaying from "./components/widgets/NowPlaying";
import UnderConstruction from "./components/UnderConstruction";

export default function Home() {
  return (
    <div className="min-h-screen px-20 py-10 flex flex-col">
      <header className="bg-[#3b3154] h-50 mb-5"></header>

      <div className="flex gap-5 flex-1">
        <aside className="flex flex-col gap-2 w-fit">
          <nav className=" bg-[#3b3154] p-5 min-w-60 min-h-60">
            <ul className="space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Recs</a>
              </li>
              <li>
                <a href="#">Guests</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Stuff</a>
              </li>
            </ul>
          </nav>

          <div className="bg-[#3b3154] p-10 max-w-60 max-h-60 flex">
            
          </div>

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
