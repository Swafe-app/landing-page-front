import { ReactComponent as PersonWalk } from '../../assets/personWalk.svg';
import { ReactComponent as MapPin } from '../../assets/mapPin.svg';
import { ReactComponent as WarningCircle } from '../../assets/warningCircle.svg';
import { ReactComponent as Community } from '../../assets/community.svg';
import { ReactComponent as ArrowUpRight } from '../../assets/arrowUpRight.svg';
import './Section2.scss';

const cardList = [
  {
    title: "Efrrayant ?",
    desc: "Marcher seul ne devrait pas l’être",
    svg: <PersonWalk />
  },
  {
    title: "Des dangers ?",
    desc: "Ils peuvent être connu et évités",
    svg: <MapPin />
  },
  {
    title: "Zones à éviter ?",
    desc: "Il sera facile d’alerter des dangers",
    svg: <WarningCircle />
  },
  {
    title: "Besoin d’aide ?",
    desc: (
      <span>
        Appeler un proche ou <span className='linkText'>DCSP</span> facilement et rapidement
      </span>
    ),
    svg: <Community />
  }
]

function Section2() {
  return (
    <section className="sectionApp sec2" id="section2">
      <div className='secTitle'>
        <h3 className='headlineXLarge textGradientCyan'>Le concept, très rapidement</h3>
        <h4 className='bodyXLarge'>Plus notre communauté préviendra des dangers, plus ils seront évités.
        </h4>
      </div>
      <div className="cardContainer">
        {cardList.map((card, i) => (
          <div className="cardLink" key={i}>
            <div className='svg'>
              {card.svg}
            </div>
            <div className='text'>
              <span className='titleXLarge'>{card.title}</span>
              <span className='bodyLarge'>{card.desc}</span>
            </div>
            <div className='end'>
              <ArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2;
