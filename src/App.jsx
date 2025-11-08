import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import RidesList from './components/RidesList';
import Footer from './components/Footer';

function App() {
  const [rides, setRides] = useState(() => {
    try {
      const saved = localStorage.getItem('luvda_rides');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('luvda_rides', JSON.stringify(rides));
    } catch {}
  }, [rides]);

  const handleCreateRide = (ride) => {
    setRides((prev) => [ride, ...prev]);
  };

  const handleDeleteRide = (id) => {
    setRides((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Luvda — Your Cab, Your Way</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Book a ride in seconds. Add your name, choose pickup and dropoff, and keep your car number handy for quick access.
          </p>
        </section>
        <BookingForm onCreate={handleCreateRide} />
        <RidesList rides={rides} onDelete={handleDeleteRide} />
      </main>
      <div className="max-w-6xl mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
