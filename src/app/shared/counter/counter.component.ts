import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  @Input() value = 0;
  @Input() max = 100;
  @Input() min = 1;
  @Input() error = false;
  @Output() valueChange = new EventEmitter<number>();
  onChange: any;
  onBlur: any;

  increaseValue(): void {
    this.value = this.value < this.max ? this.value + 1 : this.max;
    this.onChange(this.value);
    this.onBlur();
  }
  decreesValue(): void {
    this.value = this.value > this.min ? this.value - 1 : this.min;
    this.onChange(this.value);
    this.onBlur();
  }

  handleNumberInputChange(event: Event): void {
    this.value = Number((event.target as HTMLInputElement).value);
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
}
