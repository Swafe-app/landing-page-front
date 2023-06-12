import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SectionList from './components/SectionList/SectionList';
import Lottie from 'lottie-react';
import stickmanWalkAnimation from './assets/StickmanWalk.json';
import stickmanFallStartAnimation from './assets/StickmanFallStart.json';
import stickmanFallEndAnimation from './assets/StickmanFallEnd.json';
import './style/global-variable.scss';
import './style/reset.scss';
import './style/typo.scss';
import './App.scss';
import { useScrollSection } from './components/ScrollSection/ScrollSection';

function App() {
  const { currentSectionIndex, scrollDirection } = useScrollSection();
  const [animationData, setAnimationData] = useState(stickmanWalkAnimation);
  const [isLoop, setIsLoop] = useState(true);

  useEffect(() => {
    if (isLoop && scrollDirection) {
      setAnimationData(stickmanFallStartAnimation);
      setIsLoop(false);
      setTimeout(() => {
        setAnimationData(stickmanFallEndAnimation);
        setTimeout(() => {
          setAnimationData(stickmanWalkAnimation);
          setIsLoop(true);
        }, 2800);
      }, 1000);
    }
  }, [currentSectionIndex]);

  return (
    <div>
      <div id='mainContainer' className='mainContainer'>
        <Navbar />
        <Header />
        <SectionList />
        <Lottie
          className='stickman'
          animationData={animationData}
          loop={isLoop}
        />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
