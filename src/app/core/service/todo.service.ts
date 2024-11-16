import {Injectable} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? []
  private _todos: Todo[] =  []
  todoChanged = new Subject<Todo[]>;

  constructor() {
  }

  public get todos() {
    return this._todos.slice();
  }

  public set todos(arrTodos: Todo[]) {
    this._todos = [...arrTodos];
    this.todoChanged.next(this.todos);
  }

  getTodo(index: number): Todo | undefined {
    return this.todos[index];
  }

  addTodo(todo: Todo): void {
    this._todos.push(todo);
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

  deleteTodo(id: number) {
    this._todos = this.todos.filter((value, index) => value.id !== id);
    this.todoChanged.next(this._todos);
  }

  saveToLocaleStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
