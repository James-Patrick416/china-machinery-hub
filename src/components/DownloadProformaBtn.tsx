"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ProformaPDF } from "./ProformaPDF";
import { Product } from "@/lib/db/products";
import { FileText, Loader2 } from "lucide-react";

interface DownloadBtnProps {
  product: Product;
}

export default function DownloadProformaBtn({ product }: DownloadBtnProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button
        disabled
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 text-xs font-semibold text-zinc-400 opacity-60 cursor-not-allowed"
      >
        <Loader2 className="h-4 w-4 animate-spin" />
        Preparing PDF Engine...
      </button>
    );
  }

  const fileName = `Proforma_${product.slug}_Quote.pdf`;

  return (
    <PDFDownloadLink
      document={<ProformaPDF product={product} />}
      fileName={fileName}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-4 py-3 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-zinc-950"
    >
      {({ loading }) =>
        loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
            Generating Proforma Invoice...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4" />
            Download Instant Proforma Quote (PDF)
          </>
        )
      }
    </PDFDownloadLink>
  );
}