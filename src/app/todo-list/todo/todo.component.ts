import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";

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

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
