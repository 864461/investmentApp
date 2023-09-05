import React from "react";

const TableBody = props =>{
    return (
        <tr>
            <td>{props.yearNumber}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.yearlyContribution}</td>
            <td>{props.total}</td>
        </tr>
    )
}

export default TableBody