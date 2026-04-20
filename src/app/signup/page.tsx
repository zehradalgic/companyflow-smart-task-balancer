"use client";

import { useState } from "react";

export default function SignupPage() {
  // Formdaki verileri anlık olarak tutacağımız state
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // Butona basıldığında veriyi Merve'nin backend'ine gönderecek fonksiyon
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Frontend'deki first ve last name'i birleştirip fullName yapıyoruz
        body: JSON.stringify({
          companyName: formData.companyName,
          fullName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Harika! Kayıt başarılı, veriler backend'e ulaştı. 🎉");
        // İsteğe bağlı: Kayıt başarılı olunca formu temizleyebiliriz
        setFormData({ companyName: "", firstName: "", lastName: "", email: "", password: "" });
      } else {
        alert("Kayıt başarısız: " + data.message);
      }
    } catch (error) {
      console.error("Bağlantı hatası:", error);
      alert("Sunucuya ulaşılamıyor. Merve'nin backend'i (Port 5000) açık mı?");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 italic">CompanyFlow</h1>
          <p className="text-gray-500 mt-2 font-medium">Create your corporate account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
            <input 
              type="text" 
              placeholder="e.g. Acme Corp" 
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                placeholder="Zehra" 
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                placeholder="Dalgıç" 
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Work Email</label>
            <input 
              type="email" 
              placeholder="zehra@company.com" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 mt-4"
          >
            Register Company
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account? <a href="/login" className="text-blue-600 font-bold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}