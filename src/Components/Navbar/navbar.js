import React, { useState } from "react";
import Expensesfilter from "../Expenses/ExpensesFilter";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navigation__bar'>
      <div className='nav-brand'>
        <h1>Expense Tracker</h1>
      </div>
    </div>
  );
};

export default Navbar;
