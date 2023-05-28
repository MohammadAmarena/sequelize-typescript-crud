import express, { RequestHandler } from 'express';
import { Todos } from '../models/todos.js';

export const createToDo: RequestHandler = async (req, res, next) => {
  try {
    const todo = await Todos.create({ ...req.body });
    return res
      .status(200)
      .json({ message: 'Todo created successfully', data: todo });
  } catch (error) {
    next(error);
  }
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findByPk(id);
    await Todos.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: 'Todo deleted successfully', data: deletedTodo });
  } catch (error) {
    next(error);
  }
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  try {
    const allTodos = await Todos.findAll();
    return res
      .status(200)
      .json({ message: 'Todo fetched successfully', data: allTodos });
  } catch (error) {
    next(error);
  }
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByPk(id);
    return res
      .status(200)
      .json({ message: 'Todo fetched successfully', data: todo });
  } catch (error) {
    next(error);
  }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updatedTodo = await Todos.findByPk(id);
  return res
  .status(200)
  .json({ message: "Todo updated successfully", data: updatedTodo });
  } catch (error) {
  next(error);
  }
  };

export const getApiDocs = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const apiDocs = `
  <style>
      body { background-color: #333; font-family: courier; }
      li { font-size: 1.3rem; padding: .5rem;
          color: gray; margin: .5rem; background-color: #111;}
      a { color: indianred; }
  </style>
      <h1>Api Documentation</h1>
      <ul>
          <li>
              <a href='/todos'>/ToDos</a>
              Get All Todos
          </li>
      </ul>
  `;
  res.send(apiDocs);
};
