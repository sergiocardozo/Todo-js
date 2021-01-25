import { Todo } from './classes/todo.class.js';
import './style.css';

import { todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml );
