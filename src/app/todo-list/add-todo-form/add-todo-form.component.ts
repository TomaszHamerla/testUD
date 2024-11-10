import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodo = new EventEmitter<string>;
  name = '';
  // person = {name: 'test', surname: 'testowy', role: 'father'}

  addTodoNew() {
    this.addTodo.emit(this.name);
  }
}
