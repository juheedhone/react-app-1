import { useState } from "react";
const App = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness " : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
