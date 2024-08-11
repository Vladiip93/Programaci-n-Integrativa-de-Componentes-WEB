import pool from '../config/database';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export async function getAllTasks(): Promise<Task[]> {
  const [rows] = await pool.query('SELECT * FROM tasks');
  return rows as Task[];
}

export async function createTask(title: string): Promise<Task> {
  const [result] = await pool.query(
    'INSERT INTO tasks (title, completed) VALUES (?, ?)',
    [title, false]
  );
  const id = (result as any).insertId;
  return { id, title, completed: false };
}

export async function updateTask(id: number, title: string, completed: boolean): Promise<Task | null> {
  await pool.query(
    'UPDATE tasks SET title = ?, completed = ? WHERE id = ?',
    [title, completed, id]
  );
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
  return (rows as Task[])[0] || null;
}

export async function deleteTask(id: number): Promise<void> {
  await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
}