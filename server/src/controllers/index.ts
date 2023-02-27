import { Response, Request } from "express";

import { ITodo } from "../types/ITodo";
import Todo from "../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();

    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
}

export { getTodos }