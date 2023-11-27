const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);