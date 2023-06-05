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

  const [price, setPrice] = useState(props.amount)

  const clickHandlerPrice = () =>{
    setPrice(100)
  }

  const deleteExpense = (e) => {
    const listItem = e.target.closest(".expense-item");
    listItem.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        id={props.id}
        amount={price}
        // location={props.location}
        title={title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandlerPrice}>Change Price</button>
      <button onClick={deleteExpense}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
