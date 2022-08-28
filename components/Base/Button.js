import React from 'react'

function Button({ children, ...props  }){
  return(
    <button {...props} className='bg-primary-700 w-56 self-center text-white font-semibold p-3 hover:bg-primary-transparent'>
      {children}
    </button>
  )
}

export default Button
