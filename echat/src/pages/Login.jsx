import React from 'react'
import logo from '../img/logo.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {

  //console reagindo ao form
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      await setDoc(doc(db, "users", res.user.uid)),{
        uid: res.user.uid,
        email,
        
      }




  //fecha reação    
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <img src={logo} alt="logo"></img>
        <span className='logo'>&Chat</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />

          <button>Entrar</button>
        </form>

      </div>
    </div>
  )
}

export default Login