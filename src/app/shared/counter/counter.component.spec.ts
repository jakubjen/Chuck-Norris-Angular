import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { max } from 'rxjs';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  const testInputValue = 84;
  const maxValue = 10;
  const minValue = 0;
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two buttons and input', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const input = fixture.nativeElement.querySelector('input');
    expect(buttons.length).toBe(2);
    expect(input).toBeTruthy();
  });

  it('should have input with value from value @input', () => {
    component.value = testInputValue;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(Number(input.value)).toEqual(testInputValue);
  });

  it('should have button to increase value', () => {
    component.value = testInputValue;
    const input = fixture.nativeElement.querySelector('input');
    const plusButton = fixture.debugElement.query(By.css('button.plus'));
    expect(plusButton).not.toBeNull();
    plusButton.triggerEventHandler('click');
    fixture.detectChanges();
    expect(Number(input.value)).toEqual(testInputValue + 1);
  });

  it("shouldn't have value above the max value", () => {
    component.value = maxValue;
    component.max = maxValue;
    const input = fixture.nativeElement.querySelector('input');
    const plusButton = fixture.debugElement.query(By.css('button.plus'));
    expect(plusButton).not.toBeNull();
    plusButton.triggerEventHandler('click');
    fixture.detectChanges();
    expect(Number(input.value)).toEqual(maxValue);
  });

  it('should have button to decrease value', () => {
    component.value = testInputValue;
    const input = fixture.nativeElement.querySelector('input');
    const minusButton = fixture.debugElement.query(By.css('button.minus'));
    expect(minusButton).not.toBeNull();
    minusButton.triggerEventHandler('click');
    fixture.detectChanges();
    expect(Number(input.value)).toEqual(testInputValue - 1);
  });

  it("shouldn't have value under the min value", () => {
    component.value = minValue;
    component.min = minValue;
    const input = fixture.nativeElement.querySelector('input');
    const minusButton = fixture.debugElement.query(By.css('button.minus'));
    expect(minusButton).not.toBeNull();
    minusButton.triggerEventHandler('click');
    fixture.detectChanges();
    expect(Number(input.value)).toEqual(minValue);
  });
});
