// import { Fragment } from "react";
//replaced the div with fragment

function ListGroup() {
  let items = ["Houston", "Dallas", "Austin", "San Antonio"];

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
   
      <h1>List</h1>
       {/* {message} */}
    
   {items.length === 0 && <p>No item found </p> }

// for passing parameters we can use functions instead of const


      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={()=>console.log(item)}> {item} </li>
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
