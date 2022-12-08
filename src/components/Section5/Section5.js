import { ReactComponent as StarIcon } from '../../assets/star.svg';
import perso1 from '../../assets/perso1.jpeg';
import perso2 from '../../assets/perso2.png';
import perso3 from '../../assets/perso3.jpeg';
import perso4 from '../../assets/perso4.jpeg';
import perso5 from '../../assets/perso5.jpeg';
import perso6 from '../../assets/perso6.png';
import './Section5.scss';
import './star.js';

const noteList = [
  {
    id: 1,
    description: "Appuyez 2 secondes sur un bouton SOS pour avertir vos proches du danger qui vous guette.",
  },
  {
    id: 2,
    description: "Entrez votre itinéraire pour faciliter vos déplacement tout en évitant les zones à risque",
  },
  {
    id: 3,
    description: "Appuyer 2 secondes sur un bouton SOS.",
  },
  {
    id: 4,
    description: "Appuyer 2 secondes sur un bouton SOS pour avertir vos proches du danger qui vous guette.",
  },
]

const profileList = [perso1, perso2, perso3, perso4, perso5, perso6]

function Section5() {
  return (
    <section className="sectionApp sec5" id="section5">
      <div className='secTitle'>
        <h3 className='headlineXLarge textGradientCyan'>Notre équipe est à votre écoute</h3>
        <h4 className='bodyXLarge'>Nous travaillons sur plusieurs fonctionnalités, mais nous souhaitons votre avis, c'est pour cela que vous pouvez noter les futures fonctionnalités afin de les prioriser.</h4>
      </div>
      <div className='voteContainer'>
        {noteList.map((card) => (
          <div className='noteCard' key={card.id}>
            <div>
              <span>{card.description}</span>
              <div className='starContainer'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='profileContainer'>
        {profileList.map((img, index) => (
          <img key={index} src={img} alt='profile' />
        ))}
      </div>
    </section>
  )
}

export default Section5;
