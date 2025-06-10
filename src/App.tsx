import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

export const categoryConstant = ["grocery", "Entertainment", "Utilities"];

export interface IExpense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([
    { id: 1, description: "milk", amount: 6, category: "Grocery" },
    { id: 2, description: "toast", amount: 5, category: "Grocery" },
    { id: 3, description: "coffee", amount: 5, category: "Utilities" },
    { id: 4, description: "tea", amount: 16, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      {/* <Form /> */}
      <ExpenseList expenses={expenses} handleDelete={handleDelete} />
    </>
  );
};

export default App;
