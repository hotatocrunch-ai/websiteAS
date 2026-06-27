import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy pt-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />

      <div className="container-page relative text-center">
        <p className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-[1.7] text-slate-300">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="rounded-full bg-gold-gradient px-7 text-navy shadow-gold-glow"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:border-gold/40 hover:bg-white/10 hover:text-gold-300"
          >
            <Link href="/#produk">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Lihat Produk
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
