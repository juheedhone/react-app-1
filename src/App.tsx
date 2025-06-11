import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/form";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 6, category: "Groceries" },
    { id: 2, description: "toast", amount: 5, category: "Groceries" },
    { id: 3, description: "coffee", amount: 5, category: "Utilities" },
    { id: 4, description: "tea", amount: 16, category: "Entertainment" },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="mb-5">
        <Form
          onSubmitData={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        handleDelete={handleDeleteExpense}
      />
    </>
  );
};

export default App;
