import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref as any}>
      {count}{suffix}
    </span>
  );
}
