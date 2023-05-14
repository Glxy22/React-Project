import {useState} from 'react'
import produce from 'immer'

function UpdateArrayEasy(){
//Nested Array update animal objects with immer(another way to update status of Health)
const [animals, setAnimal] = useState([
    {
        id : 1,
        title:'Turtle',
        healthy:false
    },
    {
        id:2,
        title:'Mouse',
        healthy:false
    }
])
const handleClick = () => {

setAnimal(produce(draft => {
    const animal= draft.find(animal => animal.id ===1 );
     if(animal) animal.healthy= true;
}))

}
return(
    <div>
        {animals.map(animal=> <p>{animal.title} {animal.healthy? 'Yes':'No'}</p>)}
        <button onClick={handleClick}>Animal is Healthy?</button>
    </div>
)

}
export default UpdateArrayEasy