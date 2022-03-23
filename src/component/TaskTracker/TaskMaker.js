import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDeleteLeft, faTasks} from "@fortawesome/free-solid-svg-icons";

const TaskMaker = (props) => {

    return(
        <>
        <div style={props.task.reminder === true ? {backgroundColor: '#C7F6B6', margin : '5px', padding: '5px'} :
            {backgroundColor: '#FFCCCB', margin : '5px', padding: '5px'} } onDoubleClick={props.onToggle}>
            <h2> {props.task.name} <FontAwesomeIcon icon={faDeleteLeft} onClick={props.onDelete} /></h2>
            <FontAwesomeIcon icon={faTasks} style={props.task.reminder === true ? {color: 'green'} :
                {color: 'red'}}/>
            &nbsp;{ props.task.description}
        </div>
        </>
    );
}

export default TaskMaker;