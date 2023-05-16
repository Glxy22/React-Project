import { is } from 'immer/dist/internal.js';
import React from 'react'
import {useState} from 'react'

interface props{
    children:string;
    maxChar?:number;
}
const ExpandableTxt = ({children,maxChar = 100}:props) => {
    const [isExpandable, setExpandable] = useState(false)
    if(children.length<= maxChar)
    return <p>{children}</p>

    const text = isExpandable ? children:children.substring(0,maxChar);
    return <p>{text}...<button onClick ={()=>setExpandable(!isExpandable)}>{isExpandable? 'Less':'More'}</button></p>
   
 
}

export default ExpandableTxt