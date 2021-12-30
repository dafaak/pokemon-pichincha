import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusquedaComponent} from './busqueda.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [BusquedaComponent]
})
export class BusquedaModule {
}
