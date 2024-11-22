import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { Button } from './Button';

export const Timer: React.FC = () => {
  const {
    time,
    isActive,
    mode,
    toggleTimer,
    resetTimer,
    switchMode
  } = useTimer();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center">
      <div className="text-6xl font-bold mb-8">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      
      <div className="space-x-4 mb-8">
        <Button 
          onClick={toggleTimer}
          variant={isActive ? 'danger' : 'primary'}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={resetTimer} variant="secondary">
          Reset
        </Button>
      </div>

      <div className="space-x-4">
        <Button 
          onClick={() => switchMode('work')}
          variant={mode === 'work' ? 'primary' : 'secondary'}
        >
          Work
        </Button>
        <Button 
          onClick={() => switchMode('break')}
          variant={mode === 'break' ? 'primary' : 'secondary'}
        >
          Break
        </Button>
      </div>
    </div>
  );
}