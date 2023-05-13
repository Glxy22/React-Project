import ListGroup from "./components/ListGroup";

function App(){
  const items = ["Houston", "Dallas", "Austin", "San Antonio"];
const handelSelectItem = (item : string) => {
  console.log(item);
}
  return (
  <div>
    <ListGroup items = {items} heading = "Cities" onSelectItem={handelSelectItem} /> 
     {/* didn't use {} for Cities as we are passing static value */}
  </div>
  );
}
export default App;