import { todoModel } from "../models/todos.js";

// fetch all todos

export const getTodos = (async (req, res) => {
    try {
        const response = await todoModel.find({})
        res.json(response);
        console.log(response)
    }
    catch (err) {
        console.error(err);
    }
});

// fetch a todo

export const getTodo = (async (req, res) => {
    const fetchTodoId = req.params.todoID;
    const response = await todoModel.findById(fetchTodoId);

    try {
        res.json(response)
    }
    catch (err) {
        console.error(err);
    }
});

// create a todo

export const createTodo = (async(req, res) => {
    const todo = new todoModel(req.body);
    try {
        const response = await todoModel.create(todo);
        res.json(response);
    }
    catch(err) {
        console.error(err);
    }
});

// Update a todo

export const updateTodo = (async (req, res) => {
    const updateTodoId = req.params.todoID;
    const newTodo = req.body;
    try {
        const response = await todoModel.findByIdAndUpdate(updateTodoId, newTodo);
        res.json(response);
    }
    catch (err) {
        console.error(err);
    }

});

// delete a todo

export const deleteTodo = (async (req, res) => {
    const deleteId = req.params.todoID;
    try {
        const response = await todoModel.findByIdAndDelete(deleteId);
        res.json(response);
    }
    catch (err) {
        console.error(err);
    }
});
