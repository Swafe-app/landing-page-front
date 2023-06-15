import './Footer.scss';
import SwafeLogoFull from '../../assets/SwafeFullLogo.png';
import { useState } from 'react';

function Footer() {
  const [inputValues, setInputValues] = useState('');

  const handleInputChange = (event) => {
    setInputValues(event.target.value);
  };

  return (
    <section id='section-7' className='footer'>
      <div className='logo-newsletter-container'>
        <img src={SwafeLogoFull} alt='Swafe logo full' />
        <div className='newsletter-container'>
          <span>Inscrivez-vous à la newsletter pour ne rien manquer</span>
          <form onSubmit={(e) => e.preventDefault()} className='fieldsRow'>
            <div className='containerField'>
              <input
                required
                autoComplete="email"
                type='email'
                id='E-mail'
                onChange={handleInputChange}
                className={inputValues ? "filled" : ""}
              />
              <label htmlFor="E-mail">E-mail</label>
            </div>
            <button>M’inscrire</button>
          </form>
        </div>
      </div>
      <div className='links-container'>
        <div className='list-links'>
          <a href='#'>Mention légales</a>
          <a href='#'>Cookies</a>
          <a href='#'>Confidentialité</a>
        </div>
        <div className='contactus-container'>
          <span>Un problème ou une question ?</span>
          <a href='#'>Contactez-nous</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
