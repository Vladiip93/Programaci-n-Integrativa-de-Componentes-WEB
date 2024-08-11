import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../models/task';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const task = await createTask(title);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await updateTask(parseInt(id), title, completed);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTask(parseInt(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

export default router;