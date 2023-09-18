import React, {useState} from 'react';

import "./ExpenseForm.css";

function ExpenseForm({onSubmitExpenseData}) {

  const [userInput, setUserInput] = useState(
    {
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:''
    }
  );

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setUserInput((prevState) => {
        return {...prevState, enteredTitle: value};
      });
    }
    else if (identifier === 'amount') {
      setUserInput((prevState) => {
        return {...prevState, enteredAmount: value};
      });
    }
    else {
      setUserInput((prevState) => {
        return {...prevState, enteredDate: value};
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };

    // submit data and receive in NewExpense.js
    onSubmitExpenseData(expenseData);

    // set all fields back to null/''
    setUserInput(() => {
      const resetUserInput = {};
      Object.keys(userInput).forEach(key => { 
        resetUserInput[key]= ''; 
      });
      return resetUserInput;
    });

    console.log(userInput);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="titleInput">Title</label>
          <input id="titleInput" value={userInput.enteredTitle} type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amountInput">Amount</label>
          <input id="amountInput" value={userInput.enteredAmount} type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="dateInput">Date</label>
          <input id="dateInput" value={userInput.enteredDate} type="date" min="2020-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default ExpenseForm;
