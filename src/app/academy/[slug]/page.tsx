"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Clock, 
  FileText, 
  GraduationCap,
  MessageSquare 
} from "lucide-react";
import { getCourseWithLessons, Course, Lesson } from "@/lib/db/academy";

const fallbackDataMap: Record<string, { course: Course; lessons: Lesson[] }> = {
  "posho-mill-maintenance-calibration": {
    course: {
      id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
      title: "Posho Mill Daily Maintenance & Blade Calibration",
      slug: "posho-mill-maintenance-calibration",
      category: "Grain Milling",
      description: "Learn step-by-step daily maintenance, screen replacement, and hammer blade calibration for East African maize mills.",
    },
    lessons: [
      {
        id: "l1",
        course_id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        title: "1. Inspection & Greasing Lubrication Points",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration_mins: 8,
        order_index: 1,
      },
      {
        id: "l2",
        course_id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        title: "2. Replacing Worn Sieve Screens",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration_mins: 12,
        order_index: 2,
      },
      {
        id: "l3",
        course_id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        title: "3. Calibrating Huller Clearance for Grade-1 Flour",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration_mins: 15,
        order_index: 3,
      },
    ],
  },
};

export default function CoursePlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourse() {
      const dbResult = await getCourseWithLessons(slug);
      
      if (dbResult && dbResult.course) {
        setCourse(dbResult.course);
        setLessons(dbResult.lessons);
        setActiveLesson(dbResult.lessons[0] || null);
      } else if (fallbackDataMap[slug]) {
        const fb = fallbackDataMap[slug];
        setCourse(fb.course);
        setLessons(fb.lessons);
        setActiveLesson(fb.lessons[0] || null);
      }

      setLoading(false);
    }

    loadCourse();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <p className="text-xs text-zinc-500 animate-pulse">Loading Chik Academy Course Player...</p>
      </div>
    );
  }

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Back Link */}
        <Link
          href="/academy"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Chik Academy
        </Link>

        {/* Title */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            {course.category}
          </span>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl text-zinc-100">
            {course.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Video Embed Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Video Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
              {activeLesson ? (
                <iframe
                  src={activeLesson.video_url}
                  title={activeLesson.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                  Select a lesson to start video stream
                </div>
              )}
            </div>

            {/* Active Lesson Details */}
            {activeLesson && (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h2 className="text-base font-bold text-zinc-100">
                    {activeLesson.title}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                    <Clock className="h-4 w-4 text-emerald-500" />
                    {activeLesson.duration_mins} Minutes
                  </span>
                </div>

                <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/254700000000?text=Hi%20Chik%20Academy%20Team%2C%20I%20have%20a%20technical%20question%20regarding%20machine%20maintenance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Ask Technician on WhatsApp
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Lesson Playlist Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
              <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2 mb-4">
                <GraduationCap className="h-4 w-4 text-emerald-500" />
                Course Modules ({lessons.length})
              </h3>

              <div className="space-y-2">
                {lessons.map((lesson, idx) => {
                  const isActive = activeLesson?.id === lesson.id;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border transition-all text-xs ${
                        isActive
                          ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 font-semibold"
                          : "bg-zinc-950/60 border-zinc-800/80 text-zinc-300 hover:bg-zinc-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] ${
                            isActive
                              ? "bg-emerald-500 text-zinc-950 font-bold"
                              : "bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <span className="line-clamp-2">{lesson.title}</span>
                      </div>

                      <span className="text-[10px] text-zinc-500 shrink-0">
                        {lesson.duration_mins}m
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}