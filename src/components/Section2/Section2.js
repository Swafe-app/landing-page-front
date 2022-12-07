import { ReactComponent as PersonWalk } from '../../assets/personWalk.svg';
import { ReactComponent as MapPin } from '../../assets/mapPin.svg';
import { ReactComponent as WarningCircle } from '../../assets/warningCircle.svg';
import { ReactComponent as Community } from '../../assets/community.svg';
import { ReactComponent as ArrowUpRight } from '../../assets/arrowUpRight.svg';
import './Section2.scss';

const cardList = [
  {
    title: "Marcher seul",
    desc: "ne devrait pas être effrayant",
    svg: <PersonWalk />
  },
  {
    title: "Ayez de l’avance",
    desc: "Certains dangers peuvent être connus et évités",
    svg: <MapPin />
  },
  {
    title: "Alertez les autres",
    desc: "ne devrait pas être effrayant",
    svg: <WarningCircle />
  },
  {
    title: "SOS",
    desc: (
      <span>
        Demander de l’aide à un proche ou à la <span className='linkText'>DCSP</span> facilement et rapidement.
      </span>
    ),
    svg: <Community />
  }
]

function Section2() {
  return (
    <section className="sectionApp sec2">
      <div className='sec2Title'>
        <h3 className='headlineXLarge gradientCyan'>Le concept, très rapidement</h3>
        <h4 className='bodyXLarge'>Plus notre communauté préviendra des dangers, plus ils seront évités.</h4>
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
