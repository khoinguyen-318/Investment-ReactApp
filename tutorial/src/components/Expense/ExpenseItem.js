import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
import React from 'react'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("funtion call");
  const clickHandler = () => {
    setTitle("Updated");
    console.log("Clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
