import React from 'react';
import { Car, MapPin, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
            <Car size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">Luvda</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#book" className="hover:text-slate-900 flex items-center gap-1"><MapPin size={16}/>Book</a>
          <a href="#rides" className="hover:text-slate-900">Your Rides</a>
          <a href="#contact" className="hover:text-slate-900 flex items-center gap-1"><Phone size={16}/>Contact</a>
        </nav>
        <button className="sm:hidden p-2 px-3 rounded-lg bg-slate-900 text-white text-sm">Menu</button>
      </div>
    </header>
  );
}
