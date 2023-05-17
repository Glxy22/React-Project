import React from 'react'
import {FormEvent,useState} from 'react'
import {useForm} from 'react-hook-form'

const FormStateHook = () => {

 const[person,setPerson] = useState({
    name:'',
    age:''    //initialize the age with '' to remove by default 0
  })



  const handleSubmit= (event : FormEvent)=>{
     event.preventDefault();
     console.log(person)
  }

  return (
    < form onSubmit={handleSubmit}>

        {/* add markup to form shortcut :  
        div.mb-3>label.form-label+input.form-control
         (html elements with classes from bootstrap shortcut way of coding)*/}
        
         <div className="mb-3">
           <label htmlFor="name" className="form-label">Name</label>
           {/* event is any value changes in input field */}
           <input  onChange = {(event)=>setPerson({...person, name: event.target.value})} 
           value = {person.name} id="name" type="text" className="form-control"></input> 
            </div>    
            <div className="mb-3">
           <label htmlFor="age" className="form-label">Age</label>
           <input onChange={(event)=>setPerson({...person, age: parseInt(event.target.value)})} 
           value={person.age} id="age" type="number" className="form-control"></input> 
            </div>    
         <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}


export default FormStateHook