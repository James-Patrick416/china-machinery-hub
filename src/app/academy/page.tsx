"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PlayCircle, GraduationCap, Clock, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import { getCourses, Course } from "@/lib/db/academy";

const fallbackCourses: Course[] = [
  {
    id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    title: "Posho Mill Daily Maintenance & Blade Calibration",
    slug: "posho-mill-maintenance-calibration",
    category: "Grain Milling",
    description: "Learn step-by-step daily maintenance, screen replacement, and hammer blade calibration for East African maize mills.",
  },
  {
    id: "b1eebc99-9c0b-4ef8-bb6d-6bb9bd380a22",
    title: "5-Ton Grain Dryer Safety & Moisture Management",
    slug: "grain-dryer-safety-moisture-control",
    category: "Post-Harvest Drying",
    description: "Master recirculating air heating, moisture target calibration (22% down to 13.5%), and burner safety procedures.",
  },
  {
    id: "c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a33",
    title: "Cold-Press Oil Extractor Operation & Filter Cleaning",
    slug: "oil-extractor-operation-cleaning",
    category: "Oil Processing",
    description: "How to operate screw seed presses, set optimum chamber temperatures, and service vacuum mesh filters for maximum oil yield.",
  },
];

export default function AcademyPage() {
  const [courses, setCourses] = useState<Course[]>(fallbackCourses);

  useEffect(() => {
    async function loadCourses() {
      const data = await getCourses();
      if (data && data.length > 0) {
        setCourses(data);
      }
    }
    loadCourses();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Operator Knowledge Base
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl flex items-center gap-3">
            <GraduationCap className="h-9 w-9 text-emerald-500" />
            Chik Academy Operator Training
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Free video training courses for mill operators, farm technicians, and SACCO engineers. Reduce machinery downtime and maximize flour & oil quality.
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-800/80 py-6">
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900/40 p-4 border border-zinc-800/60">
            <BookOpen className="h-5 w-5 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-zinc-200">Practical Modules</h4>
              <p className="text-[11px] text-zinc-400">Filmed on active processing sites in EA</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-zinc-900/40 p-4 border border-zinc-800/60">
            <Clock className="h-5 w-5 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-zinc-200">Bite-Sized Lessons</h4>
              <p className="text-[11px] text-zinc-400">8 to 15-minute video walkthroughs</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-zinc-900/40 p-4 border border-zinc-800/60">
            <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-zinc-200">Zero Extra Cost</h4>
              <p className="text-[11px] text-zinc-400">Free for all equipment owners & operators</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/80"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <PlayCircle className="h-3.5 w-3.5" />
                    {course.category}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <Link
                  href={`/academy/${course.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
                >
                  Start Video Course
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}