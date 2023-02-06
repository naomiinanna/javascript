import './App.css';

import Header from './Header/Header';
import Article from './Article/Article'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
    <Header person={{
      name: 'Naomi Feld',
      mail: 'naomi.feld@adesso.de',
    }

    }/>
    <Article person = {{
      name: 'Naomi',
      height: 163,
    }} />
    <Footer />
    </div>);
}

export default App;
