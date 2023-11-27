import React, { useState } from 'react';

function AddTodo({ onAdd }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add new task" 
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;
