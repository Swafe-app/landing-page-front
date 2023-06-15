import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SectionList from './components/SectionList/SectionList';
import Footer from './components/Footer/Footer';
import Lottie from 'lottie-react';
import stickmanWalkAnimation from './assets/StickmanWalk.json';
import stickmanWalkAnimationShadow from './assets/StickmanWalkShadow.json';
import stickmanFallStartAnimation from './assets/StickmanFallStart.json';
import stickmanFallStartAnimationShadow from './assets/StickmanFallStartShadow.json';
import stickmanFallEndAnimation from './assets/StickmanFallEnd.json';
import stickmanFallEndAnimationShadow from './assets/StickmanFallEndShadow.json';
import './style/global-variable.scss';
import './style/reset.scss';
import './style/typo.scss';
import './App.scss';
import { useScrollSection } from './hooks/ScrollSection/ScrollSection';
import FormsSection from './components/Forms/Forms';

function App() {
  const { currentSectionIndex, scrollDirection } = useScrollSection();
  const [animationData, setAnimationData] = useState(stickmanWalkAnimation);
  const [animationDataShadow, setAnimationDataShadow] = useState(stickmanWalkAnimationShadow);
  const [isLoop, setIsLoop] = useState(true);

  useEffect(() => {
    if (isLoop && scrollDirection) {
      setAnimationData(stickmanFallStartAnimation);
      setAnimationDataShadow(stickmanFallStartAnimationShadow);
      setIsLoop(false);
      setTimeout(() => {
        setAnimationData(stickmanFallEndAnimation);
        setAnimationDataShadow(stickmanFallEndAnimationShadow);
        setTimeout(() => {
          setAnimationData(stickmanWalkAnimation);
          setAnimationDataShadow(stickmanWalkAnimationShadow);
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
        <FormsSection />
        <Lottie
          className='stickman-shadow'
          animationData={animationDataShadow}
          loop={isLoop}
        />
        <Lottie
          className='stickman'
          animationData={animationData}
          loop={isLoop}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
