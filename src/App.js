import logo from './assets/investment-calculator-logo.png';
import Header from "./Components/HeaderComponent";
import Form from "./Components/CalculatorForm";
import ResultTable from "./Components/ResultTable";
import {useState} from "react";
function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  let normalSaving =  null;

  if (userInput) {
     normalSaving =  +userInput['current-savings'];
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }



  const tableResult  = <ResultTable data={yearlyData} initialInvestment={normalSaving}/>
  const noResult = <p>No Data Available </p>
  const result = yearlyData.length === 0 ?  noResult : tableResult;
  return (
    <div>
      <Header/>
      <Form onCalculate={calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {result}
    </div>
  );
}

export default App;
