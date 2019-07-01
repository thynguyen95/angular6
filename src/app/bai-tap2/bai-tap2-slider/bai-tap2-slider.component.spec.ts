import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2SliderComponent } from './bai-tap2-slider.component';

describe('BaiTap2SliderComponent', () => {
  let component: BaiTap2SliderComponent;
  let fixture: ComponentFixture<BaiTap2SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
