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

// 更新 Todo 狀態
router.patch('/update/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        todo.completed = !todo.completed;  // 切換狀態
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
