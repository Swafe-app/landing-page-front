import './Section1.scss';
import { ReactComponent as SmalLogo } from '../../assets/logoSmall2000.svg';
import { ReactComponent as MenuIcon } from '../../assets/list2.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { useState } from 'react';

function Section1() {
  const [open, setOpen] = useState(false);

  return (
    <section className="sectionApp sec1">
      <nav className='navbar'>
        <div className='logoContainer'>
          <SmalLogo />
        </div>
        <div onClick={() => open ? setOpen(false) : setOpen(true)} className='menuBurger'>
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={open ? 'active' : ''}>
          <li>
            <a className='bodyLarge' href='#section2'>Notre Concept</a>
          </li>
          <li>
            <a className='bodyLarge' href='#section3'>Notre Solution</a>
          </li>
          <li>
            <a className='bodyLarge' href='#section4'>Suivez-nous</a>
          </li>
          <li>
            <a className='bodyLarge' href='#section5'>Notre équipe</a>
          </li>
        </ul>
      </nav>
      <h1 className='textDisplay'>Il n’a jamais été aussi simple d’aller d'un point <span className='textLightBlue'>A</span> à un point <span className='textLightGreen'>B</span> en toute <span className='textGradientCyan'>sécurité</span></h1>
    </section>
  )
}

export default Section1;
