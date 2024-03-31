import React from "react";
import { Menu } from "lucide-react";

function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
      {/* <button className='bg-blue-50 py-1 px-3 rounded-full'>
          <Menu className='size-6'/>
        </button> */}
      <div className="flex">
        <button className="rounded-full bg-sky-50 px-4 py-1">
          {/* I assume <Menu className='size-6'/> is an icon component */}
          <Menu className="size-6 stroke-slate-950" />
        </button>
        <div className="w-24"></div>{" "}
        {/* Adjust this width to match the button width */}
      </div>
      <h1 className="flex-grow text-right text-lg font-bold md:text-center">
        Gorda Digital Printing
      </h1>

      <button className=" hidden items-center rounded-full bg-sky-100 pl-4 font-semibold md:inline-flex">
        <span className="text-sm">Hubungi Kami</span>
        <div className="ml-2 size-8 rounded-full bg-sky-800"></div>
      </button>
    </nav>
  );
}

export default Header;
