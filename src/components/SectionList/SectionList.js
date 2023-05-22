import { useEffect, useState } from 'react';
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

  const scrollToSection = (sectionIndex) => {
    const section = document.querySelector(`#section-${sectionIndex}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setCurrentSectionIndex((index) => Math.min(index + 1, sectionListData.length));
    } else {
      // Scrolling up
      setCurrentSectionIndex((index) => Math.max(index - 1, 0));
    }
  };

  const handleArrowKey = (event) => {
    if (event.keyCode === 40 || event.keyCode === 32 || event.keyCode === 39) {
      setCurrentSectionIndex((index) => Math.min(index + 1, sectionListData.length));
    } else if (event.keyCode === 38 || event.keyCode === 37) {
      setCurrentSectionIndex((index) => Math.max(index - 1, 0));
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleArrowKey);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, []);

  useEffect(() => {
    scrollToSection(currentSectionIndex);
  }, [currentSectionIndex]);

  return (
    <>
      {
        sectionListData.map((blockData, index) => (
          <section
            key={index}
            id={`section-${index + 1}`}
            className='sectionApp'
            style={{ color: blockData.color }}
          >
            <h2 className='sectionTitle'>{blockData.title}</h2>
            <span className='subTitle'>{blockData.subTitle}</span>
          </section>
        ))
      }
    </>
  )
}

export default SectionList;
