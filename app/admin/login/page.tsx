"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123")) {
      document.cookie = "admin_auth=true;path=/;max-age=86400;samesite=lax";
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-3xl">🕉️</span>
          <h1 className="text-xl font-bold text-primary-dark mt-2">PanditHire.in Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Admin Dashboard Login</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" required />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full px-6 py-3 bg-navy text-white rounded-full font-semibold hover:bg-navy-dark transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
}
