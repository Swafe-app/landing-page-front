import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SectionList from './components/SectionList/SectionList';
import Lottie from 'lottie-react';
import stickmanWalkAnimation from './assets/StickmanWalk.json';
import './style/global-variable.scss';
import './style/reset.scss';
import './style/typo.scss';
import './App.scss';

function App() {
  return (
    <div>
      <div className='mainContainer'>
        <Navbar />
        <Header />
        <SectionList />
        <Lottie
          className='stickman'
          animationData={stickmanWalkAnimation}
          loop={true}
        />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
