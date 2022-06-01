import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterAmount, setEnterAmount] = useState('')
  const [enterDate, setEnterDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value)
    
    // Way 2
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    //Way 3: Good way
    // setUserInput((prevState) => {
    //   return {...prevState, enterTitle: event.target.value}
    // })

  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate)
    }
    console.log(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enterTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.02"
            onChange={amountChangeHandler}
            value={enterAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
