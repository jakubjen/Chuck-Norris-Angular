import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [InputComponent, CounterComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [InputComponent, CounterComponent],
})
export class SharedModule {}
