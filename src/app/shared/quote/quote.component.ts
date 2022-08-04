import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {
  @Input() quote: string = '';
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() pending: boolean = true;
  @Input() pendingText: string = '';
}
