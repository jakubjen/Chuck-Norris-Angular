import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { CounterComponent } from './counter/counter.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { ClickOutSideDirective } from './clickOutSide/click-out-side.directive';

@NgModule({
  declarations: [
    InputComponent,
    CustomSelectComponent,
    ButtonComponent,
    CounterComponent,
    ClickOutSideDirective,
  ],
  imports: [CommonModule, FormsModule, TranslateModule, MatIconModule],
  exports: [
    InputComponent,
    CustomSelectComponent,
    ButtonComponent,
    CounterComponent,
    ClickOutSideDirective,
  ],
})
export class SharedModule {}
