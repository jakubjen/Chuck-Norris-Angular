import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { QuoteComponent } from './quote/quote.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [InputComponent, QuoteComponent, SpinnerComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [InputComponent, QuoteComponent],
})
export class SharedModule {}
