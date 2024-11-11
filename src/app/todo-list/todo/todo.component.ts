import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>;
  @Output() changeStatus = new EventEmitter<number>;

  openModal = false;

  constructor(
    private router: Router
  ) {
  }

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }

  navigateToTodoDetails() {
    this.router.navigate(['/todo', this.i]);
  }
}
