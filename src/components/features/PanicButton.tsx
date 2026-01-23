/**
 * CLASS MODE BUTTON - Quick Switch (REDESIGNED)
 * 
 * Instantly redirects to Google Classroom when teacher walks by.
 * NOW: Better integrated with site design, more subtle but still accessible
 */

import { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

export default function PanicButton() {
  // The magic redirect to Google Classroom
  const handlePanic = () => {
    window.location.href = 'https://classroom.google.com/';
  };

  // Press ESC key for quick switch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handlePanic();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Class Mode button - bottom right corner, better integrated */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={handlePanic}
          className="relative bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-2xl px-5 py-3 shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30 flex items-center space-x-2"
          title="Quick switch to Google Classroom (ESC key)"
        >
          <BookOpen className="w-5 h-5" />
          <span className="font-semibold text-sm">Class Mode</span>
          
          {/* Pulse indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>

        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
            <p className="font-semibold mb-1">🚨 Teacher Alert!</p>
            <p>Press <kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">ESC</kbd> or click</p>
          </div>
        </div>
      </div>
    </>
  );
}
