import React, { useState } from "react";
import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Expensesfilter from "./Expenses/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "./Card";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className='expenses'>
      <Expensesfilter selected={filteredYear} onChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && (
        <p className='not_found-text'>Found No Expenses</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((el) => (
          <Expenseitem key={el._id} title={el.title} price={el.price} date={el.date} />
        ))}
    </Card>
  );
};
export default Expenses;
