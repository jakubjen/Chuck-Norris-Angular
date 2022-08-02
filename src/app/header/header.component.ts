import { Component, Input } from '@angular/core';
import { ASSETS } from '../constants/assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() chuckFace: boolean = true;
  get imageUrls() {
    return ASSETS;
  }
}
