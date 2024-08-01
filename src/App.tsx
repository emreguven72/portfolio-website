import AboutMe from './components/AboutMe';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import './index.css';


function App() {
  return (
    <div className='flex flex-col bg-slate-200'>
      <Navbar />
      <div className='flex flex-col'>
        <HomeSection />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
