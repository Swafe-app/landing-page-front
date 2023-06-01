import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import './SectionList.scss';

const sectionListData = [
  {
    color: '#FFFFFF',
    title: 'EFFRAYANT ?',
    subTitle: 'Marcher seul ne devrait pas l’être'
  },
  {
    color: '#FFFFFF',
    title: 'DANGEREUX ?',
    subTitle: 'La map intéractive vous permet de connaître les zones de danger et de les éviter.'
  },
  {
    color: '#FFFFFF',
    title: 'BESOIN D’AIDE ?',
    subTitle: 'Appeler facilement les autorités.'
  },
  {
    color: '#FFFFFF',
    title: 'NOTRE PROMESSE ?',
    subTitle: 'On vous assure une prise de contact directe avec les autorités compétentes.'
  },
  {
    color: '#012741',
    title: 'L’UNION FAIT LA... ?',
    subTitle: 'Plus notre communauté préviendra les dangers, plus ils seront évités.'
  }
];

function SectionList() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSection = useCallback((sectionIndex) => {
    const section = document.querySelector(`#section-${sectionIndex}`);

    isScrolling.current = true;
    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, []);

  const handleSectionIndexChange = useCallback((direction) => {
    if (isScrolling.current) return;

    if (direction > 0) {
      setCurrentSectionIndex((index) => Math.min(index + 1, sectionListData.length));
    } else {
      setCurrentSectionIndex((index) => Math.max(index - 1, 0));
    }
  }, []);

  const handleScroll = useCallback((event) => {
    handleSectionIndexChange(Math.sign(event.deltaY));
  }, [handleSectionIndexChange]);

  const handleArrowKey = useCallback((event) => {
    if ([40, 32, 39].includes(event.keyCode)) {
      handleSectionIndexChange(1);
    } else if ([38, 37].includes(event.keyCode)) {
      handleSectionIndexChange(-1);
    }
  }, [handleSectionIndexChange]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleArrowKey);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [handleScroll, handleArrowKey]);

  useEffect(() => {
    scrollToSection(currentSectionIndex);
  }, [currentSectionIndex, scrollToSection]);

  const sections = useMemo(() => sectionListData.map((blockData, index) => (
    <section
      key={index}
      id={`section-${index + 1}`}
      className='sectionApp'
      style={{ color: blockData.color }}
    >
      <h2 className='sectionTitle'>{blockData.title}</h2>
      <span className='subTitle'>{blockData.subTitle}</span>
    </section>
  )), []);

  return (
    <>
      {sections}
    </>
  );
}

export default SectionList;
