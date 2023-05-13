// import { Fragment } from "react";
//replaced the div with fragment
// import {MouseEvent} from "react";

import {useState} from "react";

interface Props{

    items: string[];
    heading: string;
    onSelectItem : (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
 
//   let selectedIndex = 0;
//   select can't be recognized by react until we use
//  Hook to check that states of this variable will change over time
  //Hook function

    const [selectedIndex, setSelectedIndex] = useState(-1);

    // const [name,setName] = useState(''); one example 
   
//  arr[0]  variable(selected index)

//  arr[1]  //updated function(setSelectedIndex)



//  replaced with selectedIndex fun
//  const handelClick = (event:MouseEvent) => console.log(event);

//   items = [];

  //const message = items.length === 0 ? <p>No items found</p> : null;
//   const getMessage = () => {
//     items.length === 0 ? <p>No items found</p> : null;
//   }

//   if (items.length === 0)
//     return (
//       <>
//         <h1>List</h1>
//         <p>No item found</p>
//       </>
//     );

  return (
    <>
   
      <h1>{heading}</h1>
       {/* {message} */}
    
   {items.length === 0 && <p> No item found </p> }

 {/* for passing parameters we can use functions instead of const */}


      <ul className = "list-group">

        {items.map((item,index) => (
          <li className={selectedIndex === index
        ? "list-group-item active" 
        : "list-group-item" } 
          key = {item} 

        //   onClick={handelClick}
        // replaced with
        onClick = {() => {setSelectedIndex(index);
            onSelectItem(item);
        }}
        

          >


           {/* we exchange this code with the function above handleClick
           onClick={()=>console.log(item,index)} */}
            {item} 
          </li>
        ))}

       { /*replaced all this following bootstrap code with the top one line
        react code as there is no for loop in react */}
        
        {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
export default ListGroup;
