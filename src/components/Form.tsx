import React from 'react'
import {FormEvent,useRef} from 'react'

const Form = () => {

  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef <HTMLInputElement>(null)

  const person= {name:'', age:0};

  const handleSubmit= (event : FormEvent)=>{
     event.preventDefault();
     if(nameRef.current != null){
     person.name = nameRef.current.value
      console.log(nameRef.current.value)
      console.log(person)
     }
    
      if(ageRef.current!=null){
      person.age = parseInt(ageRef.current.value)
      console.log(ageRef.current.value)
      console.log(person)
      }
  }
  return (
    < form onSubmit={handleSubmit}>

        {/* add markup to form shortcut :  
        div.mb-3>label.form-label+input.form-control
         (html elements with classes from bootstrap shortcut way of coding)*/}
        
         <div className="mb-3">
           <label htmlFor="name" className="form-label">Name</label>
           <input ref={nameRef} id="name" type="text" className="form-control"></input> 
            </div>    
            <div className="mb-3">
           <label htmlFor="age" className="form-label">Age</label>
           <input ref = {ageRef} id="age" type="number" className="form-control"></input> 
            </div>    
         <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form