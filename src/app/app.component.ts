import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, max } from 'rxjs';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numberOfJokes = 1;
  selectedCategories: string[] = [];
  options = ['movie', 'travel'];
  joke = '';
  jokePending = false;
  jokeError = false;
  drawJokeForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    categories: new FormControl([]),
  });
  downloadJokeForm: FormGroup = new FormGroup({
    count: new FormControl(1, [Validators.min(1), Validators.max(100)]),
  });

  constructor(private jokeService: JokeService) {
    this.getJoke();
  }

  getJoke(): void {
    if (this.jokePending) return;
    this.jokePending = true;
    const { name, categories } = this.drawJokeForm.value;
    this.jokeService.fetchJoke(name, categories).subscribe({
      next: (joke: string) => {
        this.jokeError = false;
        this.joke = joke;
        this.jokePending = false;
      },

      error: () => {
        this.jokePending = false;
        this.jokeError = true;
      },
    });
  }

  downloadJokes(): void {
    const { name, categories } = this.drawJokeForm.value;
    forkJoin(
      this.jokeService.fetchJokes(name, categories, this.numberOfJokes)
    ).subscribe({
      next(jokes) {
        var element = document.createElement('a');
        element.setAttribute(
          'href',
          'data:text/plain;charset=utf-8,' +
            encodeURIComponent(jokes.join('\n'))
        );
        element.setAttribute('download', 'jokes.txt');
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      },
    });
  }
}
