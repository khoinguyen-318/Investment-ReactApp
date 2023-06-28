import "./App.css";
import Form from "./components/FormInput/Form";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import React, { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState(null);
  const caculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />
      <Form onCacuclate={caculateHandler} />
      {!userInput && "No investment caculate yet"}
      {console.log(yearlyData)}
      {userInput && (
        <ResultTable
          data={yearlyData}
          inititalIvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
