import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from '../Quote/Quote';
import {useNavigate } from 'react-router-dom';

function AllQuotes() {
  let[quotes,setQuotes]=useState([]);
  const navigate=useNavigate();
  const token=localStorage.getItem("token");
  {!token && navigate('/login')}

  async function getQuotes(){
    let res=await axios.get('http://localhost:8080/allmovies');
    // console.log(res);
    setQuotes(res.data);
  }

  useEffect(()=>{
    getQuotes();
  },[])

  return (
    <div>
      <h2 style={{marginLeft:'45%'}}>All Movies</h2>
      <ul>
        {
          quotes.map((quote,index)=>{
            return <Quote key={quote._id} author={quote.author} text={quote.text} id={quote._id} name={quote.name}/>
          })
        }
      </ul>
    </div>
  )
}

export default AllQuotes