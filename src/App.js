import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/NewExpense/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Sanitary",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Appliance",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Banking",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Furniture",
    },
  ]);

  const addExpenseHandler = (newExpense) =>{
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  }

  const [filteredYear, setSelectedYear] = useState('2023')

  const yearChangeFilter = (selectedYear)=>{
    setSelectedYear(selectedYear)
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Card className="expenses">
        <div>
        <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeFilter}/>
        </div>
        {expenses.map((expense) => (
          <Expenses
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            // location={expense.location}
            
          />
        ))}
      </Card>
    </div>
  );
};

export default App;
