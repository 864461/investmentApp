import React from "react";

const Button = (props) => {
    return (
        <button type={props.action} className={props.className} onClick={props.onclick}>
            {props.name}
        </button>
    )

}
export default Button