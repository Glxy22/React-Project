import {useState} from 'react';


function State(){

    const [drink,setDrink] = useState({
        title:"Product",
        price : 6
    })
    const handelClick =()=> {
      
       setDrink({...drink, price: 8});
    };
    return(
        <div>
            {drink.price}
            <button onClick={handelClick}>  Click me</button>
        </div>
    )
}

export default State