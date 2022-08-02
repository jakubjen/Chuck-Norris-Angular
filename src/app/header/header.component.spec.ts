import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ASSETS } from '../constants/assets';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have image tag'`, () => {
    const image: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(image).not.toBeNull();
  });

  it('should have Chuck Norris image when chuckFace input is true', () => {
    component.chuckFace = true;
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    const src = img.src;
    expect(src.endsWith(ASSETS.CHUCK_FACE)).toBeTrue();
  });

  it('should have face icon  when chuckFace input is false', () => {
    component.chuckFace = false;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    const src = img.src;

    expect(src.endsWith(ASSETS.FACE_ICON)).toBeTrue();
  });
});
