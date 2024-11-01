import { Component } from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMsg = '';

  addTodo(value: string): void {
    if (value.length <=3) {
      this.errorMsg = 'Minimum 4 znaki';
      return;
    }

    this.todos.push({name: value, isComplete: false});
    console.log(this.todos)
  }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;

    console.log(todo)
  }

  clearErrorMSg() {
    this.errorMsg = '';
  }
}
