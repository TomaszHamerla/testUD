import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";
import {TodoService} from "../core/service/todo.service";
import {interval, Subject, Subscription, takeUntil} from "rxjs";
import {Title} from "@angular/platform-browser";
import {TodoApiService} from "../core/service/todo-api.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  errorMsg = '';
  sub!: Subscription;
  stopBlinking$ = new Subject<void>();
  isTitleVisible = true;
  title = 'TestUd';

  constructor(
    private todoService: TodoService,
    private titleService: Title,
    private todoApiService: TodoApiService
  ) {
    this.todos = this.todoService.todos
  }

  ngOnInit(): void {
    this.sub = this.todoService.todoChanged.subscribe({
      next: todos => this.todos = todos
    })

    if (this.todos.length === 0) {
      this.todoApiService.getTodos().subscribe({
        // next: todos => {
        //   this.todos = todos;
        // }
        error: err => {
          this.errorMsg = 'Wystapil blad sproboj ponownie'
        }
      })
    }
  }

  startBlinking() {
    this.stopBlinking$.next();
    interval(1000)
      .pipe(takeUntil(this.stopBlinking$))
      .subscribe({
        next: () => {
          this.isTitleVisible ? this.titleService.setTitle('test') : this.titleService.setTitle(this.title);
          this.isTitleVisible = !this.isTitleVisible;
        }
      })
  }

  stopBlinkingTitle() {
    this.stopBlinking$.next();
    this.titleService.setTitle(this.title);
  }

  addTodo(value: string): void {
    this.todoApiService.postTodo({name: value, isComplete: false}).subscribe({
      next: val => {
        console.log(val)
      },
      error: err => {
        this.errorMsg = 'Wystapil blad sproboj ponownie'
      }
    })
  }

  clearErrorMSg() {
    this.errorMsg = '';
  }

  deleteTodo(id: number) {
    // this.todoService.deleteTodo(id);
    this.todoApiService.deleteTodo(id).subscribe({
      error: err => {
        this.errorMsg = 'Wystapil blad sproboj ponownie'
      }
    })
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.stopBlinkingTitle();
  }
}
