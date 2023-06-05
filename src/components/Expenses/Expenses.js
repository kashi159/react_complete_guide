import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <ExpenseItem
      key={props.id}
      id={props.id}
      title={props.title}
      amount={props.amount}
      date={props.date}
      // location={props.location}
    />
  );
};

export default Expenses;
