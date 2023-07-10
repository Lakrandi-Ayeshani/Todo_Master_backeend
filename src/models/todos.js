import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoName: {type: String, require: true},
    assignedBy: {type: String, requred: true},
    assignedTo: {type: String, required: true},
})

export const todoModel =  mongoose.model("todos", todoSchema )