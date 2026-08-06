import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/254700000000?text=" +
    encodeURIComponent("Hi China Machinery Hub, I'm interested in importing food processing machinery. Please assist me.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-2xl transition-all hover:bg-emerald-500 hover:scale-105"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageSquare className="h-5 w-5" />
      <span className="text-xs font-bold hidden sm:inline-block">WhatsApp Us</span>
    </a>
  );
}