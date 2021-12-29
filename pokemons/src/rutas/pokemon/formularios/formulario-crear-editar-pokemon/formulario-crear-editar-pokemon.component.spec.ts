import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearEditarPokemonComponent } from './formulario-crear-editar-pokemon.component';

describe('FormularioCrearEditarPokemonComponent', () => {
  let component: FormularioCrearEditarPokemonComponent;
  let fixture: ComponentFixture<FormularioCrearEditarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearEditarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearEditarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
