import './SectionList.scss';

const sectionListData = [
  {
    color: '#FFFFFF',
    title: 'EFFRAYANT ?',
    subTitle: 'Marcher seul ne devrait pas l’être'
  },
  {
    color: '#FFFFFF',
    title: 'DANGEREUX ?',
    subTitle: 'La map intéractive vous permet de connaître les zones de danger et de les éviter.'
  },
  {
    color: '#FFFFFF',
    title: 'BESOIN D’AIDE ?',
    subTitle: 'Appeler facilement les autorités.'
  },
  {
    color: '#FFFFFF',
    title: 'NOTRE PROMESSE ?',
    subTitle: 'On vous assure une prise de contact directe avec les autorités compétentes.'
  },
  {
    color: '#012741',
    title: 'L’UNION FAIT LA... ?',
    subTitle: 'Plus notre communauté préviendra les dangers, plus ils seront évités.'
  }
];

function SectionList() {
  return (
    <>
      {
        sectionListData.map((blockData, index) => (
          <section key={index} className='sectionApp' style={{ color: blockData.color }}>
            <h2 className='sectionTitle'>{blockData.title}</h2>
            <span className='subTitle'>{blockData.subTitle}</span>
          </section>
        ))
      }
    </>
  )
}

export default SectionList;
