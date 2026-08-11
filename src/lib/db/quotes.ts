import { createClient } from "@/lib/supabase/client";

export interface Quote {
  id: string;
  name: string;
  phone: string;
  details: string;
  status: "pending" | "contacted" | "proforma_sent" | "closed";
  created_at?: string;
}

export async function getQuotes(): Promise<Quote[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.error("Error fetching quotes:", error?.message);
      return [];
    }

    return data as Quote[];
  } catch (err) {
    console.error("Error fetching quotes:", err);
    return [];
  }
}

export async function updateQuoteStatus(id: string, status: Quote["status"]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { error } = await supabase
      .from("quotes")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Error updating quote status:", error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error updating status:", err);
    return false;
  }
}