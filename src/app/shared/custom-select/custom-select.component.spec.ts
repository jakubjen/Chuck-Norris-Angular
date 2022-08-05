import { TitleCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CustomSelectComponent } from './custom-select.component';

describe('CustomSelectComponent', () => {
  let component: CustomSelectComponent;
  let fixture: ComponentFixture<CustomSelectComponent>;
  const options = ['cats', 'dogs', 'fish'];
  const placeholder = 'car';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have button', () => {
    const buttons = fixture.nativeElement.querySelector('button');
    expect(buttons).toBeTruthy();
  });

  it('have toggle open class when button is clicked', () => {
    const wrapper = fixture.debugElement.query(
      By.css('.custom-selector-wrapper')
    );
    const buttons = fixture.debugElement.query(By.css('button'));
    buttons.triggerEventHandler('click');
    fixture.detectChanges();
    expect(!!wrapper.classes['open']).toBeTruthy();
    buttons.triggerEventHandler('click');
    fixture.detectChanges();
    expect(!wrapper.classes['open']).toBeTruthy();
  });

  it('have options from options @input', () => {
    component.options = options;
    fixture.detectChanges();
    const checkboxes = fixture.debugElement.queryAll(
      By.css('input[type="checkbox"]')
    );
    expect(checkboxes.length).toEqual(options.length);
  });

  it('have placeholder from placeholder @input', () => {
    component.placeholder = placeholder;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent.trim()).toEqual(placeholder);
  });

  it('have options with are able to select', () => {
    component.options = options;
    fixture.detectChanges();
    const checkboxes = fixture.debugElement.queryAll(
      By.css('input[type="checkbox"]')
    );
    checkboxes[0].triggerEventHandler('change');
    fixture.detectChanges();
    expect(component.selectedOptions.includes(options[0])).toBeTruthy();
    console.log(component.selectedOptions);

    checkboxes[0].triggerEventHandler('change');
    fixture.detectChanges();
    console.log(component.selectedOptions);
    expect(!component.selectedOptions.includes(options[0])).toBeTruthy();
  });
});
