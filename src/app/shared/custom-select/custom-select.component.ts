import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent {
  @Input() options: string[] = [];
  @Input() placeholder = '';
  @Output() selected = new EventEmitter<string[]>();
  selectedOptions: string[] = [];
  open = false;

  toggleSelection(option: string): void {
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions = [...this.selectedOptions, option];
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        optionForLoop => optionForLoop !== option
      );
    }
    this.selected.emit(this.selectedOptions);
  }

  get ButtonText(): string {
    return this.selectedOptions.join(', ');
  }
}
