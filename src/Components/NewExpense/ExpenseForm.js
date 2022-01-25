import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const inputHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      price: userInput.price,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: "",
        price: "",
        date: "",
      };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__Controls'>
        <div className='new-expense__Control'>
          <label>title</label>
          <input
            name='title'
            value={userInput.title}
            onChange={inputHandler}
            placeholder='title'
            type='text'
          />
        </div>
        <div className='new-expense__Control'>
          <label>Price</label>
          <input
            type='text'
            name='price'
            value={userInput.price}
            placeholder='Price'
            onChange={inputHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__Control'>
          <label>Date</label>
          <input
            type='date'
            name='date'
            onChange={inputHandler}
            min='2019-01-01'
            value={userInput.date}
            step='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
