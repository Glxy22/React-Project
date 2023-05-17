import React from 'react'
import {FormEvent,useState} from 'react'
import {useForm,FieldValues} from 'react-hook-form'

const FormReactHook = () => {
    // to check the form property functions in console.log
    // const form = useForm()
    //   console.log(form)

    // use form function now below
    const {register,handleSubmit} =useForm();
    console.log(register('name'))  //name is name of input
  
     const onSubmit = (data:FieldValues)=>console.log(data);
 
  return (
    < form onSubmit={handleSubmit(onSubmit)}>
 
        {/* add markup to form shortcut :  
        div.mb-3>label.form-label+input.form-control
         (html elements with classes from bootstrap shortcut way of coding)*/}
        
         <div className="mb-3">
           <label htmlFor="name" className="form-label">Name</label>
           {/* event is any value changes in input field */}
           <input  {...register('name')} id="name" type="text" className="form-control"></input> 
            </div>    
            <div className="mb-3">
           <label htmlFor="age" className="form-label">Age</label>
           <input {...register('age')} id="age" type="number" className="form-control"></input> 
            </div>    
         <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}


export default FormReactHook