import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, CustomSelectComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, TranslateModule, MatIconModule],
  exports: [InputComponent, CustomSelectComponent, ButtonComponent],
})
export class SharedModule {}
