import React, {useState,useEffect} from 'react';
import './App.css';
// import Quotes from './Quotes';
import QuoteCard from './QuoteCard';

function App() {

const[fetchQuotes, setFetchQuotes]= useState([]);

function setQuotes (){
  setFetchQuotes(fetchQuotes);
}

useEffect(()=>{
  fetch('https://ekipkalir-quote-server.glitch.me/quotes')
  .then(response => response.json())
  .then(data => setFetchQuotes(data))
  .catch(error => console.log(error));

},[]);

  return (
    <div className="App">
  {fetchQuotes.map(q => (
    <QuoteCard key={q.quote} quote={q.quote} author={q.author}/>
  ))}
    </div>
  );
}

export default App;
