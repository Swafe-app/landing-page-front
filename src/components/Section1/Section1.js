import './Section1.scss';
import { ReactComponent as SmalLogo } from '../../assets/logoSmall2000.svg';

function Section1() {
  return (
    <section className="sectionApp sec1">
      <nav className='navbar'>
        <div className='logoContainer'>
          <SmalLogo />
        </div>
        <ul>
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
      <h1 className='displayXLarge'>Il n’a jamais été aussi simple d’aller d'un point <span className='textLightBlue'>A</span> à un point <span className='textLightGreen'>B</span> en toute <span className='textGradientCyan'>sécurité</span></h1>
    </section>
  )
}

export default Section1;
