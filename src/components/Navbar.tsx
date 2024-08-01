import { useEffect, useState } from "react";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="flex flex-row justify-between w-full bg-white border border-b-slate-300 items-center sticky top-0 z-20"
      style={{ padding: "15px 20% 15px 20%" }}
    >
      <h1 className="text-2xl font-2">Emre Güven</h1>
      <div className="flex gap-8 flex-row font-2 text-base">
        <a
          onClick={() => {
            setIndex(0);
          }}
          href="#"
        >
          <div className="flex flex-col items-center justify-center">
            <p>Home</p>
            <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 0 ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </a>
        <a
          onClick={() => {
            setIndex(1);
          }}
          href="#about-me-section"
        >
          <div className="flex flex-col items-center justify-center">
            <p>About Me</p>
            <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 1 ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </a>
        <a
          onClick={() => {
            setIndex(2);
          }}
          href="#"
        >
          <div className="flex flex-col items-center justify-center">
            <p>Experience</p>
            <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 2 ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </a>
        <a
          onClick={() => {
            setIndex(3);
          }}
          href="#"
        >
          <div className="flex flex-col items-center justify-center">
            <p>Services</p>
            <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 3 ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </a>
        <a
          onClick={() => {
            setIndex(4);
          }}
          href="#"
        >
          <div className="flex flex-col items-center justify-center">
            <p>Projects</p>
            <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 4 ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
