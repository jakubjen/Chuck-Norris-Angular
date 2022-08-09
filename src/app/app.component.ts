import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { forkJoin } from 'rxjs';
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
  name = '';
  joke = '';
  jokePending = false;
  jokeError = false;
  counterError = false;

  constructor(private jokeService: JokeService) {
    this.getJoke();
  }

  getJoke(): void {
    if (this.jokePending) return;
    this.jokePending = true;
    this.jokeService.fetchJoke(this.name, this.selectedCategories).subscribe({
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

  handleCounterValueChanged(counterValue: number): void {
    this.counterError = counterValue < 1 || counterValue > 100;
    this.numberOfJokes = counterValue;
  }

  downloadJokes(): void {
    if (this.counterError) return;
    forkJoin(
      this.jokeService.fetchJokes(
        this.name,
        this.selectedCategories,
        this.numberOfJokes
      )
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
