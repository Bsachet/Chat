import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Buscar...'/>
      </div>
      <div className='userChat'>
        <img src="https://i.pinimg.com/564x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg" alt="" />
        <div className="userChatInfo">
          <span>Nome</span>
        </div>
      </div>
    </div>
  )
}

export default Search