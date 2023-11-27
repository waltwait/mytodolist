const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// 获取所有 Todo 项
router.get('/all', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 添加新的 Todo 项
router.post('/add', async (req, res) => {
    const todo = new Todo({
        task: req.body.task
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 其他路由...

module.exports = router;
