import './Navbar.scss';
import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/LinkedinIcon.svg';
import SwafeLogo from '../../assets/SwafeLogo.png';

function Navbar() {
  return (
    <nav className='navbar'>
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
