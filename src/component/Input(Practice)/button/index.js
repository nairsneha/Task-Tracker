import React  from "react";
import { useState } from "react";


const Button = (props) => {

    const [count1, setCount1] = useState({prev: 0});
    const [person, setPerson] = useState({name:'Sneha',age:25});

    const incrementCount = () => {
        // Update state with incremented value
       // setCount1((prevCount)=>prevCount + 1);
        setCount1({...count1,prev: count1.prev + 5});
        setPerson( {...person,age:person.age+1, weight: 100});
    };
    return(<div>
        <h1>{JSON.stringify(count1)}</h1>
        <h1>{JSON.stringify(person)}</h1>
        <button onClick={incrementCount}>{props.name}</button>
    </div>)
}
export default Button;