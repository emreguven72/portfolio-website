import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import './index.css';


function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col'>
        <HomeSection />
      </div>
    </div>
  );
}

export default App;
