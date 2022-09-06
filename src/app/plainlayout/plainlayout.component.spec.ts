import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainlayoutComponent } from './plainlayout.component';

describe('PlainlayoutComponent', () => {
  let component: PlainlayoutComponent;
  let fixture: ComponentFixture<PlainlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
