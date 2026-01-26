"use client";

import CheckboxList from "./CheckboxList";

export default function Bento() {
  return (
    <div className="grid grid-cols-3 auto-rows-[120px] gap-2">
      <div className="col-span-2 row-span-1 bg-[#3b3154] flex items-center justify-center not-last-of-type:p-5">
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
      </div>

      <div className="col-span-1 row-span-1 bg-[#3b3154] flex items-center justify-center p-5">
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
      </div>

      <div className="col-span-1 row-span-2 bg-[#3b3154] flex items-center justify-center p-5">
        <p className="text-sm leading-relaxed">
          This is my personal space on the internet. Here, I express myself
          freely, share the things I enjoy, and document ideas, projects, and
          references that resonate with me. It is a place for experimentation,
          reflection, and showcasing what captures my interest over time.
        </p>
      </div>

      <div className="col-span-2 row-span-1 bg-[#3b3154] flex items-center justify-center p-5">
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
      </div>

      <div className="col-span-1 row-span-1 bg-[#3b3154] flex items-center justify-center p-5">
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
      </div>

      <div className="col-span-1 row-span-2 bg-[#3b3154] flex items-center justify-center p-5 text-sm">
        <CheckboxList
          items={[
            { id: "1", label: "Be on a webring" },
            { id: "2", label: "Share a project" },
            { id: "3", label: "Write at least 5 posts" },
            { id: "4", label: "Complete the website" },
          ]}
        />
      </div>

      <div className="col-span-2 row-span-1 bg-[#3b3154] flex items-center justify-center text-center p-5">
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
      </div>
    </div>
  );
}
