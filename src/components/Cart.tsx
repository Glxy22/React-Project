import React from 'react'

interface props{
    cartItems: string[]
    clearCart: ()=>void
}
const Cart = ({cartItems,clearCart,addCart}:props) => {
  return (
    
    <>
    <div>
       <ul>
       {cartItems.map(item=> <li key ={item}>{item}</li>)}
        </ul> 
        <button onClick = {clearCart}>Clear the Cart</button>

    
    </div>
    </>
  )
}

export default Cart