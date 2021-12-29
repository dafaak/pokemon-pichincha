import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioCrearEditarPokemonComponent} from './formulario-crear-editar-pokemon.component';


@NgModule({
  declarations: [
    FormularioCrearEditarPokemonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioCrearEditarPokemonComponent
  ]
})
export class FormularioCrearEditarPokemonModule {
}
