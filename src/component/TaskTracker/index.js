import React, {useState} from "react";
import TaskMaker from "./TaskMaker";
import addTask from "./addTask";

const TaskTracker = (props) => {

    const [tasks, setTasks] = useState(
        props.tasks
    );

    const [addTaskButton, setAddTaskBtn] = useState(
        [<button id={'add-task-btn'} type='submit' className={'btn btn-secondary btn-block'} onClick={() => addNewTask()}> Add Task </button> ]
    );

    const [createTaskButton, setCreateTaskBtn] = useState(

        [<button id={'create-task-btn'} className={'btn btn-secondary btn-block'} onClick={() => renderForm()}> + </button> ]
    );

    const [form, setForm] = useState(
         []
    );

    const [sign, setSign] = useState(
        ''
    );

    const deleteTask = (id) => {
        console.log("deleting" + id);
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log("toggling" + id);
        setTasks(tasks.map((task) => task.id=== id ? {...task, reminder: !task.reminder} : task))
    }

    const renderForm = () => {
        // setCreateTaskBtn(prevState => ({
        //     ...prevState,
        //     'btn': []
        // }));

        setForm(form.concat(<form className='add-form'><div className='form-control'>
        <div id={'name-id'}>
                <label>Enter Task Name: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder={'Your text here'}/>
            </div>
            <div id={'id-id'}>
                <label>Enter Task Id: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder={'Your text here'}/>
            </div>
            <div id={'desc-id'}>
                <label>Enter Task Description: </label>&nbsp;&nbsp;
                <input placeholder={'Your text here'}/>
            </div>
            <input type='text' value={sign} onChange={(e) => setSign(e.target.value)}/>
            {addTaskButton}
        </div> </form>
    ));
    }

    const addNewTask = () => {

        document.getElementById('add-task-btn').remove();
        document.getElementById('name-id').remove();
        document.getElementById('id-id').remove();
        document.getElementById('desc-id').remove();

         form.setState(this.getInitialState());

        setForm(form.concat(<div>
            <button id={'create-task-btn'} className={'btn btn-secondary btn-block'} onClick={() => renderForm()}> + </button>
        </div>));
    }

    return(
        <>
            {tasks.map((task, index) => {
                return (
                    <>
                        <TaskMaker task = {task} onDelete= {() => deleteTask(task.id)} onToggle={() => toggleReminder(task.id)}/>
                    </>
                );
            })}

            {/*{createTaskButton}*/}
            <button id={'create-task-btn'} className={'btn btn-secondary btn-block'} onClick={() => renderForm()}> + </button>
            {form}
        </>
    );

}

export default TaskTracker;