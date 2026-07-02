"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ADMIN_PASSWORD = "admin123";

interface Lead {
  id: string;
  name: string;
  phone: string;
  serviceType?: string;
  city?: string;
  status: string;
  phoneVerified: boolean;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [tab, setTab] = useState<"puja" | "pandit" | "rishta" | "bhajan">("puja");
  const [data, setData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = document.cookie.includes("admin_auth=true");
    if (!auth) { router.push("/admin/login"); return; }
    fetchData();
  }, [tab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoints: Record<string, string> = {
        puja: "/api/inquiries",
        pandit: "/api/pandits",
        rishta: "/api/rishta",
        bhajan: "/api/bhajan-kirtan",
      };
      const res = await fetch(endpoints[tab]);
      const d = await res.json();
      setData(Array.isArray(d) ? d : []);
    } catch (e) {
      setData([]);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string, type: string) => {
    await fetch(`/api/${type}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchData();
  };

  const tabs = [
    { key: "puja", label: "पूजा Leads" },
    { key: "pandit", label: "पंडित Registrations" },
    { key: "rishta", label: "विवाह / रिश्ता Leads" },
    { key: "bhajan", label: "भजन/कीर्तन/पाठ Leads" },
  ];

  const statusColors: Record<string, string> = {
    new: "bg-blue-100 text-blue-700",
    verified: "bg-green-100 text-green-700",
    contacted: "bg-yellow-100 text-yellow-700",
    assigned: "bg-purple-100 text-purple-700",
    confirmed: "bg-green-200 text-green-800",
    completed: "bg-gray-200 text-gray-700",
    cancelled: "bg-red-100 text-red-700",
    pending_review: "bg-orange-100 text-orange-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🕉️</span>
          <h1 className="text-lg font-bold">PanditHire.in Admin</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-white/70 hover:text-white">View Site</Link>
          <button onClick={() => { document.cookie = "admin_auth=;max-age=0;path=/"; router.push("/admin/login"); }} className="text-white/70 hover:text-white">Logout</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key as typeof tab)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${tab === t.key ? "bg-saffron text-white" : "bg-white text-gray-600 border border-gray-200"}`}>{t.label}</button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Name</th>
                  <th className="text-left px-4 py-3 font-medium">Phone</th>
                  {tab !== "pandit" && <th className="text-left px-4 py-3 font-medium">Service</th>}
                  <th className="text-left px-4 py-3 font-medium">City</th>
                  <th className="text-left px-4 py-3 font-medium">Verified</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr><td colSpan={7} className="text-center py-8 text-gray-400">Loading...</td></tr>
                ) : data.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-8 text-gray-400">No data found</td></tr>
                ) : (
                  data.map((item: any) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{item.name || item.fullName}</td>
                      <td className="px-4 py-3 text-gray-600">{item.phone || item.mobile}</td>
                      {tab !== "pandit" && <td className="px-4 py-3 text-gray-600 text-xs max-w-[150px] truncate">{item.serviceType || item.mainSpecialization || "-"}</td>}
                      <td className="px-4 py-3 text-gray-600">{item.city || "-"}</td>
                      <td className="px-4 py-3">{item.phoneVerified ? <span className="text-green-600">✓</span> : <span className="text-red-400">✗</span>}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[item.status] || "bg-gray-100 text-gray-700"}`}>{item.status}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{new Date(item.createdAt).toLocaleDateString("hi-IN")}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
