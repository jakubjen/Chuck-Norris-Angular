import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import CONFIGURATION from '../constants/configuration';
import JokeApiResponse from '../models/jokeApiResponse';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  public fetchJoke(name: string, category: string[]) {
    let url = `${CONFIGURATION.API_URL}/random`;
    let params = new HttpParams();
    if (!!name) params = params.append('name', name);
    if (!!category.length)
      params = params.append('category', category.join(','));

    return this.http.get<JokeApiResponse>(url, { params }).pipe(
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
