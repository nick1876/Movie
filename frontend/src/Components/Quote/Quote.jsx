import React from 'react'
import styles from './Quote.module.css'
import { useNavigate} from 'react-router-dom'

const Quote = (props) => {
  let navigate=useNavigate();

  const showQuoteHandler=(id)=>{
    navigate(`/movies/${id}`)
  }
  const editQuoteHandler=(id)=>{
    navigate(`/movies/${id}/edit`)
  }

  const deleteQuoteHandler=(id)=>{
    navigate(`/delete/${id}`);
  }

  return (
    <li className={styles.quote}>
        <span>
        <h2>{props.author}</h2>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHandler(props.id)}>View Full Movie</button>
        <button onClick={()=>editQuoteHandler(props.id)}>Edit Movie</button>
        <button onClick={()=>deleteQuoteHandler(props.id)}>Delete</button>
    </li>
  )
}

export default Quote
