import { useEffect, useState } from "react";
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";

function App() {

  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(resolve => resolve.json())
      .then(object => {
        console.log(object);
        setProducts(object);
      })
  }, []);

  return (
    <div className="App">
      <ul>
        {products.length === 0 ? null : products.map(p => <li>{p.title}</li>) }
      

      </ul>
    </div>
  )
}

export default App;


//getAllProducts
//searchProducts

//        { quotes.map(p => <li>{p.title}</li>) }
