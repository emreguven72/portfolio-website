import { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './index.css';
import { useLanguage } from './providers/LanguageProvider';


function App() {
  const { language }: any = useLanguage();

  useEffect(() => {
  }, [language])
  

  return (
    <div className='flex flex-col bg-white'>
      <Navbar />
      <div className='flex flex-col'>
        <HomeSection />
        <AboutMe />
        <Projects />
        <Experiences />
      </div>
    </div>
  );
}

export default App;
