import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="flex space-x-1">
      <div className="h-2 bg-blue-500 rounded transition-all animate-growShrinkX"></div>
      <div className="h-2 bg-blue-400 rounded transition-all animate-growShrinkX" style={{ animationDelay: '0.15s' }}></div>
      <div className="h-2 bg-indigo-400 rounded transition-all animate-growShrinkX" style={{ animationDelay: '0.3s' }}></div>
      <div className="h-2 bg-blue-300 rounded transition-all animate-growShrinkX" style={{ animationDelay: '0.45s' }}></div>
      <div className="h-2 bg-indigo-200 rounded transition-all animate-growShrinkX" style={{ animationDelay: '0.6s' }}></div>
    </div>
    <style>{`
      @keyframes growShrinkX {
        0%, 100% { width: 16px; }
        50% { width: 64px; }
      }
      .animate-growShrinkX {
        animation: growShrinkX 1.2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default Loader;
