import React from 'react';

const QuoteCard =({quote, author})=>{

    
    return (

        <div className='card-div'>
            <h2 className='card-quote'>{quote}</h2>
            <span className='quote-author'>{author}</span>
        </div>
    );
};

export default QuoteCard;