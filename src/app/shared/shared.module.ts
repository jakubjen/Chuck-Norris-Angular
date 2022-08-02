import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [InputComponent, ButtonComponent],
})
export class SharedModule {}
