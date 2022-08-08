import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { forkJoin, of } from 'rxjs';
import JokeApiResponse from '../models/jokeApiResponse';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const categories = ['test', 'test2'];
  const name = 'kuba';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    service = new JokeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected joke', (done: DoneFn) => {
    const response: JokeApiResponse = {
      categories: [],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'lu8fVWBqQ5CLduxZ1dSCmg',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
      value:
        'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
    };
    httpClientSpy.get.and.returnValues(of(response));

    service.fetchJoke('', []).subscribe({
      next: joke => {
        done();
        expect(joke).toBe(response.value);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return expected jokes', (done: DoneFn) => {
    const response: JokeApiResponse[] = [
      {
        categories: [],
        created_at: '2020-01-05 13:42:29.855523',
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        id: 'lu8fVWBqQ5CLduxZ1dSCmg',
        updated_at: '2020-01-05 13:42:29.855523',
        url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
        value:
          'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
      },

      {
        categories: [],
        created_at: '2020-01-05 13:42:29.855523',
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        id: 'lu8fVWBqQ5CLduxZ1dSCmg',
        updated_at: '2020-01-05 13:42:29.855523',
        url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
        value: 'Test',
      },
    ];
    httpClientSpy.get.and.returnValues(of(response[0]), of(response[1]));

    forkJoin(service.fetchJokes('', [], 2)).subscribe({
      next: joke => {
        done();
        expect(joke.length).toBe(response.length);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(2);
  });

  it('should send a request to a proper url with no name and no categories', (done: DoneFn) => {
    const response: JokeApiResponse = {
      categories: [],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'lu8fVWBqQ5CLduxZ1dSCmg',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
      value:
        'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
    };
    httpClientSpy.get.and.returnValues(of(response));

    service.fetchJoke('', []).subscribe({
      next: joke => {
        done();
        expect(joke).toBe(response.value);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.allArgs()[0][0]).toBe(
      'https://api.chucknorris.io/jokes/random'
    );
  });

  it('should send a request to a proper url with name and no categories', (done: DoneFn) => {
    const response: JokeApiResponse = {
      categories: [],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'lu8fVWBqQ5CLduxZ1dSCmg',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
      value:
        'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
    };
    httpClientSpy.get.and.returnValues(of(response));

    service.fetchJoke(name, []).subscribe({
      next: joke => {
        done();
        expect(joke).toBe(response.value);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.allArgs()[0][0]).toBe(
      `https://api.chucknorris.io/jokes/random?name=${name}`
    );
  });

  it('should send a request to a proper url with no name and with categories', (done: DoneFn) => {
    const response: JokeApiResponse = {
      categories: [],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'lu8fVWBqQ5CLduxZ1dSCmg',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
      value:
        'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
    };
    httpClientSpy.get.and.returnValues(of(response));
    service.fetchJoke('', categories).subscribe({
      next: joke => {
        done();
        expect(joke).toBe(response.value);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.allArgs()[0][0]).toBe(
      `https://api.chucknorris.io/jokes/random?category=${categories.join(',')}`
    );
  });

  it('should send a request to a proper url with name and categories', (done: DoneFn) => {
    const response: JokeApiResponse = {
      categories: [],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'lu8fVWBqQ5CLduxZ1dSCmg',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/lu8fVWBqQ5CLduxZ1dSCmg',
      value:
        'Chuck Norris can be a better villain than Freddy Krueger, Jason Voorhees, Snaptrap, Venom, Lizard, and.....well any other villain. Hes a better villain than anyone.',
    };
    httpClientSpy.get.and.returnValues(of(response));
    service.fetchJoke(name, categories).subscribe({
      next: joke => {
        done();
        expect(joke).toBe(response.value);
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.allArgs()[0][0]).toBe(
      `https://api.chucknorris.io/jokes/random?name=${name}&category=${categories.join(
        ','
      )}`
    );
  });
});
