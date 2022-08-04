import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Input() min = 1;
  @Input() error = false;
  @Output() valueChange = new EventEmitter<number>();

  increaseValue(): void {
    this.value = this.value < this.max ? this.value + 1 : this.max;
    this.valueChange.next(this.value);
  }
  decreesValue(): void {
    this.value = this.value > 1 ? this.value - 1 : this.min;
    this.valueChange.next(this.value);
  }

  handleNumberInputChange(event: Event): void {
    this.value = Number((event.target as HTMLInputElement).value);
    this.valueChange.emit(this.value);
  }
}
