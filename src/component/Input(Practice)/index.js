import React  from "react";

const Input=(props)=> {

    const changeGender=() => {
        props.setAnimal({...props.animal, gender: props.animal.gender==='lion'?'lioness':'lion'});
    }

    return(
        <div>
            <button onClick={changeGender}>Click to change gender</button>
            <h1>{JSON.stringify(props.animal)}</h1>
        </div>
    )
}

export default Input;