import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  errorMsg = '';

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('todos')!) ?? []
  }

  addTodo(value: string): void {
    if (value.length <= 3) {
      this.errorMsg = 'Minimum 4 znaki';
      return;
    }

    this.todos.push({name: value, isComplete: false});
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  clearErrorMSg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((value, index) => index !== i)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
