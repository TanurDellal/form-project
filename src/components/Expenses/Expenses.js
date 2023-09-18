import "./Expenses.css";
import "./ExpensesFilter.css"

import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {

  const [filteredYear, setExpensesFilter] = useState('2023');

  const selectedFilterHandler = (selectedFilterYear) => {
    console.log("I have the selected year ("+selectedFilterYear+") now!");
    setExpensesFilter(selectedFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onSelectFilter={selectedFilterHandler}/>
        <ExpenseItem
          title={expenses[0].title}
          price={expenses[0].price}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          price={expenses[1].price}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          price={expenses[2].price}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          price={expenses[3].price}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;