import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

const App = () => {
  const [cartItems, setCartItems] = useState(["product1", "product2","product3"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={()=> setCartItems([])}  />
    </div>
  );
};

export default App;
