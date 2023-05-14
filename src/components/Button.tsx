import React from 'react'

interface Props{
    children: string
    onClick :() => void;
    color? : 'primary' | 'secondary' | 'success' | 'danger';  //optional property in react with options allowed
}
// we used primary for button second time

const Button = ({children, onClick, color='primary'}:Props) => {
  return (
    <button className= {"btn btn-"+color} onClick={onClick} >{children}</button>
  )
}

export default Button