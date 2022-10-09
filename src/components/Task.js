import React from 'react';

const Tasks = (props) => {
    const { value, task, tasks, setTasks } = props;

    const onChangeHandler = () => {
        setTasks(tasks.map((item, idx) => {
            if (idx === value) {
                item.completed
                    ? item.completed = false
                    : item.completed = true
                return item;
            }
            else {
                return item;
            }
        }))
    };

    const deleteTask = (index) => {
        const newArray =
            [...tasks];
        newArray.splice(index, 1);
        setTasks(newArray);
    }

    return (
        <>
            <span style={task.completed ? { textDecoration: "line-through" } : {}}>{task.task}</span>
            <input class="click" type="checkbox" onChange={onChangeHandler} checked={task.completed} />
            <button className=' btn btn-outline-danger ms-3' onClick={() => { deleteTask(value) }}>Delete</button>
        </>
    );
}

export default Tasks; 