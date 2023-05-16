import React from 'react'

const Form = () => {
  return (
    <form>
        {/* add markup to form shortcut :  
        div.mb-3>label.form-label+input.form-control
         (html elements with classes from bootstrap shortcut way of coding)*/}
        
         <div className="mb-3">
           <label htmlFor="name" className="form-label">Name</label>
           <input id="name" type="text" className="form-control"></input> 
            </div>    
            <div className="mb-3">
           <label htmlFor="age" className="form-label">Age</label>
           <input id="age" type="number" className="form-control"></input> 
            </div>    
         <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form