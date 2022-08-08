import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import CONFIGURATION from '../constants/configuration';
import JokeApiResponse from '../models/jokeApiResponse';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  joke = new Subject<string>();
  jokeForDownload = new Subject<string[]>();

  constructor(private http: HttpClient) {}

  public fetchJoke(name: string, category: string[]) {
    let url = `${CONFIGURATION.API_URL}/random`;
    if (name && category.length) {
      url += `?name=${name}&category=${category}`;
    } else if (name) {
      url += `?name=${name}`;
    } else if (category.length) {
      url += `?category=${category}`;
    }
    return this.http.get<JokeApiResponse>(url).pipe(
      map(response => {
        return response.value;
      })
    );
  }

  public fetchJokes(name: string, category: string[], amount: number) {
    const jokes: Observable<string>[] = [];
    for (let i = 0; i < amount; i++) {
      const joke = this.fetchJoke(name, category);
      jokes.push(joke);
    }
    return jokes;
  }
}
