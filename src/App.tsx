import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import State from "./components/State";
import NestedObj from "./components/NestedObj";
import Array from "./components/Array";
import UpdateArrayEasy from "./components/UpdateArrayEasy";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState(["product1", "product2"]);
  const newItemsForCart=["product3",'Product4']
  const addItemsInCart= ()=>{
    setCartItems([...cartItems,...newItemsForCart])
  }

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      {/* <Button color="success" onClick ={()=>console.log("Clicked")} > */}
      {/* replaced the button in Button by giving class in Button class */}

      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <State />
      <NestedObj />
      <Array />
      <UpdateArrayEasy />
      <NavBar cartItems = {cartItems.length}/>
      <Cart cartItems={cartItems} clearCart= {()=> setCartItems([])} addCart = addItemsInCart/>
    </div>
  );
};

export default App;

//  1
// import Alert from "./components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>Hello <span>My Fav</span> Nadia</Alert>
//     </div>
//   );
// };

// export default App;

//  2

// import ListGroup from "./components/ListGroup";

// function App(){
//   const items = ["Houston", "Dallas", "Austin", "San Antonio"];
// const handelSelectItem = (item : string) => {
//   console.log(item);
// }
//   return (
//   <div>
//     <ListGroup items = {items} heading = "Cities" onSelectItem={handelSelectItem} />
//      {/* didn't use {} for Cities as we are passing static value */}
//   </div>
//   );
// }
// export default App;
