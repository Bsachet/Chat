import React from 'react'
import logo from '../img/logo.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <img src={logo} alt="logo"></img>
            <span className='logo'>&Chat</span>

            <form>
                <input type="text" placeholder='nome'/>
                <input type="password" placeholder='senha'/>
                <input type="text" placeholder='domínio'/>
                <button>Entrar</button>
            </form>

        </div>
    </div>
  )
}

export default Login