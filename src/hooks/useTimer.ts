import { useState, useEffect } from 'react';

type TimerMode = 'work' | 'break';

const WORK_TIME = 25 * 60; // 25 minutes in seconds
const BREAK_TIME = 5 * 60; // 5 minutes in seconds

export const useTimer = () => {
  const [mode, setMode] = useState<TimerMode>('work');
  const [time, setTime] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      // Play notification sound when timer ends
      new Audio('/notification.mp3').play().catch(() => {});
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(mode === 'work' ? WORK_TIME : BREAK_TIME);
  };

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsActive(false);
    setTime(newMode === 'work' ? WORK_TIME : BREAK_TIME);
  };

  return {
    time,
    isActive,
    mode,
    toggleTimer,
    resetTimer,
    switchMode
  };
}