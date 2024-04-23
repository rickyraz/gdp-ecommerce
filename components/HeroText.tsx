"use client";
import { Sparkle, SwatchBook } from "lucide-react";
import React from "react";

export function HeroMobile() {
  return (
    <div className="flex flex-col space-y-4 md:hidden">
      <h2 className="text-balance text-3xl font-semibold text-slate-950 md:text-center md:text-4xl lg:text-5xl">
        Bikin Acaramu lebih <br /> berkesan dan terkenang
      </h2>
      <div className="mt-2 flex space-x-2">
        <span className="-left-20 flex items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm hover:bg-gradient-to-r hover:from-white/55 hover:to-sky-200/65">
          <Sparkle className="size-5 stroke-sky-700" />
          <p>Berkualitas</p>
        </span>
        <span className="-right-[120px] top-4 flex items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm">
          <SwatchBook className="size-5 stroke-sky-700" />
          <p>Kustom Tanpa Batas</p>
        </span>
      </div>
    </div>
  );
}

export function HeroPC() {
  return (
    <div className="hidden place-items-center md:flex">
      <h2 className="text-balance text-3xl font-semibold text-slate-950 md:text-center md:text-4xl lg:text-5xl">
        Bikin Acaramu lebih <br /> berkesan dan terkenang
      </h2>
    </div>
  );
}
