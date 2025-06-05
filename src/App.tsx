import { useState } from "react";
const App = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "san Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 2222 },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
