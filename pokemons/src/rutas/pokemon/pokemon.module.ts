import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './ruta/pokemon/pokemon.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {FormularioCrearEditarPokemonModule} from './formularios/formulario-crear-editar-pokemon/formulario-crear-editar-pokemon.module';
import {MatButtonModule} from '@angular/material/button';
import {BusquedaModule} from '../../componentes-generales/busqueda/busqueda.module';


@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatTableModule,
    MatIconModule,
    FormularioCrearEditarPokemonModule,
    MatButtonModule,
    BusquedaModule
  ]
})
export class PokemonModule { }
