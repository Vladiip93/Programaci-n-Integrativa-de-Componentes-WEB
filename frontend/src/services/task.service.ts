import axios from 'axios';
import { Task } from '../models/task.model';

const API_URL = 'http://localhost:3000/api/tasks';

export class TaskService {
  async getTasks(): Promise<Task[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }

  async createTask(task: { title: string }): Promise<Task> {
    const response = await axios.post(API_URL, task);
    return response.data;
  }

  async updateTask(task: Task): Promise<Task> {
    const response = await axios.put(`${API_URL}/${task.id}`, task);
    return response.data;
  }

  async deleteTask(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  }
}