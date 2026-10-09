import Image from "next/image";
import { 
  MessageSquare, 
  Factory, 
  CheckCircle2, 
  Tractor,
  Play,
  ExternalLink
} from "lucide-react";

export const metadata = {
  title: "CHK Academy | Agricultural Tractors & Machinery Field Guides",
  description: "Watch real operational videos and field demonstrations for 4WD farm tractors, power tillers, maize mills, and root crop processing equipment.",
};

interface VideoTutorial {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  refId: string;
  description: string;
}

const tutorials: VideoTutorial[] = [
  {
    id: "4wd-farm-tractor",
    youtubeId: "Ttgi24OzGZU",
    title: "Commercial 4WD Heavy Farm Tractors & Implements",
    category: "Tractors & Heavy Machinery",
    refId: "CMH-TRAC-01",
    description: "Overview of high-horsepower 4WD diesel tractors working with ploughs, disc harrows, and trailers for commercial land preparation.",
  },
  {
    id: "walking-tractor-tiller",
    youtubeId: "q6WEpnMfJUg",
    title: "Two-Wheel Walking Tractor & Power Tiller",
    category: "Smallholder Tilling",
    refId: "CMH-TRAC-02",
    description: "Compact multi-purpose walking tractors ideal for small acreage, greenhouses, and orchard rotary tilling in Kenya.",
  },
  {
    id: "maize-hammer-mill",
    youtubeId: "-BHmsjvnm_4",
    title: "High-Output Maize Flour Hammer Mill",
    category: "Grain Milling",
    refId: "CMH-MILL-01",
    description: "Demonstration of high-RPM hammer milling for converting whole maize into high-grade flour with controlled particle sizing.",
  },
  {
    id: "potato-washer-grading",
    youtubeId: "LVmmoMCUoF8",
    title: "Potato & Carrot Washing and Size-Grading Line",
    category: "Root Crops",
    refId: "CMH-WASH-01",
    description: "Continuous rotary drum brush washing, soil removal, and roller size-grading line for fresh market packaging.",
  },
];

export default function AcademyPage() {
  const whatsappPhone = "254722382283"; // Replace with your active WhatsApp business number

  const createWhatsAppLink = (tutorial: VideoTutorial) => {
    const message = encodeURIComponent(
      `Hello Nairobi Machinery Hub, I watched the CHK Academy field video for "${tutorial.title}" (Ref ID: ${tutorial.refId}). Please send me pricing, technical specs, and shipping details to Kenya.`
    );
    return `https://wa.me/${whatsappPhone}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl pb-8 border-b border-zinc-800">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
            <Tractor className="h-4 w-4" /> CHK Technical Machinery Gallery
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
            Tractor & Agro-Equipment Field Demos
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Explore verified field performance videos for our imported tractors, land tillers, grain mills, and processing lines. Click any video to watch on YouTube or inquire directly on WhatsApp.
          </p>
        </div>

        {/* Video Tutorial Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((item) => {
            const youtubeUrl = `https://www.youtube.com/watch?v=${item.youtubeId}`;
            const thumbnailUrl = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;

            return (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 transition-all"
              >
                {/* Clickable Image Thumbnail with Play Overlay */}
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video w-full bg-zinc-950 overflow-hidden block"
                >
                  <Image
                    src={thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  
                  {/* Big Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                      <Play className="h-6 w-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Top Ref Badge */}
                  <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800 text-[10px] font-mono font-bold text-emerald-400">
                    {item.refId}
                  </div>
                </a>

                {/* Details & Direct Link Buttons */}
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    {/* Watch on YouTube Link */}
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Watch on YouTube
                    </a>

                    {/* WhatsApp Inquire Trigger */}
                    <a
                      href={createWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm shadow-emerald-950"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center max-w-3xl mx-auto">
          <Factory className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-zinc-100">
            Need Horsepower Specs or Custom Attachment Video Clips?
          </h2>
          <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
            We source 25HP to 220HP 4WD diesel tractors, rotavators, disc ploughs, and harvest machinery. Message our desk directly on WhatsApp for full media packages.
          </p>
          <div className="mt-5">
            <a
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello China Machinery Hub, I would like to request horsepower specs and video demos for 4WD tractors.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Request Machinery Specs via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}