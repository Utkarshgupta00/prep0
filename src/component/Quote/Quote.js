import {React, useEffect, useState }from 'react'
import './Quote.css'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1708aa571dmsh8a46a266cfebafbp1345aajsnb2e8605855d7',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

const Test = () => {

  const [response,setResponse] = useState();
  useEffect(()=>{
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => setResponse(response.content))
    .catch(err => console.error(err));
  
  },[])

  return (
    <>
    <h1 className="HN_heading">Daily Quote</h1>
    <div className="daily_quote">
      <div className="quote_box">"{
        response ? response : "Don't wait for the opportunity, create it"
      }"</div>
    </div>
    </>
  )
}

export default Test