import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutSideDirective } from './click-out-side.directive';

@Component({
  template: `<div>
    <p [appClickOutSideDirective] (clickOutSide)="handleClickOutSide()">
      Test data
    </p>
    <span>Element outside</span>
  </div>`,
})
class TestComponent {
  handleClickOutSide() {}
}

describe('InputComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ClickOutSideDirective, TestComponent],
    }).createComponent(TestComponent);

    component = fixture.componentInstance;
    spy = spyOn(component, 'handleClickOutSide');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call handleClickOutSide when user click element witch isn't in this dom element", () => {
    const element = fixture.nativeElement.querySelector('span');
    element.dispatchEvent(new MouseEvent('mousedown'));
    fixture.detectChanges();
    expect(spy.calls.count()).toBe(1);
  });
});
