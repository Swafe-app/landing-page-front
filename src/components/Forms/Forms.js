import React, { useState, useEffect } from "react";
import './Forms.scss';
import { ReactComponent as ArrowIcon } from '../../assets/ArrowIcon.svg';
import { useScrollSection } from '../../hooks/ScrollSection/ScrollSection';
import SwafeLogo from '../../assets/SwafeLogo.png';

function FormsSection() {
  const { setScrollHook } = useScrollSection();

  const [inputValues, setInputValues] = useState({
    Prénom: "",
    Nom: "",
    "E-mail": "",
    phoneNumber: "",
    phoneCode: "+33",
  });

  const [inputState, setInputState] = useState({
    Prénom: false,
    Nom: false,
    "E-mail": false,
    phoneNumber: false,
  });

  useEffect(() => {
    const inputFilledState = {};
    for (const [inputName, inputValue] of Object.entries(inputValues)) {
      inputFilledState[inputName] = inputValue !== "";
    }
    setInputState(inputFilledState);
  }, [inputValues]);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <section id='section-6' className='formsSection'>
      <form onSubmit={(e) => e.preventDefault()} className='formsBeta'>
        <img src={SwafeLogo} alt='Swafe logo' />
        <div className='textContainer'>
          <span className='title'>DEVENEZ BETA TESTEUR</span>
          <span className='subTitle'>Testez l’application en avant première afin de nous aider à l’optimiser</span>
        </div>
        <div className='formsContent'>
          <div className='formsFields'>
            <div className='rowFields'>
              <div className='containerField'>
                <input
                  required
                  autoComplete="given-name"
                  id='Prénom'
                  onChange={handleInputChange}
                  className={inputState.Prénom ? "filled" : ""}
                />
                <label htmlFor="Prénom">Prénom*</label>
              </div>
              <div className='containerField'>
                <input
                  autoComplete="family-name"
                  id='Nom'
                  onChange={handleInputChange}
                  className={inputState.Nom ? "filled" : ""}
                />
                <label htmlFor="Nom">Nom</label>
              </div>
            </div>
            <div className='containerField'>
              <input
                required
                autoComplete="email"
                id='E-mail'
                onChange={handleInputChange}
                className={inputState["E-mail"] ? "filled" : ""}
              />
              <label htmlFor="E-mail">E-mail*</label>
            </div>
            <div className='telephoneFields'>
              <div className='containerField phoneCode'>
                <select id="phoneCode" onChange={handleInputChange}>
                  <option value="+33">+33</option>
                  <option value="+12">+12</option>
                  <option value="+23">+23</option>
                  <option value="+34">+34</option>
                  <option value="+56">+56</option>
                  <option value="+78">+78</option>
                </select>
              </div>
              <div className='containerField'>
                <input
                  autoComplete="tel-national"
                  id='phoneNumber'
                  onChange={handleInputChange}
                  className={inputState.phoneNumber ? "filled" : ""}
                />
                <label htmlFor="phoneNumber">Numéro de téléphone</label>
              </div>
            </div>
          </div>
          <button type="submit" className='validateButton'>
            Devenir beta-testeur
          </button>
        </div>
      </form>
      <button onClick={() => setScrollHook(0, 'up')} className='arrowButton'>
        <ArrowIcon />
      </button>
    </section >
  );
}

export default FormsSection;
