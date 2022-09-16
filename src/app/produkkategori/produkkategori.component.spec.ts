import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukkategoriComponent } from './produkkategori.component';

describe('ProdukkategoriComponent', () => {
  let component: ProdukkategoriComponent;
  let fixture: ComponentFixture<ProdukkategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukkategoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdukkategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
