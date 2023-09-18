import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({title, date, price}) {

    const [itemTitle, setItemTitle] = useState(title);

    const clickHandler = () => {
        setItemTitle("UPDATED!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{itemTitle}</h2>
                <div className="expense-item__price">£{price}</div>
            </div>
            <button onClick={clickHandler}>Click here!</button>
        </Card>
    );    
}

export default ExpenseItem;