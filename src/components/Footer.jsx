import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full mt-12 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} Luvda — A simple cab booking experience.
      </p>
      <p className="mt-1">Contact: support@luvda.app</p>
    </footer>
  );
}
