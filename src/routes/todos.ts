import { Router } from 'express';

import {
  createToDo,
  deleteToDo,
  getAllToDo,
  updateTodo,
  getTodoById,
  getApiDocs,
} from '../controller/todos.js';

const router = Router();

router.get('/', getApiDocs);

router.post('/todos', createToDo);

router.get('/todos', getAllToDo);

router.get('/todos/:id', getTodoById);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteToDo);

export default router;
