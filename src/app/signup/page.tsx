export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 italic">CompanyFlow</h1>
          <p className="text-gray-500 mt-2 font-medium">Create your corporate account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
            <input type="text" placeholder="e.g. Acme Corp" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
              <input type="text" placeholder="Zehra" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
              <input type="text" placeholder="Dalgıç" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Work Email</label>
            <input type="email" placeholder="zehra@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 mt-4">
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