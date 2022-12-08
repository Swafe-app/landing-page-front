import { ReactComponent as CheckCircle } from '../../assets/checkCircle.svg';
import { useState } from 'react';
import './Section4.scss';

function Section4() {
  const [email, setEmail] = useState('');
  const [posted, setPosted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ msg: '', status: false });

  const submitMail = (e) => {
    e.preventDefault();
    if (!email) return setError({ msg: 'Veuillez entrer un email valide', status: true })

    // Header
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Request option
    let requestOptions = {
      method: 'POST',
      headers: myHeaders
    };

    // fetch('http://10.58.129.49:8000/token/', requestOptions)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     if (!res?.data?.csrf_token) return setError({ msg: 'Jeton vide, ou non autorisé', status: true })

    //     let token = res.data.csrf_token;
    requestOptions.body = JSON.stringify({ email: email });

    if (!loading) {
      setLoading(true);
      fetch('https://api.swafe.app/user/add/', requestOptions)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setLoading(false);
          if (res.status_code !== 200) {
            setError({ msg: res.data.errors[0].message, status: true })
          } else {
            setError({ msg: '', status: false })
            setPosted(true)
            setTimeout(() => {
              setPosted(false)
            }, 6000);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
          if (err?.data?.message) setError({ msg: err.data.message, status: true })
        })
    }
    // })
    // .catch(err => {
    //   console.log(JSON.stringify(err));
    // })
  }

  return (
    <section className="sectionApp sec4" id="section4">
      <div className='secTitle'>
        <h3 className='headlineXLarge textGradientCyan'>Suivez-nous dans notre projet</h3>
        <h4 className='bodyXLarge'>Suivez notre projets de A à Z pour rassurer vos déplacements et être avertis sur nos avancées et nos fonctionnalités. SWAFE déplacez vous avec le sourire.</h4>
      </div>
      <form onSubmit={submitMail} className='inputContainer'>
        <div className='inputBox'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`textInput ${error.status ? 'error' : ''}`}
            placeholder='Adresse e-mail*'
          />
          {error.status && <span>{error.msg}</span>}
        </div>
        <button type='submit' className='bodyXXLarge'>
          {loading ? 'Loading...' : 'Rester informé.e'}
        </button>
      </form>
      <div className={`snackbar ${posted && 'display'}`}>
        <div className='svgCont'>
          <CheckCircle />
        </div>
        <div className='text'>
          <span className='bodyXXLarge'>Merci pour votre soutien.<br />Votre e-mail a bien été envoyé.</span>
        </div>
      </div>
    </section>
  )
}

export default Section4;
