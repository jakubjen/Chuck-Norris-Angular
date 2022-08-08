import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  const testButtonText = 'TestButton';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.buttonText = testButtonText;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text of buttonText @input', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.innerText === testButtonText).toBeTruthy();
  });

  it('should have text of buttonText @input', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.innerText === testButtonText).toBeTruthy();
  });
});
