import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './index.css';


function App() {
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
