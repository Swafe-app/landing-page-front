import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ScrollContext = createContext();

export function ScrollSection() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const isScrolling = useRef(false);
  const sectionListRef = useRef(null);

  const setScrollHook = (pageIndex, direction) => {
    setCurrentSectionIndex(pageIndex);
    setScrollDirection(direction);
  };

  useEffect(() => {
    isScrolling.current = true;

    const section = document.querySelector(`#section-${currentSectionIndex}`);
    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.current = false;
    }, (!scrollDirection || [6, 7].includes(currentSectionIndex)) ? 0 : 3800);

  }, [scrollDirection, currentSectionIndex]);

  const handleSectionIndexChange = useCallback((direction) => {
    if (isScrolling.current) return;

    if (!sectionListRef.current) {
      sectionListRef.current = document.querySelectorAll('#mainContainer [id^="section-"]');
    }

    if (direction > 0) {
      setScrollDirection('down');
      setCurrentSectionIndex((index) => Math.min(index + 1, sectionListRef.current.length));
    } else {
      setScrollDirection('up');
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

  return { currentSectionIndex, scrollDirection, setScrollHook };
}

export function ScrollProvider({ children }) {
  const scrollSection = ScrollSection();

  return (
    <ScrollContext.Provider value={scrollSection}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollSection() {
  return useContext(ScrollContext);
}
