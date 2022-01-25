import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
const Expenseitem = ({ title, price, date }) => {
  return (
    <Card className='expense-Item'>
      <div className='expense-item__price'>
        <span>${price}</span>
      </div>
      <div className='expense_details'>
        <h2>{title}</h2>
        <div className='expense-item__date'>
          <ExpenseDate date={date} />
        </div>
      </div>
    </Card>
  );
};

export default Expenseitem;
