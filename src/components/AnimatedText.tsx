import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }: any) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if(currentText.length === 1) {
        setCurrentIndex(1);
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      if(currentText === text) {
        setTimeout(() => {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
                setCurrentIndex((prevIndex) => prevIndex + 1);
              }, delay);
        
              return () => clearTimeout(timeout);
          }, 5000);
      } else {
        const timeout = setTimeout(() => {
            setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, delay);
    
          return () => clearTimeout(timeout);
      }
    }
     

  }, [currentIndex, delay, text]);

  return (
    <span className="text-4xl font-bold font-1 text-blue-500">{currentText}</span>
  );
};

export default Typewriter;
