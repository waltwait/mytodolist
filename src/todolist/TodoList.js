import React from 'react';

function TodoList({ todos, toggleTodoStatus }) {  // 添加 toggleTodoStatus 函數
    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.task} 
                        <button onClick={() => toggleTodoStatus(todo._id)}>
                            {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
