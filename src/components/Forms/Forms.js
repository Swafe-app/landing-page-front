import './Forms.scss';
import { ReactComponent as ArrowIcon } from '../../assets/ArrowIcon.svg';
import { useScrollSection } from '../../hooks/ScrollSection/ScrollSection';
import SwafeLogo from '../../assets/SwafeLogo.png';

function FormsSection() {
  const { setScrollHook } = useScrollSection();

  return (
    <section id='section-6' className='formsSection'>
      <div className='formsBeta'>
        <img src={SwafeLogo} alt='Swafe logo' />
        <div className='textContainer'>
          <span className='title'>DEVENEZ BETA TESTEUR</span>
          <span className='subTitle'>Testez l’application en avant première afin de nous aider à l’optimiser</span>
        </div>
        <div className='formsContent'>
          <div className='formsFields'>
            <div className='rowFields'>
              <div className='containerField'>
                <label htmlFor="phoneCode">Prénom</label>
                <input id='Prénom' />
              </div>
              <div className='containerField'>
                <label htmlFor="phoneCode">Nom</label>
                <input id='Nom' />
              </div>
            </div>
            <div className='containerField'>
              <label htmlFor="phoneCode">E-mail</label>
              <input id='E-mail' />
            </div>
            <div className='telephoneFields'>
              <div className='containerField phoneCode'>
                <select id="phoneCode">
                  <option value="+33">+33</option>
                  <option value="+12">+12</option>
                  <option value="+23">+23</option>
                  <option value="+34">+34</option>
                  <option value="+56">+56</option>
                  <option value="+78">+78</option>
                </select>
              </div>
              <div className='containerField'>
                <label htmlFor="phoneCode">Numéro de téléphone</label>
                <input id='phoneNumber' />
              </div>
            </div>
          </div>
          <button className='validateButton'>
            Devenir beta-testeur
          </button>
        </div>
      </div>
      <button onClick={() => setScrollHook(0, 'up')} className='arrowButton'>
        <ArrowIcon />
      </button>
    </section>
  );
}

export default FormsSection;
