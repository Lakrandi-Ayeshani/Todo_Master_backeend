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
  "hello"
});

// create a todo

export const createTodo = (async(req, res) => {
    const todo = new todoModel(req.body);
    try {
        const response = await todo.save();
        console.log(todo);

    }
    catch(err) {
        console.error(err)
    }
});

// Update a todo

export const updateTodo = (async (req, res) => {
"helooo"
});

// delete a todo

export const deleteTodo = (async (req, res) => {
"helooo"
});
