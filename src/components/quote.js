import React, { Component } from 'react';
import {useState , useEffect } from 'react';
import './quote.css'

function Quote (){

    const [quote, setQuote] = useState({quoteAuthor:"",quoteText:""});
    const [color, setColor] = useState("color1");

    useEffect(()=>{
        fetch('https://quota.glitch.me/random').then((res)=>res.json()).then((data)=>{ 
             setQuote(data)})
    },[])

    useEffect(()=>{
       let random= Math.floor((Math.random() * 10) + 1);
       setColor(`color${random}`);
    },[quote])

    return (
        <div className={"transition main "+color}>
            <div className={"quoteContainer clearfix "}>
               <h3>Quote me</h3>
                <p className="quoteBody blockquote">{quote.quoteText}</p>
                <p  className="clearfix quoteFooter"><span>{"- "+quote.quoteAuthor}</span></p>
                <p className="clearfix">
                 <a className="tweet" href={"https://twitter.com/intent/tweet?text=" + quote.quoteText + " by " + quote.quoteAuthor +"&hashtags=famousQuotes"} data-size="large" target="_blank">
                    <span className={"transition fa fa-twitter "+color}></span>
                 </a>
                 <button type="button" className={"transition btn "+color} style={{color:"white"}}  onClick={()=>getNewQuote()}>New Quote</button>
              </p>           
            </div>
        </div>
    )

    function getNewQuote(){
        fetch('https://quota.glitch.me/random')
        .then((res)=>res.json())
        .then((data)=>{ 
            setQuote(data)})    
    }

}


export default Quote;