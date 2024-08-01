import { useEffect, useState } from "react";

interface Progress {
  finalProgress: number;
}

const ProgressBar = ({ finalProgress }: Progress) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(finalProgress), 100);
  }, []);

  return (
    <div className="w-full rounded-lg border-2 flex items-center h-2 border-black">
      <div
          className="bg-black rounded-lg flex h-2 transition-all ease-in-out"
          style={{ width: `${progress}%`, transitionDuration: "3000ms" }}
        >
        </div>
        
    </div>
  );
};

export default ProgressBar;
