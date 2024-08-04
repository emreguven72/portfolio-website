import { useEffect, useState, useRef } from "react";

interface Progress {
  finalProgress: number;
}

const ProgressBar = ({ finalProgress }: Progress) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(finalProgress), 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [finalProgress]);

  return (
    <div className="w-full rounded-lg border-2 flex items-center h-2 border-black">
      <div
        ref={progressBarRef}
        className="bg-black rounded-lg flex h-2 transition-all ease-in-out"
        style={{ width: `${progress}%`, transitionDuration: "3000ms" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
