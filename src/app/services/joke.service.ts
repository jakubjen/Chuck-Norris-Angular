import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, Subject } from 'rxjs';
import CONFIGURATION from '../constants/configuration';
import JokeApiResponse from '../models/jokeApiResponse';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  joke = new Subject<string>();
  error = new Subject<boolean>();
  jokeForDownload = new Subject<string[]>();
  jokeForDownloadError = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  private fetchJoke(name: string, category: string) {
    return this.http
      .get<JokeApiResponse>(CONFIGURATION.API_URL + '/random')
      .pipe(
        map(response => {
          return response.value;
        })
      );
  }

  public getJoke(name: string, category: string) {
    this.error.next(false);
    const sendJoke = (joke: string) => {
      this.joke.next(joke);
    };
    this.fetchJoke(name, category).subscribe({
      next(joke) {
        sendJoke(joke);
      },
      error: () => {
        this.error.next(true);
      },
    });
  }

  private getJokes(name: string, category: string, amount: number) {
    const jokes: Observable<string>[] = [];
    for (let i = 0; i < amount; i++) {
      const joke = this.fetchJoke(name, category);
      jokes.push(joke);
    }
    return forkJoin(jokes);
  }

  public getJokesForDownload(name: string, category: string, amount: number) {
    this.jokeForDownloadError.next(false);
    const handleError = () => {
      this.jokeForDownloadError.next(true);
    };

    const send = (jokes: string[]) => {
      this.jokeForDownload.next(jokes);
    };

    this.getJokes(name, category, amount).subscribe({
      next: jokes => {
        send(jokes);
      },
      error: () => {
        handleError();
      },
    });
  }
}
