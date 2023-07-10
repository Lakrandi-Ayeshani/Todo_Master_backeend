import express from 'express';
import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todos.js';

const router = express.Router()

router.get("/", getTodos);

router.get("/:todoID", getTodo);

router.post("/", createTodo);

router.put("/:todoID", updateTodo);

router.delete("/:todoID", deleteTodo);

export default router;
