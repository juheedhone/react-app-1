import { useState } from "react";
const App = () => {
  const [drink, setDrink] = useState({
    title: "americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
