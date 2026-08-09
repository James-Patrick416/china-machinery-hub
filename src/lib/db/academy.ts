import { createClient } from "@/lib/supabase/client";

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  thumbnail_url?: string;
  created_at?: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  video_url: string;
  duration_mins: number;
  order_index: number;
  created_at?: string;
}

export async function getCourses(): Promise<Course[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return [];
    }

    return data as Course[];
  } catch (err) {
    console.error("Error fetching courses:", err);
    return [];
  }
}

export async function getCourseWithLessons(slug: string): Promise<{ course: Course; lessons: Lesson[] } | null> {
  try {
    const supabase = createClient();
    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .single();

    if (courseError || !course) return null;

    const { data: lessons, error: lessonsError } = await supabase
      .from("lessons")
      .select("*")
      .eq("course_id", course.id)
      .order("order_index", { ascending: true });

    if (lessonsError) return { course, lessons: [] };

    return { course, lessons: lessons as Lesson[] };
  } catch (err) {
    console.error("Error fetching course detail:", err);
    return null;
  }
}