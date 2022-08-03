import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [InputComponent, CustomSelectComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [InputComponent, CustomSelectComponent],
})
export class SharedModule {}
