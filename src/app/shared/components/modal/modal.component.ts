import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>;

  sub!: Subscription;

  ngOnInit(): void {
    // of(1, 2, 3).subscribe({
    //   next: val => console.log(val),
    // })

    /// TODO
    if (this.sub) {
      return;
    }
    this.sub = interval(500).subscribe({
      next: val => console.log(val)
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      // this.sub.unsubscribe();
    }
  }

  onClose() {
    this.close.emit();
  }
}
