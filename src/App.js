import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SectionList from './components/SectionList/SectionList';
import './style/global-variable.scss';
import './style/reset.scss';
import './style/typo.scss';

function App() {
  return (
    <div>
      <div className='mainContainer'>
        <Navbar />
        <Header />
        <SectionList />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
