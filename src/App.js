import React, { useState, useEffect } from 'react';
import TodoList from './todolist/TodoList';
import AddTodo from './todolist/AddTodo';


function App() {
    // 使用 useState 钩子创建 todos 状态和 setTodos 函数
    const [todos, setTodos] = useState([]);

    // 获取 Todo 列表的函数
    const fetchTodos = () => {
        fetch('/api/todos/all')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error:', error));
    };

    // 在组件加载时获取 Todo 列表
    useEffect(() => {
        fetchTodos();
    }, []);

    // 添加新的 Todo 项的函数
    const addTodo = (task) => {
        fetch('/api/todos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            fetchTodos(); // 添加成功后重新获取 Todo 列表
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="App">
            <h1>My To-Do App</h1>
            <AddTodo onAdd={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
