import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PokemonInterface} from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-formulario-crear-editar-pokemon',
  templateUrl: './formulario-crear-editar-pokemon.component.html',
  styleUrls: ['./formulario-crear-editar-pokemon.component.css']
})
export class FormularioCrearEditarPokemonComponent implements OnInit {
  form: FormGroup;
  disabledGuardar = true;
  @Input() pokemon!: PokemonInterface;
  @Output() pokemonCrearEditar: EventEmitter<PokemonInterface | string> = new EventEmitter<PokemonInterface | string>();

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      attack: new FormControl('', [Validators.required]),
      defense: new FormControl('', [Validators.required]),
      hp: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.escucharFormualrio();
    this.setearDatosEnForm();
  }

  setearDatosEnForm() {
    if (this.pokemon) {
      this.form.patchValue(this.pokemon);
    }
  }

  escucharFormualrio() {
    this.form.valueChanges.forEach(
      (value) => {
        if (this.form.valid) {
          this.disabledGuardar = false;
        } else {
          this.disabledGuardar = true;
        }
      }
    )
  }

  emitirGuardar() {
    this.pokemonCrearEditar.emit(this.form.value);
  }

  emitirCancelar() {
    this.pokemonCrearEditar.emit('cancelar')
  }
}
