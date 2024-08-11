import { Component, h, State, Listen } from '@stencil/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.css',
  shadow: true,
})
export class TaskList {
  @State() tasks: Task[] = [];
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  async componentWillLoad() {
    await this.loadTasks();
  }

  loadTasks = async () => {
    try {
      this.tasks = await this.taskService.getTasks();
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  }

  @Listen('taskCreated', { target: 'body' })
  @Listen('taskUpdated', { target: 'body' })
  @Listen('taskDeleted', { target: 'body' })
  handleTaskChange() {
    this.loadTasks();
  }

  render() {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {this.tasks.map((task) => (
            <task-item 
              key={task.id} 
              task={task}
            ></task-item>
          ))}
        </ul>
      </div>
    );
  }
}