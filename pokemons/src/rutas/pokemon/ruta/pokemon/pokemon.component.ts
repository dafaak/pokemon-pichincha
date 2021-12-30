import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../../servicios/pokemon.service';
import {PokemonInterface} from '../../interfaces/pokemon.interface';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @ViewChild(MatTable) tablePokemons: MatTable<PokemonInterface> | undefined;
  listaPokemonsFiltrado: PokemonInterface[] = [];
  listaPokemons: PokemonInterface[] = [];
  columnas: string[] = ['name', 'imagen', 'ataque', 'defensa', 'acciones'];
  mostrarForm = false;
  pokemonAEditar: PokemonInterface = {};
  crear = false;

  constructor(
    private readonly pokemonService: PokemonService,
  ) {
  }

  ngOnInit(): void {
    this.consultarPokemons();
  }

  consultarPokemons() {
    this.pokemonService.getPokemons().subscribe(
      (res: PokemonInterface[]) => {
        this.listaPokemons = res;
        this.listaPokemonsFiltrado = res;
      },
      (error: any) => {
        console.error('Error consultando Pokemons!')
      }
    )
  }

  buscar(event: any) {
    this.listaPokemonsFiltrado = this.listaPokemons.filter(
      (pokemon) => {
        return pokemon.name?.toLowerCase().includes(event.busqueda)
      }
    )
  }

  eliminarPokemon(idPokemon: number) {
    this.pokemonService.eliminarPokemon(idPokemon).subscribe({
        next: async (res) => {
          console.log('res del eliminar:', res);
          await this.eliminarPokemonDeLista(idPokemon);
          console.log(this.listaPokemons)
        },
        error: err => {
          console.error('Error eliminando Pokemon!')
        }
      }
    )
  }

  mostrarFormCrear() {
    this.mostrarForm = true;
    this.crear = true;
    this.pokemonAEditar = {};
  }

  mostrarFormEditar(pokemon: PokemonInterface) {
    this.mostrarForm = true;
    this.crear = false;
    this.pokemonAEditar = pokemon;
  }

  recibirDatosForm(event: any) {
    if (event === 'cancelar') {
      this.mostrarForm = false;
      this.crear = false;
      this.pokemonAEditar = {};
    }
    if (typeof event === 'object') {
      this.guardarDatos(event);
    }
  }

  guardarDatos(pokemon: PokemonInterface) {
    console.log('crear:', this.crear, this.mostrarForm, this.pokemonAEditar, pokemon);
    if (this.crear) {
      pokemon.idAuthor = 1;
      this.pokemonService.crearPokemon(pokemon).subscribe(
        {
          next: value => {
            console.log(value);
            this.agregarPokemonALista(value);
            this.mostrarForm = false;
            this.crear = false;
          },
          error: err => {
            console.error('Error creando Pokemon!')
          }
        }
      );
    } else {
      if (this.pokemonAEditar.id) {
        const idPokemonEditar = this.pokemonAEditar.id;
        this.pokemonService.actualizarPokemon(this.pokemonAEditar.id, pokemon).subscribe(
          {
            next: value => {
              this.actualizarPokemonDeLista(idPokemonEditar, value)
              this.mostrarForm = false;
              this.pokemonAEditar = {};
            },
            error: err => {
              console.error('Error actualizando Pokemon!', err);
            }
          }
        );
      }
    }

  }

  agregarPokemonALista(pokemon: PokemonInterface) {
    this.listaPokemonsFiltrado.unshift(pokemon);
    this.listaPokemons.unshift(pokemon);
    this.tablePokemons?.renderRows();
  }

  eliminarPokemonDeLista(idPokemon: number) {
    const indiceEncontrado = this.listaPokemons.findIndex(pokemon => {
      return pokemon.id === idPokemon;
    });
    const indiceEncontradoListaFiltrados = this.listaPokemonsFiltrado.findIndex(pokemon => {
      return pokemon.id === idPokemon;
    });
    if (indiceEncontrado >= 0) {
      this.listaPokemons.splice(indiceEncontrado, 1);
    }
    if (indiceEncontradoListaFiltrados >= 0) {
      this.listaPokemonsFiltrado.splice(indiceEncontradoListaFiltrados, 1);
      this.tablePokemons?.renderRows();
    }

  }

  actualizarPokemonDeLista(idPokemon: number, pokemon: PokemonInterface) {
    const indiceEncontrado = this.listaPokemons.findIndex(pokemon => {
      return pokemon.id === idPokemon;
    });
    const indiceEncontradoListaFiltrados = this.listaPokemonsFiltrado.findIndex(pokemon => {
      return pokemon.id === idPokemon;
    });
    if (indiceEncontrado >= 0) {
      this.listaPokemons[indiceEncontrado] = pokemon;
    }
    if (indiceEncontradoListaFiltrados >= 0) {
      this.listaPokemonsFiltrado[indiceEncontradoListaFiltrados] = pokemon;
      this.tablePokemons?.renderRows();
    }
  }

}
