import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!");
  };

  const deleteExpense = (e) => {
    const listItem = e.target.closest(".expense-item");
    listItem.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        id={props.id}
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
