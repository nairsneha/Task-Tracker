import React, {useState} from "react";
import TaskMaker from "./TaskMaker";

const TaskTracker = (props) => {

    const [tasks, setTasks] = useState(
        props.tasks
    );

    const [counter, setCounter] = useState(
        props.tasks.length
    );

    const [task,setTask] = useState({sign:'',
                                              name: '',
                                              id:'',
                                              description: ''})

    const deleteTask = (id) => {
        console.log("deleting" + id);
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log("toggling" + id);
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


    const addNewTask = () => {

        setTask({...task,id:counter})
        setTasks([...tasks,task])
        setTask({sign:'',
                    name: '',
                    id:'',
                    description: ''})
        setCounter(counter+1);
    }

    return(
        <>
            {tasks.map((task) => {
                return (
                    <>
                        <TaskMaker task = {task} onDelete= {() => deleteTask(task.id)} onToggle={() => toggleReminder(task.id)}/>
                    </>
                );
            })}

            <form className='add-form' ><div className='form-control'>
                <div id={'name-id'}>
                    <label>Enter Task Name: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input placeholder={'Your text here'} value={task.name} onChange={(e) => {
                        setTask({
                                          ...task,
                                          name: e.target.value
                                      })
                    }}/>
                </div>
                <div id={'desc-id'}>
                    <label>Enter Task Description: </label>&nbsp;&nbsp;
                    <input placeholder={'Your text here'} value={task.description} onChange={(e) =>
                        setTask({
                                          ...task,
                                          description: e.target.value
                                      }) }/>
                </div>
                <input type='text' value={task.sign} onChange={(e) =>
                    setTask({
                                      ...task,
                                      sign: e.target.value
                                  }) }/>

                <button id={'add-task-btn'} type='button'
                        className={'btn btn-secondary btn-block'} onClick={() => addNewTask()}> Add Task </button>
            </div>
            </form>
        </>
    );

}

export default TaskTracker;