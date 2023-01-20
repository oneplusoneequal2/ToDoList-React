import React from "react";

export default function Input(props) {
    return (
        <div className="center">
            <input onChange={props.handleChange} className="input" value={props.value} />
            <button onClick={props.handleClick} className="btn"><i class="fa-solid fa-plus fa-5x"></i></button>
        </div>
    )
}