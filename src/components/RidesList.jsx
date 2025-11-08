import React from 'react';
import { Car, MapPin } from 'lucide-react';

export default function RidesList({ rides = [], onDelete }) {
  return (
    <section id="rides" className="w-full">
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold tracking-tight">Your Rides</h2>
          <span className="text-sm text-slate-500">{rides.length} total</span>
        </div>
        {rides.length === 0 ? (
          <p className="text-slate-500">No rides yet. Book one above to get started.</p>
        ) : (
          <ul className="space-y-3">
            {rides.map((r) => (
              <li key={r.id} className="border rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <Car size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{r.name} • {r.date}</div>
                    <div className="text-sm text-slate-600 flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      <span>{r.pickup}</span>
                      <span className="opacity-60">→</span>
                      <span>{r.dropoff}</span>
                    </div>
                    {r.carNumber && (
                      <div className="text-xs text-slate-500 mt-1">Car: {r.carNumber}</div>
                    )}
                  </div>
                </div>
                <button onClick={() => onDelete?.(r.id)} className="text-sm text-red-600 hover:underline">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
