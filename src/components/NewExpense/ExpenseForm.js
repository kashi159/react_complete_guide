import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Approach 1 - change state seperately//
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Approach 2 - change state using one state//
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    //Approach 1 - change state seperately//
    setEnteredTitle(event.target.value);

    //Approach 2(a) - change state using one state//
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    //Approach 2(b) - change state using one state better way//
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    //Approach 1 - change state seperately
    setEnteredAmount(event.target.value);

    //Approach 2(a) - change state using one state//
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    //Approach 2(b) - change state using one state better way//
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    //Approach 1 - change state seperately
    setEnteredDate(event.target.value);

    //Approach 2(a) - change state using one state//
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })

    //Approach 2(b) - change state using one state better way//
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredDate: event.target.value}
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            value={enteredAmount}
            placeholder="Enter Amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2020-01-01"
            max="2050-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
