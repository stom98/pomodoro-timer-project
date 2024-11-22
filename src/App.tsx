import React from 'react';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Pomodoro Timer
        </h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;