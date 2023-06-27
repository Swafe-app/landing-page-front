import { useEffect, useState } from 'react';
import StickmanWalkRed from '../../assets/StickmanWalkRed.json'
import StickmanWalkShadow from '../../assets/StickmanWalkShadow.json'
import { useScrollSection } from '../../hooks/ScrollSection/ScrollSection';
import Lottie from 'lottie-react';

const data = {
  color: '#FFFFFF',
  title: 'EFFRAYANT ?',
  subTitle: 'Marcher seul ne devrait pas l’être',
  scenario: [
    {
      animationData: StickmanWalkRed,
      timeStart: 2500,
      duration: 2500
    }
  ]
};

function Section1() {
  const { currentSectionIndex } = useScrollSection();
  const [stickmanDisplay, setStickmanDisplay] = useState(false);

  useEffect(() => {
    if (currentSectionIndex === 1) {
      setTimeout(() => {
        setStickmanDisplay(true);
        setTimeout(() => {
          setStickmanDisplay(false);
        }, data.scenario[0].duration);
      }, data.scenario[0].timeStart)
    }
  }, [currentSectionIndex])

  return (
    <section
      id="section-1"
      className='sectionApp'
      style={{ color: data.color }}
    >
      <h2 className='sectionTitle'>{data.title}</h2>
      <span className='subTitle'>{data.subTitle}</span>
      <Lottie
        className={`stickman-shadow-red ${stickmanDisplay ? 'display' : ''}`}
        animationData={StickmanWalkShadow}
        loop={true}
      />
      <Lottie
        className={`stickman-red ${stickmanDisplay ? 'display' : ''}`}
        animationData={data.scenario[0].animationData}
        loop={true}
      />
    </section>
  )
}

export default Section1;
