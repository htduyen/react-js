import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expense = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expense);
    }

    const [isEditting, setIsEditting] = useState(false);

    const startEdittingHandler = () => {
        setIsEditting(true);
    };

    const stopEdittingHandler = () => {
        setIsEditting(false);
    };


    return(
        <div className="new-expense">
            { !isEditting && <button onClick={startEdittingHandler}>Add new expense</button>}
            { isEditting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdittingHandler}/>}
        </div>
    );
};

export default NewExpense;