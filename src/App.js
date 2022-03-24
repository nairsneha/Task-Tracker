import './App.css';
import {useState} from "react";
import Tasks from "./component/TaskTracker/tasks.json";
import TaskTracker from './component/TaskTracker';
import Store from "./component/Store";

const App = () => {
        return (
<>
    <TaskTracker tasks={Tasks}/>
    <Store/>
</>
        );

}

export default App;