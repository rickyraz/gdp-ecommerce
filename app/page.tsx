import { Sparkle, SwatchBook } from "lucide-react";
import Image from "next/image";
import { DotsBerkualitasPC, DotsKustomPC } from "@/components/Dots";
import { HeroMobile, HeroPC } from "@/components/HeroText";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4">
      <div className="after:dark:via-[rgb(186 230 253)] relative z-[-1] mt-4 flex flex-col place-items-center text-balance before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] md:mt-12 before:lg:h-[360px] before:dark:opacity-10 after:dark:from-sky-900 after:dark:opacity-40">
        <HeroMobile />
        <HeroPC />
      </div>
      <DotsBerkualitasPC />
      <DotsKustomPC />

      <div className="mt-8 max-h-80 w-full rounded-xl bg-sky-50/45 backdrop-blur  md:p-4">
        <div className="grid grid-flow-row grid-rows-1 gap-4 md:grid-cols-3  lg:grid-cols-5">
          <div className=" rounded-lg bg-sky-900/15 p-4 lg:col-span-2">
            <div className="mb-4 h-32 bg-gray-200"></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Desain Unik dan Personalisasi Tinggi
            </h3>
            <p className="text-sm text-sky-900/75">
              Kami menyediakan layanan desain kustom untuk menciptakan produk
              unik sesuai kebutuhan acara Anda, dari gantungan kunci hingga
              tumbler, semuanya dibuat secara personal dan istimewa.
            </p>
          </div>
          <div className=" rounded-lg bg-sky-900/15 p-4 lg:col-span-2">
            <div className="mb-4 h-32 bg-gray-200"></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Kualitas Terjamin dan Pengiriman Cepat
            </h3>
            <p className="text-sm text-sky-900/75">
              Kami berkomitmen pada kualitas tinggi dan pengiriman tepat waktu
              untuk setiap produk kustom, memastikan hasil akhir sempurna dan
              kedatangan sesuai jadwal acara Anda.
            </p>
          </div>
          <div className=" rounded-lg bg-sky-900/15 p-4">
            <div className="mb-4 h-32 bg-gray-200"></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Harga Kompetitif
            </h3>
            <p className="text-sm text-sky-900/75">
              Dapatkan produk berkualitas dengan harga kompetitif dan paket
              kustomisasi fleksibel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
