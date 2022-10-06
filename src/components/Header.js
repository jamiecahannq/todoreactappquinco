import React from 'react'

const Header = ({title, addTodo, showForm}) => {
  return (
    <div className='header'>
        <h3>{title}</h3>

        <button classname='btn-sm' style={{backgroundColor:'yellow'}} onClick={addTodo}>{showForm ? 'Close':'Add'}</button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header