import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompanyFlow | Smart Task Balancer",
  description: "B2B SaaS Task Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-[#0F172A] text-slate-400 flex flex-col hidden lg:flex">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-blue-500">●</span> CompanyFlow
            </h1>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            <NavItem label="Dashboard" active />
            <NavItem label="Employees" />
            <NavItem label="Tasks" />
            <NavItem label="My Tasks" />
            <NavItem label="Reports" />
            <NavItem label="Settings" />
          </nav>

          {/* LOGGED IN USER (ADMIN/OWNER) */}
          <div className="p-4 border-t border-slate-800 bg-[#0b1224]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs border-2 border-slate-700">
                ZD
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-white truncate">Zehra Dalgıç</p>
                <p className="text-xs text-slate-500">Company Owner</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* HEADER */}
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-slate-600 lg:hidden">☰</button>
              <div className="relative">
                 <input 
                  type="text" 
                  placeholder="Search tasks..." 
                  className="bg-slate-100 border-none rounded-lg py-1.5 px-4 text-sm w-64 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative cursor-pointer text-slate-400 hover:text-slate-600">
                <span className="text-xl">🔔</span>
                <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
              </div>
              <button className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">Logout</button>
            </div>
          </header>

          {/* SCROLLABLE PAGE CONTENT */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800/50 hover:text-slate-200'
    }`}>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}