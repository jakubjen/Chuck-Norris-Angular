import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateTestingModule.withTranslations({})],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have container'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const container = fixture.nativeElement.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it(`should have container and container shouldn't be empty'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const container = fixture.nativeElement.querySelector('.container');
    expect(container.innerHTML).not.toBe('');
  });
});
