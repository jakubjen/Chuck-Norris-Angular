import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter();
  @Input() max = 100;
  @Input() min = 1;
  @Input() error = false;

  IncreaseValue(): void {
    if (this.value >= this.max) {
      this.value = this.max;
    } else {
      this.value += 1;
    }
    this.valueChange.next(this.value);
  }
  DecreesValue(): void {
    if (this.value <= this.min) {
      this.value = this.min;
    } else {
      this.value += -1;
    }
    this.valueChange.next(this.value);
  }

  HandleNumberInputChange(event: Event): void {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.value = newValue;
    this.valueChange.emit(this.value);
  }
}
