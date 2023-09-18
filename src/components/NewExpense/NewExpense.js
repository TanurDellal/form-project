import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense({onAddExpense}) {
    const submitNewExpenseHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseData={submitNewExpenseHandler}/>
        </div>
    );
}

export default NewExpense;