import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBidingComponent } from './data-biding.component';

describe('DataBidingComponent', () => {
  let component: DataBidingComponent;
  let fixture: ComponentFixture<DataBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
