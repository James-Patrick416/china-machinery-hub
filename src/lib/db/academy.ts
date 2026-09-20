export interface Lesson {
  id: string;
  course_id?: string;
  title: string;
  duration?: string;
  duration_mins?: number;
  order_index?: number;
  summary?: string;
  content?: string;
  video_url?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary?: string;
  description?: string;
  crop_value_chain?: "Maize" | "Potato" | "Carrot" | "General";
  read_time?: string;
  duration?: string;
  lessons_count?: number;
  content?: string;
  lessons?: Lesson[];
}

export type Article = Course;

export const fallbackCourses: Course[] = [
  {
    id: "1",
    slug: "maize-value-chain-milling-and-drying-guide",
    title: "Maize Value Chain: De-husking, Aflatoxin Drying, and Grade-1 Flour Milling",
    category: "Grain Processing",
    crop_value_chain: "Maize",
    duration: "15 mins",
    read_time: "6 min read",
    lessons_count: 3,
    summary: "A complete technical roadmap for turning harvested maize into packaged, premium-grade flour while eliminating post-harvest moisture loss.",
    description: "Learn post-harvest moisture control, de-stoning, and commercial Grade-1 maize flour milling.",
    lessons: [
      {
        id: "l1",
        course_id: "1",
        order_index: 1,
        title: "Stage 1: Moisture Control & Drying",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Target 13.5% moisture levels using batch dryers to prevent aflatoxin growth.",
        content: "Harvested maize holds 18-24% moisture. Reduce to 13.5% using a batch recirculating dryer before milling."
      },
      {
        id: "l2",
        course_id: "1",
        order_index: 2,
        title: "Stage 2: De-stoning & Cleaning",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Remove stones, dust, and chaff before grain enters roller mills.",
        content: "Vibrating multi-crop de-stoners remove heavy contaminants to protect roller blades."
      },
      {
        id: "l3",
        course_id: "1",
        order_index: 3,
        title: "Stage 3: Milling Grade-1 Flour",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Combine de-husking with impact milling for institutional grade flour.",
        content: "De-husk outer bran before roller milling to achieve white, high-purity maize flour."
      }
    ]
  },
  {
    id: "2",
    slug: "potato-value-chain-washing-grading-and-crisps",
    title: "Potato Value Chain: Industrial Washing, Size Grading, and Value Addition",
    category: "Root Crop Processing",
    crop_value_chain: "Potato",
    duration: "12 mins",
    read_time: "5 min read",
    lessons_count: 3,
    summary: "How commercial growers and SACCOs double their potato margins by washing, grading, and processing raw tubers.",
    description: "Industrial washing, size grading for hotels, and crisp processing setup.",
    lessons: [
      {
        id: "l4",
        course_id: "2",
        order_index: 1,
        title: "Stage 1: Soil Removal & High-Pressure Washing",
        duration: "4 mins",
        duration_mins: 4,
        summary: "Clean field mud without bruising tuber skins.",
        content: "Continuous roller brush washers clean up to 2 tons per hour using high-pressure jets."
      },
      {
        id: "l5",
        course_id: "2",
        order_index: 2,
        title: "Stage 2: Size Grading for Commercial Markets",
        duration: "4 mins",
        duration_mins: 4,
        summary: "Sort potatoes into Grade A, B, and C sizes.",
        content: "Automated sizing rollers sort potatoes into fries, table, and seed categories."
      },
      {
        id: "l6",
        course_id: "2",
        order_index: 3,
        title: "Stage 3: Value Addition (Chips & Crisps)",
        duration: "4 mins",
        duration_mins: 4,
        summary: "Peeling, slicing, and frying for retail packaging.",
        content: "Commercial peeling and slicing lines transform raw tubers into packaged chips."
      }
    ]
  },
  {
    id: "3",
    slug: "carrot-value-chain-post-harvest-brush-cleaning",
    title: "Carrot Processing: Brush Washing, Grading, and Cold Chain Storage",
    category: "Root Crop Processing",
    crop_value_chain: "Carrot",
    duration: "10 mins",
    read_time: "4 min read",
    lessons_count: 2,
    summary: "Eliminate mud staining and rapid decay in fresh carrot harvests with automated brush washing.",
    description: "Brush washing, water recycling, and cold chain prep for carrots.",
    lessons: [
      {
        id: "l7",
        course_id: "3",
        order_index: 1,
        title: "Stage 1: De-mudding & Polishing",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Spiral brush scrubbers remove clay soil without breaking carrots.",
        content: "Soft nylon brushes gently scrub root skin while polishing for market presentation."
      },
      {
        id: "l8",
        course_id: "3",
        order_index: 2,
        title: "Stage 2: Water Recycling & Storage",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Integrate water tanks and filters to re-use wash water safely.",
        content: "Pairing washing units with 10,000L tanks and filtration pits reduces fresh water costs."
      }
    ]
  },
  {
    id: "4",
    slug: "securing-kdc-bank-loans-for-machinery",
    title: "How to Secure KDC & Commercial Asset Financing with Proforma Contracts",
    category: "Agro-Financing",
    crop_value_chain: "General",
    duration: "10 mins",
    read_time: "5 min read",
    lessons_count: 2,
    summary: "A step-by-step guide for SACCOs and agribusinesses on presenting machinery supply contracts to lenders.",
    description: "Preparing Proforma invoices, supply agreements, and ROI reports for bank loans.",
    lessons: [
      {
        id: "l9",
        course_id: "4",
        order_index: 1,
        title: "Step 1: Bank Contract Preparation",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Required loan documentation checklist.",
        content: "Present CIF Proforma invoices, technical spec sheets, and signed supply contracts."
      },
      {
        id: "l10",
        course_id: "4",
        order_index: 2,
        title: "Step 2: ROI Feasibility Presentation",
        duration: "5 mins",
        duration_mins: 5,
        summary: "Proving machine throughput covers loan installments.",
        content: "Use machine output projections to demonstrate monthly cash flow and payback timelines."
      }
    ]
  },
  {
    id: "5",
    slug: "posho-mill-maintenance-calibration",
    title: "Commercial Posho Mill Maintenance & Blade Calibration",
    category: "Machinery Maintenance",
    crop_value_chain: "Maize",
    duration: "15 mins",
    read_time: "5 min read",
    lessons_count: 2,
    summary: "Routine maintenance and blade alignment for diesel and electric posho mills.",
    description: "Keep your mill running at peak efficiency with proper blade clearances and belt tensioning.",
    lessons: [
      {
        id: "l11",
        course_id: "5",
        order_index: 1,
        title: "Blade Alignment & Clearance",
        duration: "7 mins",
        duration_mins: 7,
        summary: "Setting optimal gap distance for fine flour production.",
        content: "Ensure blade gap is calibrated according to manufacturer specs before starting daily production."
      },
      {
        id: "l12",
        course_id: "5",
        order_index: 2,
        title: "Drive Belt & Bearing Greasing",
        duration: "8 mins",
        duration_mins: 8,
        summary: "Prevent motor overheating and belt slippage.",
        content: "Apply high-temperature grease to main bearings every 50 hours of operation."
      }
    ]
  }
];

export const fallbackArticles = fallbackCourses;

export async function getCourses(): Promise<Course[]> {
  return fallbackCourses;
}

export async function getArticles(): Promise<Course[]> {
  return fallbackCourses;
}

export async function getCourseWithLessons(slug: string): Promise<{ course: Course; lessons: Lesson[] } | null> {
  const course = fallbackCourses.find((c) => c.slug === slug);
  if (!course) return null;
  return {
    course,
    lessons: course.lessons || []
  };
}

export async function getArticleBySlug(slug: string): Promise<Course | null> {
  const course = fallbackCourses.find((c) => c.slug === slug);
  return course || null;
}