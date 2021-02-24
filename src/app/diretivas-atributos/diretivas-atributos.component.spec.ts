import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtributosComponent } from './diretivas-atributos.component';

describe('DiretivasAtributosComponent', () => {
  let component: DiretivasAtributosComponent;
  let fixture: ComponentFixture<DiretivasAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
