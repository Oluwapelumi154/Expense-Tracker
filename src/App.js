import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses";
import Navbar from "./Components/Navbar/navbar";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const initialState = [
    { _id: "1", title: "home Insurance", date: new Date(2021, 11, 19), price: "99.0" },
    { _id: "2", title: "Car Insurance", date: new Date(2022, 11, 10), price: "455.0 " },
    { _id: "3", title: "Insurance", date: new Date(2019, 10, 10), price: "500.0" },
  ];
  const [expenses, setExpenses] = useState(initialState);
  const AddExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div className='App'>
      <Navbar />
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
