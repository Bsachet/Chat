import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>&Chat</span>
      <div className='user'>
        <img src="https://i.pinimg.com/564x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg" alt="" />
        <span>Nome</span>
        <button>Sair</button>
      </div>
    </div>
  )
}

export default Navbar