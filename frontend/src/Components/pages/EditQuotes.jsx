import React, { useEffect, useRef} from 'react'
import styles from './NewQuotes.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
// import {useNavigate} from 'react-router-dom'

const EditQuotes = () => {
    const params=useParams();
    let usernameInputRef=useRef();
    let quoteInputRef=useRef();
    let quoteInputRefe=useRef();
    const navigate=useNavigate();

    //Finding the Quote by Id
    async function fetchQuote() {
        try {
            const res = await axios.get(`http://localhost:8080/movies/${params.id}`);
            const { author, text ,name } = res.data;
            usernameInputRef.current.value = author;
            quoteInputRef.current.value = text;
            usernameInputRefe.current.value = name;
        } catch (error) {
            console.log("Cannot fetch the quote");
        }
    }

    useEffect(()=>{
        fetchQuote();
    },[])

    //Performing actual changes in Database while editing
    async function editQuoteHandler(e){
        e.preventDefault();
        const author=usernameInputRef.current.value;
        const text=quoteInputRef.current.value;
        const name=quoteInputRefe.current.value;
        try{
            let res= await axios.patch(`http://localhost:8080/movies/${params.id}`,{author,text,name});
            console.log(res);
        }
        catch(e){
            console.log("Cannot edit the movie");
        }
        navigate('/');
    }
  return (
    <form onSubmit={editQuoteHandler}className={styles['new-quote-form']}>
    <h3>Edit Quote</h3>
      <div>
        <label htmlFor='author'>Author:</label>
        <input type="text" id='author' ref={usernameInputRef} placeholder="Author's Name"/>
      </div>
      <div>
        <label htmlFor="quote">Des:</label>
        <textarea id="quote" ref={quoteInputRef} cols={15} rows={4} placeholder="Author's Quote" ></textarea>
      </div>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type="text" id='name' ref={quoteInputRefe} placeholder="Movie Name"/>
      </div>
      <button>Edit Quote</button>
    </form>
  )
}

export default EditQuotes
