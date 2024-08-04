import { useState } from "react";

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between w-full bg-white border border-b-slate-300 items-center sticky top-0 z-20" style={{ padding: "15px 20% 15px 20%" }}>
      <h1 className="text-2xl font-4">Emre Güven</h1>
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-black focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <div className={`fixed inset-0 bg-white z-10 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex md:items-center`}>
        <div className="flex flex-col md:flex-row gap-8 font-4 text-base">
          <a onClick={() => { setIndex(0); setIsOpen(false); }} href="#">
            <div className="flex flex-col items-center justify-center">
              <p>Home</p>
              <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 0 ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </a>
          <a onClick={() => { setIndex(1); setIsOpen(false); }} href="#about-me">
            <div className="flex flex-col items-center justify-center">
              <p>About Me</p>
              <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 1 ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </a>
          <a onClick={() => { setIndex(2); setIsOpen(false); }} href="#projects">
            <div className="flex flex-col items-center justify-center">
              <p>Projects</p>
              <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 2 ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </a>
          <a onClick={() => { setIndex(3); setIsOpen(false); }} href="#experiences">
            <div className="flex flex-col items-center justify-center">
              <p>Experience</p>
              <div className={`h-2 w-2 rounded-full bg-blue-400 ${index != 3 ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
