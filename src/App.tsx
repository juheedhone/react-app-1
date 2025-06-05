import produce from "immer";
import { useState } from "react";

const App = () => {
  const [bug, setBug] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // update
    // setBug(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBug(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bug.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed ? "fixed" : "new"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
