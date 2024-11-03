import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Todo} from "../../shared/interfaces/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
//implements OnChanges
//
//implements DoCheck
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>;
  openModal = false;
  timeout: any;

  // constructor() {
  //   console.log(this.todo) -> undefined
  // }

  ngOnInit(): void {
   this.timeout = setTimeout(() => {
      console.log('onInit')
    },3000)
    //console.log(this.todo) -> value correct
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

  // ngDoCheck(): void {
  // }

  ngOnDestroy(): void {
    // console.log("stopTimeout")
    // clearTimeout(this.timeout);
  }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;

    console.log(todo)
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
