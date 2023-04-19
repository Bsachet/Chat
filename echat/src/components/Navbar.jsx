import React from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>&Chat</span>
      <div className='user'>
        <img src="https://i.pinimg.com/564x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg" alt="" />
        <span>Nome</span>
        <button onClick={()=>signOut(auth)}>Sair</button>
      </div>
    </div>
  )
}

export default Navbar