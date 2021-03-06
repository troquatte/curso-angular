import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddComponent } from './food-add.component';

describe('FoodAddComponent', () => {
  let component: FoodAddComponent;
  let fixture: ComponentFixture<FoodAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
