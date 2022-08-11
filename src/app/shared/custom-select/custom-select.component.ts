import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('openClose', [
      state(
        'void',
        style({
          height: 0,
        })
      ),
      transition('void <=> *', [animate('0.3s ease-in-out')]),
    ]),
  ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() placeholder = '';
  selectedOptions: string[] = [];
  open = false;
  onChange: any;
  onBlur: any;

  toggleSelection(option: string): void {
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions = [...this.selectedOptions, option];
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        optionForLoop => optionForLoop !== option
      );
    }
    this.onChange(this.selectedOptions);
  }
  test() {
    console.log('cos');
  }
  toggleOpen() {
    this.open = !this.open;
    if (this.open === false) this.onBlur();
  }
  close(): void {
    this.open = false;
    this.onBlur();
  }

  get ButtonText(): string {
    return this.selectedOptions.join(', ');
  }

  writeValue(value: string[]): void {
    this.selectedOptions = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
}
