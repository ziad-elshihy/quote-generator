import './App.css';
import React, { useState } from 'react';
import { WhatsappShareButton, TwitterShareButton, TwitterIcon, WhatsappIcon } from 'react-share';

const App = () => {
   const url = "https://api.quotable.io/random";
   let quoteData = {
      content: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
   }
   const [quote, setQuote] = useState(quoteData)

   const generateQuote = () => {
      fetch(url)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setQuote(data)
         });
   }

   const copy = () => {
      navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
      alert('copied')
   }


   return (
      <>
         <h1>Quote Generator React App</h1>
         <div className="container">
            <p>{quote.content}</p>
            <span>{quote.author}</span>
            <div className="btns">
               <button onClick={copy} className="btn">Copy</button>
               <button onClick={generateQuote}>Generate Another Quote</button>
            </div>
         </div>
         <div className='share-btn'>
            <WhatsappShareButton url={quote.content}>
               <WhatsappIcon className='child' size={50} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton url={quote.content} hashtags={[quote.author]}>
               <TwitterIcon className='child' size={50} round={true} />
            </TwitterShareButton>
         </div>
      </>
   )
}


export default App;
