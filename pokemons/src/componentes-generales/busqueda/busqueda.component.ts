import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @Output() Busqueda: EventEmitter<Object | boolean> = new EventEmitter<Object | boolean>();
  formBusqueda: FormGroup;

  constructor() {

    this.formBusqueda = new FormGroup({
      busqueda: new FormControl('',),

    });
    this.escucharFormulario();
  }

  escucharFormulario() {
    this.formBusqueda
      .valueChanges
      .pipe(
        debounceTime(200)
      )
      .subscribe(
        valoresFormulario => {
          const esFormularioValido = this.formBusqueda.valid;
          if (!esFormularioValido) {

            this.Busqueda.emit(false);

          } else {
            this.Busqueda.emit(valoresFormulario);
          }

        }
      );
  }


}
