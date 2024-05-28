import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoPreguntaComponent } from './ahorcado-pregunta.component';

describe('AhorcadoPreguntaComponent', () => {
  let component: AhorcadoPreguntaComponent;
  let fixture: ComponentFixture<AhorcadoPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorcadoPreguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhorcadoPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
