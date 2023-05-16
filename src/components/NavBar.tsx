import React from 'react'

interface Props{
    cartItems: number;

    }
const NavBar = ({cartItems}:Props) => {
   
  return (
    <>
    <div>NavBar: {cartItems}</div>
    
    </>
  )
}

export default NavBar