import logo from './logo.svg';
import './App.css';
import Input from './component/Input'
import Textbox from "./component/Input/textbox";
import Button from "./component/Input/button";
import {useState} from "react";

function App(props) {

  let name1='ujjval';
  const name2='Sneha';
  let names = ['ujjval', 'sneha', 'xyz'];
  let textBoxPropsVal=" Enter your name";

    const [animal, setAnimal] = useState({gender:'lion', age:25});

  return (
      <div>
          <Input animal={animal} setAnimal={setAnimal}/>
          <button onClick={this.props.onIncrement}>Increment</button>
          <button onClick={this.props.onDecrement}>Decrement</button>
          <Textbox textBoxProps={textBoxPropsVal} brand="Ford"/>
          <Button name={'click me!'} />
      </div>
  );
}

export default App;
