import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoDibujarComponent } from './ahorcado-dibujar.component';

describe('AhorcadoDibujarComponent', () => {
  let component: AhorcadoDibujarComponent;
  let fixture: ComponentFixture<AhorcadoDibujarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorcadoDibujarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhorcadoDibujarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
