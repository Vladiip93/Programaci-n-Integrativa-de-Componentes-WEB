import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Gestor de Tareas del Hogar</h1>
        </header>
        <main>
          <task-form></task-form>
          <task-list></task-list>
        </main>
      </div>
    );
  }
}