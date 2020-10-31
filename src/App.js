import React, {useState,useEffect} from 'react';
import './App.css';

function App() {

const[fetchQuotes, setFetchQuotes]= useState([]);

function handleQuotes (){
  console.log('hello');
  setFetchQuotes(fetchQuotes);
}

useEffect(()=>{
  fetch('https://cyf-ekipkalir-quotes-id.glitch.me/quotes/random')
  .then(response => response.json())
  .then(data => console.log(setFetchQuotes(data)))
  .catch(error => console.log(error));

},[]);

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
