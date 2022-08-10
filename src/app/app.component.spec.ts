import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { JokeService } from './services/joke.service';
import { Observable, scheduled } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let jokeServiceSpy;
  const testJoke = 'Joke for testing';
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    jokeServiceSpy = jasmine.createSpyObj('jokeService', [
      'fetchJoke',
      'fetchJokes',
    ]);
    jokeServiceSpy.fetchJoke.and.returnValue(
      new Observable(observer => {
        observer.next(testJoke);
        observer.complete();
      })
    );

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: JokeService, useValue: jokeServiceSpy }],
      imports: [TranslateTestingModule.withTranslations({})],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have container'`, () => {
    const container = fixture.nativeElement.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it(`should have container and container shouldn't be empty'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const container = fixture.nativeElement.querySelector('.container');
    expect(container.innerHTML).not.toBe('');
  });

  it('should have joke on startup', () => {
    expect(component.joke).toBe(testJoke);
  });
});
