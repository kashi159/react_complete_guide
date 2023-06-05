import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!')
  };

  // const deleteExpense = (e) => {
  //   const listItem = e.target.closest(".expense-item");
  //   listItem.remove();
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        id={props.id}
        amount={props.amount}
        // location={props.location}
        title={title}
      />
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
