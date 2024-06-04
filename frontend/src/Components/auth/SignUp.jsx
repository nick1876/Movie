import React, { useRef} from 'react'
import styles from "./SignUp.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    let navigate=useNavigate();
    const firstnameRef=useRef();
    const secondnameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();

    const signuphandler=async(e)=>{
        e.preventDefault();
        const firstname=firstnameRef.current.value;
        const secondname=secondnameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        try{
            let res= await axios.post('http://localhost:8080/register',{firstname,secondname,email,password});
            console.log(res);
            navigate('/login');

        }catch(e){
            console.log("Cannot Sign Up");
        }
    }

  return (
    <form onSubmit={signuphandler} className={styles['new-register-form']}>
      <div>
        <label htmlFor='firstname'>FirstName:</label>
        <input type="text" id='firstname' ref={firstnameRef} placeholder="Enter FirstName"/>
      </div>
      <div>
        <label htmlFor='secondname'>SecondName:</label>
        <input type="text" id='secondname' ref={secondnameRef} placeholder="Enter SecondName"/>
      </div>
      <div>
        <label htmlFor='email'>email:</label>
        <input type="text" id='email' ref={emailRef} placeholder="Enter email"/>
      </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type="text" id='password' ref={passwordRef} placeholder="Enter Password"/>
        </div>
      <button>SignUp</button>
    </form>
  )
}

export default SignUp
