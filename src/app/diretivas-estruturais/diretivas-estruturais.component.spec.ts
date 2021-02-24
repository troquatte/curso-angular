import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEstruturaisComponent } from './diretivas-estruturais.component';

describe('DiretivasEstruturaisComponent', () => {
  let component: DiretivasEstruturaisComponent;
  let fixture: ComponentFixture<DiretivasEstruturaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasEstruturaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
