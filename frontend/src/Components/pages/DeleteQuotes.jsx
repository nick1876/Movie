import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from '../Quote/Quote';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteQuotes() {
  let[quotes,setQuotes]=useState([]);
  const navigate=useNavigate();
  const params=useParams();
  async function deleteQuotes(){
    // console.log(params.id);
    let res=await axios.delete(`http://localhost:8080/delete/${params.id}`);
    // console.log(res);
    setQuotes(res.data);
  }

  useEffect(()=>{
    deleteQuotes();
    navigate('/');
  },[]);

  return (
    <div>
      <h2 style={{marginLeft:'45%'}}>All Quotes</h2>
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

export default DeleteQuotes