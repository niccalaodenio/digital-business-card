import React from 'react'

const Button = ({name, icon, bg, Color}) => {
  return (
        <button className='p-0 name plr Btn d-flex center g' style={{backgroundColor:bg, color:Color, border:'none'}}>{icon}{name}</button>
  )
}

export default Button