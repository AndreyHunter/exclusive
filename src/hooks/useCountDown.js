import { useState, useEffect } from 'react';

const useCountDown = (endDate, interval = 1000) => {
    const calcTimeDifference = () => {
        const now = new Date();
        const difference = endDate - now;

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
    };

    const getZero = (time) => (time < 10 ? `0${time}` : time);

    const [timeInfo, setTime] = useState(calcTimeDifference());

    useEffect(() => {
        if (timeInfo.finished) {
            return;
        }

        const timerId = setInterval(() => {
            setTime(calcTimeDifference());
        }, interval);

        return () => {
            clearInterval(timerId);
        };
    }, [endDate, interval, timeInfo.finished]);

    return timeInfo;
};

export default useCountDown;
