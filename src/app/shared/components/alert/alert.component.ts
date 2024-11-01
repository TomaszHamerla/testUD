import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() errorMsg!: string;
  @Output() clearMsg = new EventEmitter<void>;

  clearErrorMSg() {
    this.clearMsg.emit();
  }
}
