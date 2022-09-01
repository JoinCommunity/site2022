import React, { useCallback } from 'react'

function Button({ children, href, ...props  }){

  const onClick = useCallback(() => {
    window.open(href)
  },[href])

  return(
    <button {...props} onClick={onClick} className='bg-primary-700 w-56 self-center text-white font-semibold p-3 hover:bg-primary-900'>
      {children}
    </button>
  )
}

export default Button
