export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* WELCOME SECTION */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Dashboard</h2>
          <p className="text-slate-500 text-sm font-medium">Welcome back, Zehra! Here's your company overview.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all">
          + Create New Task
        </button>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Employees" value="24" trend="+2 this month" icon="👥" color="blue" />
        <StatCard label="Tasks Assigned" value="18" trend="+4 this week" icon="📋" color="emerald" />
        <StatCard label="In Progress" value="7" trend="+1 this week" icon="⏳" color="orange" />
        <StatCard label="Completed" value="11" trend="+3 this week" icon="✅" color="purple" />
      </div>

      {/* RECENT TASKS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Recent Tasks</h3>
          <button className="text-xs font-bold text-blue-600 hover:underline">View All Tasks</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-slate-400 text-[11px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Task Title</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4 text-right">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <TaskRow title="UI Design for Dashboard" emp="Zehra Dalgıç" status="In Progress" priority="High" date="May 20, 2026" />
              <TaskRow title="API Integration Setup" emp="Merve Çetinkaya" status="In Progress" priority="Medium" date="May 22, 2026" />
              <TaskRow title="Fix Database Connection" emp="Ahmet Yılmaz" status="To Do" priority="High" date="May 19, 2026" />
              <TaskRow title="Update Documentation" emp="Elif Demir" status="Done" priority="Low" date="May 18, 2026" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- REUSABLE UI COMPONENTS ---

function StatCard({ label, value, trend, icon, color }: any) {
  const colorSchemes: any = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-default">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{label}</p>
          <h3 className="text-3xl font-bold mt-2 text-slate-900">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${colorSchemes[color]} text-xl group-hover:scale-110 transition-transform shadow-inner`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1">
        <span className={`text-[11px] font-bold ${colorSchemes[color].split(' ')[1]}`}>{trend}</span>
      </div>
    </div>
  );
}

function TaskRow({ title, emp, status, priority, date }: any) {
  const statusStyles: any = {
    'In Progress': 'bg-blue-100 text-blue-700',
    'To Do': 'bg-slate-100 text-slate-600',
    'Done': 'bg-emerald-100 text-emerald-700'
  };

  return (
    <tr className="hover:bg-slate-50 transition-colors group">
      <td className="px-6 py-4 font-bold text-slate-700 group-hover:text-blue-600 transition-colors cursor-pointer">{title}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">👤</div>
          <span className="text-slate-600 font-medium">{emp}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs font-bold ${priority === 'High' ? 'text-red-500' : priority === 'Medium' ? 'text-orange-500' : 'text-slate-400'}`}>
          ● {priority}
        </span>
      </td>
      <td className="px-6 py-4 text-right text-slate-400 font-mono text-xs font-semibold">{date}</td>
    </tr>
  );
}