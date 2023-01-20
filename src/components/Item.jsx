import React, { useState } from "react";

export default function Item(props) {
    const [checked, setChecked] = useState(false);

    function handleCheck(){
        setChecked((prevValue) => {
          return !prevValue;
        })
      }

    return (
        <div className="row">
            <li style={{ textDecoration: checked ? "line-through" : "none" }}>{props.value}</li>
            <btn className="btn checkbox" onClick={handleCheck}><i class={checked ? "fa-solid fa-square-check" : "fa-light fa-square-check"}></i></btn>
            <btn className="btn trash" onClick={() => props.delete(props.id)}><i class="fa-solid fa-trash"></i></btn>
        </div>
    )
}