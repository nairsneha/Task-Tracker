import React  from "react";
const Textbox = (props) => {

    return(
        <div>
            <h1>{props.brand}</h1>
            <input type='text' placeholder={props.textBoxProps} />
        </div>
    )
}
export default Textbox;