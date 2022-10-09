import React, { useState } from 'react';
import Tasks from './Task';

const ToDoForm = (props) => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const onChangeHandler = (event) => {
        setInput({
            ...input,
            text: event.target.value,
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTasks([...tasks, { task: input.text, completed: false }]);
        setInput({ text: "" });
    }

    return (
        <>
            {/* Creating a new task */}
            <div className='container text-center'>
                <form onSubmit={onSubmitHandler}>
                    <h2>To-Do-List</h2>
                    <label class="write" htmlFor="task"> Add a task: </label>
                    <input type="text" name="task" onChange={onChangeHandler} value={input.text} className='me-3' />
                    <button class="bt" className='btn btn-outline-success'>Add Task</button>
                </form>
            </div>
            {/* Displaying all the tasks */}
            <div className='mt-3 w-50'>
                <ul >
                    {tasks.map((task, idx) => {
                        return (<li key={idx} className='mt-3 border border-secondary p-3'><Tasks value={idx} task={task} tasks={tasks} setTasks={setTasks} onClick={props.deleteTask} ></Tasks></li>);
                    })}
                </ul>
            </div>
        </>
    );
}

export default ToDoForm; 