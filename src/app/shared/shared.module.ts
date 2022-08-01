import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent],
})
export class SharedModule {}
