import './Section1.scss';
import smalLogo from '../../assets/logoSmall2000.png';

function Section1() {
  return (
    <section className="sectionApp sec1">
      <nav className='navbar'>
        <div className='logoContainer'>
          <img src={smalLogo} alt='Logo' />
        </div>
        <ul>
          <li>
            <a className='bodyLarge' href='http://localhost:3000'>Notre Concept</a>
          </li>
          <li>
            <a className='bodyLarge' href='http://localhost:3000'>Notre Solution</a>
          </li>
          <li>
            <a className='bodyLarge' href='http://localhost:3000'>Suivez-nous</a>
          </li>
          <li>
            <a className='bodyLarge' href='http://localhost:3000'>Notre équipe</a>
          </li>
        </ul>
      </nav>
      <h1 className='displayXLarge'>Il n’a jamais été aussi simple d’aller d'un point <span className='textLightBlue'>A</span> à un point <span className='textLightGreen'>B</span> en toute <span className='textGradientCyan'>sécurité</span></h1>
    </section>
  )
}

export default Section1;
