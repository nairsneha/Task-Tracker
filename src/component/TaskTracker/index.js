import React, {useState} from "react";
import TaskMaker from "./TaskMaker";

const TaskTracker = (props) => {

    const [tasks, setTasks] = useState(
        [
            {
                "name": "task1",
                "id" : 1,
                "description": "drink milk",
                "reminder": false
            },
            {
                "name": "task2",
                "id" : 2,
                "description": "play games",
                "reminder": false
            },
            {
                "name": "task3",
                "id" : 3,
                "description": "dance around",
                "reminder": false
            }
        ]
    );

    const deleteTask = (id) => {
        console.log("deleting" + id);
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log("toggling" + id);
        setTasks(tasks.map((task) => task.id=== id ? {...task, reminder: !task.reminder} : task))
    }

    return(
        <>
            {tasks.map((task,index) => {
                return (
                    <>
                        <TaskMaker task = {task} onDelete= {() => deleteTask(task.id)} onToggle={() => toggleReminder(task.id)}/>
                    </>
                );
            })}
        </>
    );

}

export default TaskTracker;