import {Component} from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";
import {TodoService} from "../core/service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMsg = '';

  constructor(
    private todoService: TodoService
  ) {
    this.todos= this.todoService.todos
  }

  addTodo(value: string): void {
    if (value.length <= 3) {
      this.errorMsg = 'Minimum 4 znaki';
      return;
    }
    this.todoService.addTodo(value);
    this.todos = this.todoService.todos;
  }

  clearErrorMSg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
    this.todos = this.todoService.todos;
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
    this.todos = this.todoService.todos;
  }
}
