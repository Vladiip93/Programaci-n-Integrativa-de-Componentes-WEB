import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { TaskService } from '../../services/task.service';

@Component({
  tag: 'task-form',
  styleUrl: 'task-form.css',
  shadow: true,
})
export class TaskForm {
  @State() title: string = '';
  private taskService: TaskService;

  @Event() taskCreated: EventEmitter<void>;

  constructor() {
    this.taskService = new TaskService();
  }

  handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (this.title.trim()) {
      try {
        await this.taskService.createTask({ title: this.title });
        this.title = '';
        this.taskCreated.emit();
      } catch (error) {
        console.error('Error al crear la tarea:', error);
      }
    }
  }

  handleInputChange = (event: Event) => {
    this.title = (event.target as HTMLInputElement).value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.title}
          onInput={this.handleInputChange}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    );
  }
}