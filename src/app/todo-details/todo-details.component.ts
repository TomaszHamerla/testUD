import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/interfaces/Todo";
import {TodoService} from "../core/service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit{

  todo: Todo | undefined;
  id!: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = +params['id'];
    //   this.todo = this.todoService.getTodo(this.id);
    // })

    this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.todo = this.todoService.getTodo(this.id);
    })
  }

  navigateToNextTodo() {
    this.router.navigate(['/todo', this.id + 1]);
  }
}
