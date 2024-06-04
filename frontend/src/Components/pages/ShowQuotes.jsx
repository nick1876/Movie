import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './ShowQuotes.module.css'

const ShowQuotes =() => {
    const params=useParams();  //To access the value of the parameters

    //To fetch the author and text on the basis of the id I'll use the useState() hook
    let [quote,setQuote]=useState({author:'',text:'',name:''})
    
    async function fetchQuote(){
        let res=await axios.get(`http://localhost:8080/movies/${params.id}`);
        let {author,text,name}=res.data;
        console.log(author);
        console.log(text);
        setQuote({author,text,name});
        // console.log(quote);
    }

    useEffect(()=>{
        fetchQuote();
    },[])

  return (
    <div className={styles['quote-container']}>
       <h1 className={styles['quote-author']}>{quote.name}</h1>
        <p className={styles['quote-text']}>{quote.text}</p>
        <h2 className={styles['quote-author']}>{quote.author}</h2>
    </div>
  )
}

export default ShowQuotes
