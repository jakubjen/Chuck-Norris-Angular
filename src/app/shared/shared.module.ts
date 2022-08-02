import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [InputComponent],
})
export class SharedModule {}
