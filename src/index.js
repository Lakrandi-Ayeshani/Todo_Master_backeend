import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import todoRouter from './routes/todos.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", todoRouter);

const MONGO_URL = "mongodb+srv://lakrandiayeshani1204:MERNpassword123@cluster0.ubbizur.mongodb.net/todosDB?retryWrites=true&w=majority";

async function connectDB() {
    await mongoose.connect(MONGO_URL);
}

connectDB().then(() => console.log("server connect to the Database")).catch((err) => console.log("Failed reason: ",err))

app.listen(8000, () => console.log("server started"));


