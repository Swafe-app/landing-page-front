import { ReactComponent as MapTrifold } from '../../assets/mapTrifold.svg';
import { ReactComponent as PhoneCall } from '../../assets/phoneCall.svg';
import { ReactComponent as ArrowUpRight } from '../../assets/arrowUpRight.svg';
import './Section3.scss';

const cardList = [
  {
    title: "Une map interactive",
    desc: (
      <span>
        La map intéractive <span className='textBold'>affiche la position d’alerte</span> sous forme de pastille mise par un ou des utilisateurs.
        <br />
        <br />
        Plus une zone est signalée, plus la zone de danger grossit.
      </span>
    ),
    svg: <MapTrifold />
  },
  {
    title: "Un appel d'urgence",
    desc: (
      <span>
        Vous aurez la possibilité d’appeler rapidement les secours et/ou vos proches.
        <br />
        <br />
        <span className='textBold'>En situation de danger, chaque seconde compte.</span>
      </span>
    ),
    svg: <PhoneCall />
  }
]

function Section3() {
  return (
    <section className="sectionApp sec3" id="section3">
      <div className='secTitle'>
        <h3 className='headlineXLarge textGradientCyan'>Notre solution</h3>
        <h4 className='bodyXLarge'>Les fonctionnalités de notre application vous sont présentées en avant première</h4>
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

export default Section3;
