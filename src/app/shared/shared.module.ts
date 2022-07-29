import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContainerComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [ContainerComponent, InputComponent],
})
export class SharedModule {}
