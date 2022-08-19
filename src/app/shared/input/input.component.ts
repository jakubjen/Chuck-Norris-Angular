import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() name = '';
  onChange: any;
  onBlur: any;
  value = '';

  handleTyping(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value
      .replace(/Chuck/g, 'Chuc𝅷k')
      .replace(/Norris/g, 'Nor𝅷ris');
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
}
