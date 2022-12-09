import { ReactComponent as CheckCircle } from '../../assets/checkCircle.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import perso1 from '../../assets/perso1.jpeg';
import perso2 from '../../assets/perso2.png';
import perso3 from '../../assets/perso3.jpeg';
import perso4 from '../../assets/perso4.jpeg';
import perso5 from '../../assets/perso5.jpeg';
import perso6 from '../../assets/perso6.png';
import './Section5.scss';
import './star.js';
import { useEffect, useState } from 'react';

// const noteList = [
//   {
//     id: 1,
//     description: "Appuyez 2 secondes sur un bouton SOS pour avertir vos proches du danger qui vous guette.",
//   },
//   {
//     id: 2,
//     description: "Entrez votre itinéraire pour faciliter vos déplacement tout en évitant les zones à risque",
//   },
//   {
//     id: 3,
//     description: "Appuyer 2 secondes sur un bouton SOS.",
//   },
//   {
//     id: 4,
//     description: "Appuyer 2 secondes sur un bouton SOS pour avertir vos proches du danger qui vous guette.",
//   },
// ]

const profileList = [perso1, perso2, perso3, perso4, perso5, perso6]

function Section5() {
  const [noteList, setNoteList] = useState(null)
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    fetch('https://api.swafe.app/idea/')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status_code === 200) {
          setNoteList(res.data.ideas)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const postNote = (ideaId, numStar) => {
    // Header
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Request option
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ id: ideaId, note: numStar })
    };

    fetch('https://api.swafe.app/idea/note/', requestOptions)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status_code === 200) {
          setNoteList(data => {
            let findIdea = data.find(e => e.id === ideaId)
            findIdea.star = numStar;
            findIdea.disable = true;
            return data
          })
          setPosted(true)
          setTimeout(() => {
            setPosted(false)
          }, 6000);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <section className="sectionApp sec5" id="section5">
      <div className='secTitle'>
        <h3 className='textHeadline textGradientCyan'>Notre équipe est à votre écoute</h3>
        <h4 className='textBody'>Nous travaillons sur plusieurs fonctionnalités, mais nous souhaitons votre avis, c'est pour cela que vous pouvez noter les futures fonctionnalités afin de les prioriser.</h4>
      </div>
      <div className='voteContainer'>
        {noteList ? (
          noteList.map((card) => (
            <div className={`noteCard ${card.disable ? 'disable' : ''}`} key={card.id}>
              <div>
                <span>{card.description}</span>
                <div className='starContainer'>
                  <StarIcon className={card.star >= 1 ? 'active' : ''} onClick={() => card.star >= 1 ? false : postNote(card.id, 1)} />
                  <StarIcon className={card.star >= 2 ? 'active' : ''} onClick={() => card.star >= 2 ? false : postNote(card.id, 2)} />
                  <StarIcon className={card.star >= 3 ? 'active' : ''} onClick={() => card.star >= 3 ? false : postNote(card.id, 3)} />
                  <StarIcon className={card.star >= 4 ? 'active' : ''} onClick={() => card.star >= 4 ? false : postNote(card.id, 4)} />
                  <StarIcon className={card.star >= 5 ? 'active' : ''} onClick={() => card.star >= 5 ? false : postNote(card.id, 5)} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='noteCard'>
            <div>
              <span>Impossible de récupérer les propositions...</span>
            </div>
          </div>
        )}
      </div>
      <div className='profileContainer'>
        {profileList.map((img, index) => (
          <img key={index} src={img} alt='profile' />
        ))}
      </div>      <div className={`snackbar ${posted && 'display'}`}>
        <div className='svgCont'>
          <CheckCircle />
        </div>
        <div className='text'>
          <span className='textBody'>Merci pour votre soutien.<br />Votre vote a bien été envoyé.</span>
        </div>
      </div>
    </section>
  )
}

export default Section5;
