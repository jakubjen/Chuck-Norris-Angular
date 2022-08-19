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
  availableCategories: string[] = [];
  joke = '';
  jokePending = false;
  jokeError = false;
  drawJokeForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    selectedCategories: new FormControl([]),
  });
  downloadJokeForm: FormGroup = new FormGroup({
    count: new FormControl(1, [Validators.min(1), Validators.max(100)]),
  });

  constructor(private jokeService: JokeService) {
    this.getJoke();
    this.getCategories();
  }

  getJoke(): void {
    if (this.jokePending) return;
    this.jokePending = true;
    const { name, selectedCategories } = this.drawJokeForm.value;
    this.jokeService.fetchJoke(name, selectedCategories).subscribe({
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

  getCategories() {
    this.jokeService.fetchCategories().subscribe({
      next: value => {
        this.availableCategories = value;
      },
    });
  }

  downloadJokes(): void {
    const { name, selectedCategories } = this.drawJokeForm.value;
    const { count } = this.downloadJokeForm.value;
    forkJoin(
      this.jokeService.fetchJokes(name, selectedCategories, count)
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
