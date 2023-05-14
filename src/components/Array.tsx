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
//Nested Array
    const [animals, setAnimal] = useState([
        {
            id : 1,
            title:'Turtle',
            Healthy:false
        },
        {
            id:2,
            title:'Mouse',
            Healthy:false
        }
    ])

    const handleAnimals= () => {
        setAnimal(animals.map(animal => animal.id === 1 ? {...animal, Healthy: true } : animal))
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

        
        {/* Nested Array */}

       <button onClick= {handleAnimals}>Update Animal Status</button>

      {animals.map(animal =>  <p> {animal.id}{animal.title}{animal.Healthy ? 'Yes':'No'}</p>)}

    </div>
  )
}

export default Array