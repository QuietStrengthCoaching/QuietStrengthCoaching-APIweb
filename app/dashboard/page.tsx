'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalClients: 0,
    upcomingSessions: 0,
    completedSessions: 0,
  });

  useEffect(() => {
    // TODO: Fetch stats from API
    console.log('Fetching dashboard stats from API');
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Clients</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.totalClients}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Upcoming Sessions</h3>
          <p className="text-3xl font-bold text-pink-600">{stats.upcomingSessions}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Completed Sessions</h3>
          <p className="text-3xl font-bold text-green-600">{stats.completedSessions}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <p className="text-gray-600">No recent activity yet. Connect to the API to see data here.</p>
      </div>
    </div>
  );
}
