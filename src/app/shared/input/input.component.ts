import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  handleTyping(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.valueChange.emit(value);
  }
}
