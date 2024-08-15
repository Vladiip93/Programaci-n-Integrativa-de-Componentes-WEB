# Gestor de Tareas del Hogar

Vladimir Escobar

NRC: 17713

## Descripción
Este proyecto es una aplicación web de gestión de tareas para el hogar que permite a los usuarios crear, leer, actualizar y eliminar (CRUD) tareas. La aplicación está construida con un frontend en Stencil y TypeScript, y un backend en Express con MySQL.

## Características
- Crear nuevas tareas
- Visualizar lista de tareas
- Editar tareas existentes
- Eliminar tareas
- Interfaz de usuario intuitiva y responsiva

## Tecnologías Utilizadas
- Frontend:
  - Stencil
  - TypeScript
  - HTML5
  - CSS3
- Backend:
  - Node.js
  - Express
  - MySQL
- Otras herramientas:
  - Axios para peticiones HTTP
  - CORS para manejo de solicitudes de origen cruzado

## Estructura del Proyecto

home-task-manager/

frontend/

  src/

    components/

    app-root/

    task-list/

    task-form/

    task-item/

  services/

    task.service.ts

  models/

    task.model.ts

    index.html

    index.ts

  package.json

  tsconfig.json

  stencil.config.ts

backend/

  src/

    routes/

      tasks.ts

  models/

      task.ts

  config/

      database.ts

  app.ts

package.json

tsconfig.json

## Instalación y Configuración

### Frontend
1. Navega al directorio `frontend`: cd frontend
2. Instala las dependencias: npm install
3. Inicia el servidor de desarrollo: npm start

### Backend
1. Navega al directorio `backend`: cd backend
2. Instala las dependencias: npm install
3. Configura la base de datos MySQL:
  - Crea una base de datos llamada `home_tasks`
  - Actualiza las credenciales en el archivo `.env`
4. Inicia el servidor: npm run dev

## Uso
Una vez que ambos servidores estén en funcionamiento:
1. Abre tu navegador y ve a `http://localhost:3333`
2. Usa el formulario en la parte superior para agregar nuevas tareas
3. Las tareas aparecerán en la lista debajo del formulario
4. Cada tarea tiene opciones para editar y eliminar

## Componentes Principales

### Frontend
- `app-root`: Componente principal que estructura la aplicación
- `task-form`: Maneja la creación de nuevas tareas
- `task-list`: Muestra la lista de tareas y gestiona la actualización de la lista
- `task-item`: Representa una tarea individual con opciones para editar y eliminar

### Backend
- `app.ts`: Punto de entrada del servidor Express
- `routes/tasks.ts`: Define las rutas API para las operaciones CRUD
- `models/task.ts`: Modelo de datos para las tareas y funciones de interacción con la base de datos
- `config/database.ts`: Configuración de la conexión a la base de datos MySQL

## Mejoras Futuras
- Implementar autenticación de usuarios
- Añadir categorías a las tareas
- Implementar un sistema de recordatorios
- Mejorar el diseño y la experiencia de usuario
- Añadir tests unitarios y de integración

## Repositorio de GitHub
- [Repositorio de Vladimir Escobar](https://github.com/Vladiip93/home-task-manager)
