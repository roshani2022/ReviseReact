import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-description">
        <h2>{props.title}</h2>
        <div className="expense-amount">${props.amount}</div>
      </div>
      <button>ClickMe!!</button>
    </Card>
  
    
  );
};
export default ExpenseItem;
