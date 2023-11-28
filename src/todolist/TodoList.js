import React, { useState } from 'react';

function TodoList({ todos, toggleTodoStatus, updateTodo }) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditClick = (todo) => {
        setEditingId(todo._id);
        setEditText(todo.task);
    };

    const handleSave = (id) => {
        updateTodo(id, { task: editText });
        setEditingId(null);
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {editingId === todo._id ? (
                            <div className="edit-todo-container">
                                <input 
                                    type="text" 
                                    value={editText} 
                                    onChange={(e) => setEditText(e.target.value)} 
                                />
                                <div className="save-button-container">
                                    <button onClick={() => handleSave(todo._id)}>Save</button>
                                </div>
                            </div>
                        ) : (
                            <span className={todo.completed ? "todo-text" : ""}>
                                {todo.task}
                            </span>
                        )}
                        <div className="todo-buttons">
                            <button className="toggle-status" onClick={() => toggleTodoStatus(todo._id)}>
                                {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
                            </button>
                            <button className="edit-todo" onClick={() => handleEditClick(todo)}>
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TodoList;
