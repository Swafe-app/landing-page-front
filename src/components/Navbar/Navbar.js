import './Navbar.scss';
import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/LinkedinIcon.svg';
import SwafeLogo from '../../assets/SwafeLogo.png';
import { useScrollSection } from '../../hooks/ScrollSection/ScrollSection';
import { useEffect, useState } from 'react';

function Navbar() {
  const { currentSectionIndex } = useScrollSection();
  const [displayNavbar, setDisplayNavbar] = useState(true);

  useEffect(() => {
    if (currentSectionIndex === 6) {
      setDisplayNavbar(false);
    } else {
      setDisplayNavbar(true);
    };
  }, [currentSectionIndex])

  return (
    <nav className={`navbar ${displayNavbar ? 'visible' : 'none'}`}>
      <div className='logoContainer'>
        <img src={SwafeLogo} alt='Swafe logo' />
      </div>

      <ul className='active'>
        <li>
          <a className='bodyLarge' href='#temp'>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a className='bodyLarge' href='https://www.instagram.com/swafe.app/'>
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a className='bodyLarge' href='https://www.linkedin.com/company/swafe-app'>
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
