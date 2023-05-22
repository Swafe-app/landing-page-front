import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './style/global-variable.scss';
import './style/reset.scss';
import './style/typo.scss';

function App() {
  return (
    <div>
      <div className='mainContainer'>
        <Navbar />
        <Header />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
