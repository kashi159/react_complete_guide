import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
const changeHandler = (e) =>{
    const expenseTitle = document.getElementById("expense").value;
    const expenseAmount = document.getElementById("amount").value;
    const expenseDate = document.getElementById("Date").value;

    console.log("Expense Title:", expenseTitle);
    console.log("Expense Amount:", expenseAmount);
    console.log("Date:", expenseDate);
}

  return (
    <div>
      <div className="form">
        <div>
          <label htmlFor="expense">Expense Title:</label>
          <input type="text" name="expense" id="expense"></input>
        </div>
        <div>
          <label htmlFor="amount">Expense Amount:</label>
          <input type="number" name="amount" id="amount"></input>
        </div>
        <div>
          <label htmlFor="expense">Date:</label>
          <input type="date" name="Date" id="Date"></input>
        </div>
      </div>
      <div className="button">
        <button onClick={changeHandler}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
