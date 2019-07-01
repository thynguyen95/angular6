import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2ItemComponent } from './bai-tap2-item.component';

describe('BaiTap2ItemComponent', () => {
  let component: BaiTap2ItemComponent;
  let fixture: ComponentFixture<BaiTap2ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
