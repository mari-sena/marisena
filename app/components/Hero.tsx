import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[60vh] flex flex-col items-center justify-center text-[#f6f3e7] py-16 px-4 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/olive-bg.png')" }}
    >
      <div className="max-w-2xl w-full flex flex-col items-start text-left gap-4">
        <span
          className="h-2 rounded-full bg-[#f6f3e7] animate-bar-grow
                     [--bar-w:2.75rem] sm:[--bar-w:3.25rem] md:[--bar-w:3.75rem]"
          aria-hidden
        />

        <span className="block text-lg tracking-widest font-medium mb-2 opacity-80">
          Essa sou eu:
        </span>

        <h1 className="font-serif text-5xl md:text-6xl font-extrabold leading-tight mb-2 tracking-tight drop-shadow-lg">
          Mariana <span className="text-[#e6d7b6]">Sena</span>
        </h1>

        <span className="font-script text-2xl text-[#e6d7b6] flex items-center gap-2 mb-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path
              d="M16 2v28M16 30l-6-6m6 6l6-6"
              stroke="#e6d7b6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="flex justify-start gap-2 mt-4">
          <span className="inline-block w-2 h-2 bg-[#e6d7b6] rounded-full animate-pulse"></span>
          <span className="inline-block w-2 h-2 bg-[#e6d7b6] rounded-full animate-pulse delay-150"></span>
          <span className="inline-block w-2 h-2 bg-[#e6d7b6] rounded-full animate-pulse delay-300"></span>
        </div>
      </div>
    </section>
  );
}
