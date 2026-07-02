import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Quiet Strength Coaching',
  description: 'Admin dashboard for managing coaching sessions and clients',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">QS Admin</h1>
        <nav className="space-y-4">
          <a href="/dashboard" className="block px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700">
            Dashboard
          </a>
          <a href="/dashboard/clients" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Clients
          </a>
          <a href="/dashboard/sessions" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Sessions
          </a>
          <a href="/dashboard/settings" className="block px-4 py-2 rounded-lg hover:bg-gray-800">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
