import React, {useState} from "react";
import Button from "./Button";
const Form = props =>{
    const initialUserInput = {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        duration: 10,
    };


   const[data,setData] =  useState(initialUserInput)


    const inputChangeHandler = (input, value) => {
        setData((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };


    const submitHandler = event =>{
       event.preventDefault()
        props.onCalculate(data)
    }

    const resetHandler = () => {
        setData(initialUserInput);
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => inputChangeHandler("current-savings", event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"  onChange={(event) => inputChangeHandler("expected-return", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => inputChangeHandler("duration", event.target.value)}/>
                </p>
            </div>
            <p className="actions">
                <Button action={"submit"} name={"Calculate"} className={"button"}/>
                <Button action={"reset"} name={"Reset"} className={"buttonAlt"} onclick={resetHandler}/>
            </p>
        </form>
    );
}

export default Form