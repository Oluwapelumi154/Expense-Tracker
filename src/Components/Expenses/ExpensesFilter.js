import React from "react";
import "./ExpensesFilter.css";
const Expensesfilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className='nav-select'>
      <label>filter by year</label>
      <select
        value={props.selected}
        className='form-select'
        onChange={dropdownChangeHandler}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
      </select>
    </div>
  );
};

export default Expensesfilter;
