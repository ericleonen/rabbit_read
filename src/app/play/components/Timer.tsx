import { useEffect, useRef, useState } from "react"

type TimerProps = {
    on: boolean,
    duration: number
}

export default function Timer({ on, duration }: TimerProps) {
    const [currentTime, setCurrentTime] = useState(0);
    const finalTime = useRef<number>(0);
    const intervalID = useRef<NodeJS.Timeout | null>(null);
    const transitionDuration = useRef<number>(0);

    const clearTimer = () => {
        if (intervalID.current !== null) {
            clearInterval(intervalID.current);
        }
    }

    useEffect(() => {
        if (on && intervalID.current === null) {
            const now = Date.now();

            setCurrentTime(now);
            finalTime.current = now + duration;

            intervalID.current = setInterval(() => {
                setCurrentTime(prevTime => {
                    const currTime = Date.now();
                    transitionDuration.current = currTime - prevTime;
                    return currTime;
                });
            }, 1000); 
        }

        return clearTimer;
    }, [on]);

    useEffect(() => {
        if (currentTime >= finalTime.current) {
            clearTimer();

            const timeout = setTimeout(() => {
                // move to next page
            }, transitionDuration.current);

            return () => clearTimeout(timeout);
        }
    }, [currentTime]);

    return (
        <div className="max-w-[640px] w-full bg-white sm:rounded-full border-b-2 border-slate-300 sm:border-white sm:mb-3 h-6 overflow-hidden">
            <div 
                style={{ 
                    width: finalTime.current ? `${100 - (finalTime.current - currentTime) / duration * 100}%` : 0,
                    transitionDuration: `${transitionDuration.current}ms`
                }}
                className="h-full bg-emerald-300 transition-[width] ease-linear"
            />
        </div>
    )
}