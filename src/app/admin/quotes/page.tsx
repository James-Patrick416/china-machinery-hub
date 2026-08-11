"use client";

import { useEffect, useState } from "react";
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  Send, 
  Search, 
  MessageSquare, 
  Phone, 
  Filter,
  RefreshCw,
  Loader2
} from "lucide-react";
import { getQuotes, updateQuoteStatus, Quote } from "@/lib/db/quotes";

// Sample mock quotes to render if the database is currently empty
const fallbackQuotes: Quote[] = [
  {
    id: "q1",
    name: "John Omondi (Migori Farmers SACCO)",
    phone: "+254712345678",
    details: "Need 15HP Posho Mill delivered to Migori. Interested in dual-fuel engine options.",
    status: "pending",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "q2",
    name: "Amina Hassan",
    phone: "+254722987654",
    details: "Inquiring about 5-Ton Recirculating Batch Grain Dryer for paddy rice processing in Kisumu.",
    status: "contacted",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "q3",
    name: "David Kiptoo",
    phone: "+254733112233",
    details: "Sunflower seed oil press + vacuum filter combo. Delivered to Eldoret.",
    status: "proforma_sent",
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
];

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(fallbackQuotes);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await getQuotes();
    if (data && data.length > 0) {
      setQuotes(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Quote["status"]) => {
    setUpdatingId(id);
    const success = await updateQuoteStatus(id, newStatus);
    
    // Update local state optimistic UI
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
    );
    setUpdatingId(null);
  };

  // Metrics
  const totalCount = quotes.length;
  const pendingCount = quotes.filter((q) => q.status === "pending").length;
  const contactedCount = quotes.filter((q) => q.status === "contacted").length;
  const proformaSentCount = quotes.filter((q) => q.status === "proforma_sent").length;

  // Filtering logic
  const filteredQuotes = quotes.filter((q) => {
    const matchesFilter = statusFilter === "all" || q.status === statusFilter;
    const matchesSearch =
      q.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.phone.includes(searchQuery) ||
      q.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
              Admin Portal
            </span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl text-zinc-100">
              Equipment Quotes & Lead Management
            </h1>
          </div>

          <button
            onClick={loadData}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors self-start sm:self-auto"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-emerald-500" : ""}`} />
            Refresh Leads
          </button>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-200">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Total Inquiries</p>
              <p className="text-xl font-bold text-zinc-100">{totalCount}</p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-amber-300">Pending Follow-up</p>
              <p className="text-xl font-bold text-amber-400">{pendingCount}</p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-500/20 bg-blue-950/10 p-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-blue-300">Contacted / In Discussion</p>
              <p className="text-xl font-bold text-blue-400">{contactedCount}</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-emerald-300">Proforma Issued</p>
              <p className="text-xl font-bold text-emerald-400">{proformaSentCount}</p>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by name, phone (+254...), or machine required..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 pl-10 pr-4 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Filter className="h-4 w-4 text-zinc-500 hidden sm:block mr-1" />
            {[
              { id: "all", label: "All" },
              { id: "pending", label: "Pending" },
              { id: "contacted", label: "Contacted" },
              { id: "proforma_sent", label: "Proforma Sent" },
              { id: "closed", label: "Closed" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  statusFilter === tab.id
                    ? "bg-emerald-600 text-white font-semibold"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Table */}
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-zinc-800 bg-zinc-950/80 text-zinc-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Lead Name / SACCO</th>
                  <th className="px-6 py-3.5">Phone / Contact</th>
                  <th className="px-6 py-3.5">Requirement Details</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                {filteredQuotes.map((quote) => {
                  const formattedPhone = quote.phone.replace(/[^0-9]/g, "");
                  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
                    `Hi ${quote.name}, thanks for inquiring on China Machinery Hub regarding: ${quote.details}`
                  )}`;

                  return (
                    <tr key={quote.id} className="hover:bg-zinc-900/90 transition-colors">
                      {/* Name */}
                      <td className="px-6 py-4 font-semibold text-zinc-100 whitespace-nowrap">
                        {quote.name}
                        {quote.created_at && (
                          <p className="text-[10px] text-zinc-500 font-normal mt-0.5">
                            {new Date(quote.created_at).toLocaleDateString()}
                          </p>
                        )}
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-emerald-400">
                        {quote.phone}
                      </td>

                      {/* Details */}
                      <td className="px-6 py-4 max-w-xs sm:max-w-md">
                        <p className="line-clamp-2 text-zinc-300 leading-relaxed">
                          {quote.details}
                        </p>
                      </td>

                      {/* Status Dropdown */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={quote.status}
                          disabled={updatingId === quote.id}
                          onChange={(e) =>
                            handleStatusChange(quote.id, e.target.value as Quote["status"])
                          }
                          className="rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                        >
                          <option value="pending">⏳ Pending</option>
                          <option value="contacted">💬 Contacted</option>
                          <option value="proforma_sent">📄 Proforma Sent</option>
                          <option value="closed">✅ Closed</option>
                        </select>
                      </td>

                      {/* Action Buttons */}
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white px-3 py-1.5 text-xs font-semibold transition-colors border border-emerald-500/30"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          Chat WhatsApp
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredQuotes.length === 0 && (
              <div className="text-center py-12 text-zinc-500 text-xs">
                No quote inquiries match the selected criteria.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}