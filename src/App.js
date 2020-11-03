import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

const[fetchQuotes, setFetchQuotes]= useState([]);
const [dependencyHook, setDependencyHook] = useState(false);



function handleQuotes (){
  setDependencyHook(!dependencyHook);
  setFetchQuotes(fetchQuotes);
}


useEffect(()=>{
  fetch('https://cyf-ekipkalir-quotes-id.glitch.me/quotes/random')
  .then(response => response.json())
  .then(data => setFetchQuotes(data))
  .catch(error => console.log(error));
  
},[dependencyHook]);

  return (
  
        <div className='card'>
          <div className='card-div'>
              <h2 className='card-quote'>{fetchQuotes.quote}</h2>
              <p className='quote-author'>{fetchQuotes.author}</p>
          </div>
          <button onClick={handleQuotes} className="btn btn-lg btn-primary btn-block message message-button" type="submit">Click for a Quote</button>
        </div>
  );
}

export default App;
