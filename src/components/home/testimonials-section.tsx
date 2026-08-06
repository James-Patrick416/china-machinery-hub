import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Migori Grain Processors SACCO",
    location: "Migori, Kenya",
    equipment: "15HP Posho Mill & Packaging Line",
    result: "+40% Monthly Net Margin",
    quote:
      "We used to sell raw maize at low harvest prices. After importing the combined posho mill from China Machinery Hub, our group now processes and packages Grade-1 flour directly for local schools and retail shops.",
  },
  {
    name: "Rift Valley Farmers Co-op",
    location: "Eldoret, Kenya",
    equipment: "5-Ton Recirculating Batch Grain Dryer",
    result: "Aflatoxin Loss Reduced to 0%",
    quote:
      "Heavy rains during harvest used to rot 25% of our maize crop. The batch dryer saved our 2025 harvest season. Delivery took 42 days right to our sorting depot.",
  },
  {
    name: "Lake Basin Oil Pressers",
    location: "Kisumu, Kenya",
    equipment: "Screw Oil Press & Vacuum Filter",
    result: "Produces 180 Liters Sunflower Oil/Day",
    quote:
      "The Swahili video training modules in the Chik Academy made it easy for our local operators to learn daily lubrication and maintenance without needing to hire outside technicians.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Proven Regional Success
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Real Stories from East African Farmers & Processors
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            See how groups in Nyanza, Western, and Rift Valley scaled their processing yields.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-emerald-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                {/* Impact Banner */}
                <div className="inline-block rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-400 mb-4">
                  {item.result}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <h3 className="text-sm font-bold text-zinc-100">{item.name}</h3>
                <div className="flex items-center justify-between text-xs text-zinc-400 mt-0.5">
                  <span>{item.location}</span>
                  <span className="text-zinc-400">{item.equipment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}