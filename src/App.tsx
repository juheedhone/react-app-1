import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    toppings: ["mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };
  console.log(pizza);
  return <button onClick={handleClick}>Clicked</button>;
};

export default App;
