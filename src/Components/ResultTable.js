import React from "react";
import TableBody from "./tableBody";


const ResultTable =  (props) => {


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });



    return (
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((yearData) => (
                <TableBody
                    key={yearData.year}
                    yearNumber={yearData.year}
                    yearlyInterest={formatter.format(yearData.yearlyInterest)}
                    savingsEndOfYear={formatter.format(yearData.savingsEndOfYear)}
                    yearlyContribution={formatter.format(yearData.savingsEndOfYear -
                        props.initialInvestment -
                        yearData.yearlyContribution * yearData.year)}
                    total={formatter.format(props.initialInvestment +
                        yearData.yearlyContribution * yearData.year)}/>
            ))}
            </tbody>
        </table>

    )

}

export default ResultTable