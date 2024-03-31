import { Sparkle, SwatchBook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4">
      <div className="after:dark:via-[rgb(186 230 253)] relative z-[-1] mt-4 flex flex-col place-items-center text-balance before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] md:mt-12 before:lg:h-[360px] before:dark:opacity-10 after:dark:from-sky-900 after:dark:opacity-40">
        {/* <!-- Tampilan untuk mobile --> */}
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
        {/* <!-- Tampilan untuk md ke atas --> */}
        <div className="hidden place-items-center md:flex">
          <span className="-left-20 flex items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm hover:bg-gradient-to-r hover:from-white/55 hover:to-sky-200/65 md:absolute lg:text-sm">
            <Sparkle className="size-5 stroke-sky-700" />
            <p className="text-slate-950">Berkualitas</p>
          </span>
          <h2 className="text-balance text-3xl font-semibold text-slate-950 md:text-center md:text-4xl lg:text-5xl">
            Bikin Acaramu lebih <br /> berkesan dan terkenang
          </h2>
          <span className="-right-[120px] top-4 flex items-center space-x-2 rounded-full bg-white/45 px-3 py-2 text-xs ring-1 ring-sky-100 backdrop-blur-sm md:absolute lg:text-sm ">
            <SwatchBook className="size-5 stroke-sky-700" />
            <p className="text-slate-950">Kustom Tanpa Batas</p>
          </span>
        </div>
      </div>

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
