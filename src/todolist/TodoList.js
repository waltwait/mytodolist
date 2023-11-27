import React, { useEffect, useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/api/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {todo.task} - {todo.completed ? 'Completed' : 'Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
