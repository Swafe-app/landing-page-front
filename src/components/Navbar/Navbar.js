import './Navbar.scss';
import { ReactComponent as SmalLogo } from '../../assets/logoSmall2000.svg';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <SmalLogo />
      </div>

      <ul className='active'>
        <li>
          <a className='bodyLarge' href='#temp'>Facebook icon</a>
        </li>
        <li>
          <a className='bodyLarge' href='#temp'>Instagram icon</a>
        </li>
        <li>
          <a className='bodyLarge' href='#temp'>Linkedin icon</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
