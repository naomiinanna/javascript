import './App.css';
import Helloworld from './components/HelloWorld/Helloworld';
import ListOfNames from './components/ListOfNames/ListOfNames';
import ListOfStars from './components/ListOfStars/ListOfStars';
import Navigation from './components/Navigation/Navigation';
import RandomQuote from './components/RandomQuote/RandomQuote';
import UserInformation from './components/UserInformation/UserInformation';

function App() {
  return (
    <div className="App">
      <Helloworld/>
      <ListOfNames/>
      <UserInformation/>
      <Navigation/>
      <ListOfStars/>
      <RandomQuote/>
    </div>
  );
}

export default App;
