import './App.css';
import {useState} from "react";
import Tasks from "./component/TaskTracker/tasks.json";
import TaskTracker from './component/TaskTracker';

// function App(props) {

    // let name1='ujjval';
    // const name2='Sneha';
    // let names = ['ujjval', 'sneha', 'xyz'];
    // let textBoxPropsVal=" Enter your name";
    //
    //   const [animal, setAnimal] = useState({gender:'lion', age:25});

{/*  <Input animal={animal} setAnimal={setAnimal}/>
          <button onClick={this.props.onIncrement}>Increment</button>
          <button onClick={this.props.onDecrement}>Decrement</button>
          <Textbox textBoxProps={textBoxPropsVal} brand="Ford"/>
          <Button name={'click me!'} /> */
}

// }


const App = () => {
        return (
<>
    <TaskTracker tasks={Tasks}/>
</>
        );

}

export default App;