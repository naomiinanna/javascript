import './App.css';
import { useState } from "react";
import Buttons from './Buttons/Buttons';
import Result from './Result/Result';

function App() {
  const [result, setResult] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <Result resultP = {result}/>
      <Buttons resultP = {result} setResult = {setResult}/>
    </div>
  );
}

export default App;
