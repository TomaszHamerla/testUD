import {Injectable} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? []
  todoChanged = new Subject<Todo[]>;

  constructor() {
  }

  public get todos() {
    return this._todos.slice();
  }

  getTodo(index: number): Todo | undefined {
    return this.todos[index];
  }

  addTodo(name: string): void {
    this._todos.push({name, isComplete: false});
    this.saveToLocaleStorage();
    this.todoChanged.next(this._todos);
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this._todos[index],
      isComplete: !this._todos[index].isComplete
    }
    this.saveToLocaleStorage();
    this.todoChanged.next(this._todos);
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((value, index) => index !== i);
    this.saveToLocaleStorage();
    this.todoChanged.next(this._todos);
  }

  saveToLocaleStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
