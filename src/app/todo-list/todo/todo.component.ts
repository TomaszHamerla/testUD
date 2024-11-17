import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() id!: number;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>;
  @Output() changeStatus = new EventEmitter<number>;

  openModal = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  changeTodoStatus() {
    this.changeStatus.emit(this.id);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }

  navigateToTodoDetails() {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route
    }
    this.router.navigate([this.id], navigationExtras);
  }
}
