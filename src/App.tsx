import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import State from "./components/State";
import NestedObj from "./components/NestedObj";
import Array from "./components/Array";
import UpdateArrayEasy from "./components/UpdateArrayEasy";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableTxt from "./components/ExpandableTxt";
import Form from './components/Form'

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState(["product1", "product2"]);
  
  

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
      <Cart cartItems={cartItems} clearCart= {()=> setCartItems([])} />
      <ExpandableTxt>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel ducimus
         assumenda possimus deleniti modi eos laboriosam perspiciatis quidem odit velit
          architecto tenetur, obcaecati, natus nesciunt a neque dolore. Sint architecto
           ipsum delectus corrupti possimus ratione repudiandae reprehenderit blanditiis! 
           Adipisci quae quidem ipsa labore et, unde deleniti nesciunt asperiores natus 
           dolorum! Quos quasi quas nobis, velit dolorum dignissimos maxime itaque ullam 
           reiciendis! Temporibus atque impedit corporis illum laborum minus at, hic 
           inventore fugit iste in illo natus assumenda recusandae reiciendis! Maxime
            modi exercitationem ratione ipsam illum. Tempore consequuntur at unde!
             Itaque aperiam deserunt nobis harum debitis voluptatibus eius placeat inventore?
        </ExpandableTxt> 
        <Form></Form>
      
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
