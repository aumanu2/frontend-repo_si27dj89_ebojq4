import React, { useState } from 'react';
import { Calendar, Car, User, Hash } from 'lucide-react';

export default function BookingForm({ onCreate }) {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pickup || !dropoff) return;
    const ride = {
      id: crypto.randomUUID(),
      name,
      pickup,
      dropoff,
      carNumber,
      date: date || new Date().toISOString().slice(0, 10),
      createdAt: new Date().toISOString(),
    };
    onCreate?.(ride);
    setName('');
    setPickup('');
    setDropoff('');
    setCarNumber('');
    setDate('');
  };

  return (
    <section id="book" className="w-full">
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6">
        <h2 className="text-xl font-semibold tracking-tight mb-4">Book a Ride</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 ring-indigo-500">
            <User size={18} className="text-slate-500" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full outline-none bg-transparent"
              required
            />
          </label>
          <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 ring-indigo-500">
            <Car size={18} className="text-slate-500" />
            <input
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value.toUpperCase())}
              placeholder="Car number (optional)"
              className="w-full outline-none bg-transparent"
            />
          </label>
          <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 ring-indigo-500">
            <Hash size={18} className="text-slate-500" />
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup location"
              className="w-full outline-none bg-transparent"
              required
            />
          </label>
          <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 ring-indigo-500">
            <Hash size={18} className="text-slate-500" />
            <input
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Dropoff location"
              className="w-full outline-none bg-transparent"
              required
            />
          </label>
          <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 ring-indigo-500 md:col-span-2">
            <Calendar size={18} className="text-slate-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full outline-none bg-transparent"
            />
          </label>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800"
            >
              <Car size={18} />
              Book Ride
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
