"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Sayfa yönlendirmesi için lazım

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // BAŞARILI: Backend 'Giriş başarılı' dedi
        alert("Giriş başarılı! Hoş geldin Zehra.");
        
        // Backend'den gelen token'ı tarayıcı hafızasına alıyoruz (Giriş yapıkalsın diye)
        localStorage.setItem("token", data.token);
        
        // ANA SAYFAYA YÖNLENDİRME (Dashboard)
        router.push("/"); 
      } else {
        // BAŞARISIZ: Yanlış şifre veya olmayan hesap
        alert("Giriş başarısız: " + data.message);
      }
    } catch (error) {
      console.error("Login hatası:", error);
      alert("Sunucuya ulaşılamıyor. Backend açık mı?");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 italic font-serif">CompanyFlow</h1>
          <p className="text-gray-500 mt-2 font-medium">Welcome back! Please login.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-bold text-gray-700">Password</label>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
  
}