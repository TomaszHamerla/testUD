import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";
import {TodoService} from "../core/service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {TodoApiService} from "../core/service/todo-api.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {

  todo: Todo | undefined;
  id!: number;
  errorMsg = '';

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private todoApiService: TodoApiService
  ) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = +params['id'];
    //   this.todo = this.todoService.getTodo(this.id);
    // })

    this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
    })

    this.route.paramMap.pipe(
      switchMap((params) => this.todoApiService.getTodo(Number(params.get('id'))))
    ).subscribe({
      next: todo => {
        this.todo = {...todo}
      },
      error: err => {
        if (err.status === 404) {
          this.errorMsg = 'brak zadania o podanym nr'
        } else {
          this.errorMsg = 'Wystapil blad'
        }
      }
    })
  }

  navigateToNextTodo() {
    this.router.navigate(['/todo', this.id + 1]);
  }

  navigateBack() {
    this.location.back();
  }

  clearErrorMsh() {
    this.errorMsg = '';
  }
}
