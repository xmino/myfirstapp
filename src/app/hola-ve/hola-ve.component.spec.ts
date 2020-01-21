import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaVeComponent } from './hola-ve.component';

describe('HolaVeComponent', () => {
  let component: HolaVeComponent;
  let fixture: ComponentFixture<HolaVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
