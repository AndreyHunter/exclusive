import { useState, useEffect, useCallback } from 'react';

interface TimeState {
  days: `0${string}` | number;
  hours: `0${string}` | number;
  minutes: `0${string}` | number;
  seconds: `0${string}` | number;
  finished: boolean;
}

export const useCountDown = (endDate: Date, interval: number = 1000) => {
  const getZero = (time: number): `0${string}` | number => (time < 10 ? `0${time}` : time);

  const calcTimeDifference = useCallback((): TimeState => {
    const now = Number(new Date());
    const difference = Number(endDate) - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      };
    }

    return {
      days: getZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: getZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: getZero(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: getZero(Math.floor((difference / 1000) % 60)),
      finished: false,
    };
  }, [endDate]);

  const [time, setTime] = useState<TimeState>(calcTimeDifference());

  useEffect(() => {
    if (time.finished) {
      return;
    }

    const timerId = setInterval(() => {
      setTime(calcTimeDifference());
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [endDate, interval, time.finished, calcTimeDifference]);

  return time;
};
