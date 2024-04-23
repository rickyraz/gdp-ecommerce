"use client";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Sparkle, SwatchBook } from "lucide-react";

export function DotsBerkualitasPC() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  // Bind it to a component
  return (
    <animated.span
      {...bind()}
      style={{ x, y }}
      className="left-[289px] top-[150px] flex cursor-grab items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm hover:cursor-grab  md:absolute lg:text-sm"
    >
      <Sparkle className="size-5 stroke-sky-700" />
      <p className="text-slate-950">Berkualitas</p>
    </animated.span>
  );
}
export function DotsKustomPC() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  // Bind it to a component
  return (
    <animated.span
      {...bind()}
      style={{ x, y }}
      className="right-[289px] top-[145px] flex cursor-grab items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm hover:cursor-grab  md:absolute lg:text-sm"
    >
      <SwatchBook className="size-5 stroke-sky-700" />
      <p className="text-slate-950">Kustom Tanpa Batas</p>
    </animated.span>
  );
}
