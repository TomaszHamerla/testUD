import {Injectable} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? []

  constructor() {
  }

  public get todos() {
    return this._todos.slice();
  }

  addTodo(name: string): void {
    this._todos.push({name, isComplete: false});
    this.saveToLocaleStorage();
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this._todos[index],
      isComplete: !this._todos[index].isComplete
    }
    this.saveToLocaleStorage();
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((value, index) => index !== i);
    this.saveToLocaleStorage();
  }

  saveToLocaleStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
