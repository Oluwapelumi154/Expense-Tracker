import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-Expense'>
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
