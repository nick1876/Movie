import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewQuotes() {
  let navigate=useNavigate();
  let usernameInputRef=useRef();
  let quoteInputRef=useRef();
  let quoteInputRefe=useRef();

  const addQuoteHandler=async(e)=>{
    e.preventDefault();
    const author = usernameInputRef.current.value;
    const text = quoteInputRef.current.value;
    const name = quoteInputRefe.current.value;
    try {
      let res = await axios.post('http://localhost:8080/addmovies', {author,text,name})
      console.log(res);
      navigate('/');
    } 
    catch (e) {
      console.log("Cannot create a new Movie")
    }
  }
  return (
    <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>
      <div>
        <label htmlFor='author'>Author:</label>
        <input type="text" id='author' ref={usernameInputRef} placeholder="Author's Name"/>
      </div>
      <div>
        <label htmlFor="quote">Quote:</label>
        <textarea id="quote" ref={quoteInputRef} cols={15} rows={4} placeholder="Description"></textarea>
      </div>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type="text" id='name' ref={quoteInputRefe} placeholder="Movie Name"/>
      </div>
      <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes