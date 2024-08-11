import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  tag: 'task-item',
  styleUrl: 'task-item.css',
  shadow: true,
})
export class TaskItem {
  @Prop() task: Task;
  @State() isEditing: boolean = false;
  @State() editedTitle: string;

  @Event() taskUpdated: EventEmitter<void>;
  @Event() taskDeleted: EventEmitter<void>;

  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  toggleEdit = () => {
    this.isEditing = !this.isEditing;
    this.editedTitle = this.task.title;
  }

  handleInputChange = (event: Event) => {
    this.editedTitle = (event.target as HTMLInputElement).value;
  }

  updateTask = async () => {
    if (this.editedTitle.trim() !== '') {
      try {
        await this.taskService.updateTask({
          ...this.task,
          title: this.editedTitle
        });
        this.isEditing = false;
        this.taskUpdated.emit();
      } catch (error) {
        console.error('Error al actualizar la tarea:', error);
      }
    }
  }

  deleteTask = async () => {
    try {
      await this.taskService.deleteTask(this.task.id);
      this.taskDeleted.emit();
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  }

  render() {
    return (
      <li>
        {this.isEditing ? (
          <div>
            <input
              type="text"
              value={this.editedTitle}
              onInput={this.handleInputChange}
            />
            <button onClick={this.updateTask}>Guardar</button>
            <button onClick={this.toggleEdit}>Cancelar</button>
          </div>
        ) : (
          <div>
            <span>{this.task.title}</span>
            <button onClick={this.toggleEdit}>Editar</button>
            <button onClick={this.deleteTask}>Eliminar</button>
          </div>
        )}
      </li>
    );
  }
}