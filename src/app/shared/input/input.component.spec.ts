import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const testData = {
    value: '',
    name: 'username',
    label: 'Enter username',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.value = testData.value;
    component.label = testData.label;
    component.name = testData.name;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input tag', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input).not.toBeNull();
  });

  it('should have input with default value', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const value = input.value;
    expect(value === testData.value).toBeTrue();
  });

  it('should have input and user should be able to change the value', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const spy = spyOn(component, 'handleTyping');
    input.value = 'Super title';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should have input and input should have name equal to name @input', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    console.log(input);

    expect(input.name === testData.name).toBeTrue();
  });

  it('should have label', () => {
    const label = fixture.nativeElement.querySelector('label');
    expect(label).not.toBeNull();
  });

  it('should have text-label element', () => {
    const label = fixture.nativeElement.querySelector('.text-label');
    expect(label).not.toBeNull();
  });

  it('should have text-label and text should be equal to label @input ', () => {
    const label: HTMLElement =
      fixture.nativeElement.querySelector('.text-label');
    console.log(label.innerText);
    expect(label.innerText === testData.label).toBeTrue();
  });
});
