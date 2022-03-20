import React from "react";

const tasks = [
    {'name' : 'task1',
    'id' : 1},
    {'name' : 'task2',
        'id' : 2},
    {'name' : 'task3',
        'id' : 3},
]
const Tasks = () => {
return (
    <>
        {tasks.map((task) => (<h3>{task.name}</h3>))}
    </>
);
}

export default Tasks