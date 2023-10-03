import React from "react";
import "./App.css";
import ExpenseItem from "./Component/Expenses/ExpenseItem";
import Card from "./Component/UI/Card";
import './../src/Component/UI/Card.css'

const App = (props) => {
  const expense = [
    {
      id: "e1",
      title: "Party",
      amount: 3000,
      date: new Date(2023, 4, 19),
    },
    {
      id: "e2",
      title: "Traveling",
      amount: 2000,
      date: new Date(2023, 5, 24),
    },
    {
      id: "e3",
      title: "Shopping",
      amount: 10000,
      date: new Date(2023, 6, 1),
    },
    {
      id: "e4",
      title: "Movie",
      amount: 300,
      date: new Date(2023, 6, 19),
    },
  ];
  return (
    <div>
      <h1>Hi Every One!!!</h1>
   <Card className='expenses'>
    
   {expense.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          date={expenses.date}
          title={expenses.title}
          amount={expenses.amount}
        />
      ))}
   </Card>
     
      <button>Click Me!</button>
    </div>
  );
};

export default App;
