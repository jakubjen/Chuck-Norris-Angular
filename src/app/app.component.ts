import { Component } from '@angular/core';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '';
  title = 'chuck-norris-angular';
  jokes = 1;
  selectedCategories: string[] = [];
  options = ['dog', 'cat', 'bear'];
  name = '';
}
