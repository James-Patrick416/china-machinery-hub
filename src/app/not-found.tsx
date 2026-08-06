import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-emerald-500 mb-6 shadow-xl">
        <HardHat className="h-8 w-8" />
      </div>

      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
        404 Error
      </span>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-base text-zinc-400">
        The page or machinery listing you are looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          View Machinery Catalog
        </Link>
      </div>
    </div>
  );
}