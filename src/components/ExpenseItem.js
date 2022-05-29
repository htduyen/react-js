import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // const expense_title = "Car Insurance";
  // const expense_amount = 30;
  // const expense_date = new Date(2022, 5, 30).toDateString()

  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
