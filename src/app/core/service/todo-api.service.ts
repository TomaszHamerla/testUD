import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../environment/apiBaseUrl";
import {Todo} from "../../shared/interfaces/Todo";
import {Observable, tap} from "rxjs";
import {TodoService} from "./todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(
    private http: HttpClient,
    private todoService: TodoService
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/todos`).pipe(
      tap((todos) => this.todoService.todos = todos)
    )
  }

  postTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/todos`, todo);
  }
}
