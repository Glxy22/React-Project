import {useState} from 'react'

function Array() {
   
    const [Names, setNames] = useState(["Marry", "Nadia", "Talha", "Huzaifa"]);
    
    const handleClick = () => {

        //Add
        setNames([...Names,'Alesha']);

    }
//  Remove 
    const handleRemove=()=> {
        setNames(Names.filter( name => name !== 'Alesha'));
    }

    // Update
    const handleUpdate=()=> {
        setNames(Names.map( name => name == 'Alesha' ? 'Sara' : name));
    }

  return (
    
    <div>
        {Names} 
        {/* //Add Name */}
        <button onClick= {handleClick} >Add Name</button>
        {/* //Remove Name */}
        <button onClick= {handleRemove}>Remove Name</button>
        {/* Update Name */}
        <button onClick= {handleUpdate}>Update Name</button>

    </div>
  )
}

export default Array