import React, { useCallback, useState } from "react"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function Menu({ open, setOpen }){

  const onClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return(
    <div
      className='absolute text-lg top-4 right-4 md:hidden'
      onClick={onClick}
    >
      {open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
    </div>
  )
}

export default Menu
