import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    // const [] = useState();

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Agu', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},

    ];

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); // startting at 0 ==> Jun ==> 0
        chartDataPoints[expenseMonth].value += expense.mount;
    }

    return <Chart dataPoints={chartDataPoints}/>
  };
  
  export default ExpensesChart;
  