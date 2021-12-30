import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioCrearEditarPokemonComponent} from './formulario-crear-editar-pokemon.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    FormularioCrearEditarPokemonComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
  ],
  exports: [
    FormularioCrearEditarPokemonComponent
  ]
})
export class FormularioCrearEditarPokemonModule {
}
