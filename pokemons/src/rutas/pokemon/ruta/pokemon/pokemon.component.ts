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

  listaPokemons: PokemonInterface[] = [];
  columnas: string[] = ['name', 'imagen', 'ataque', 'defensa', 'acciones'];

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
      },
      (error: any) => {
        console.error('Error consultando Pokemons!')
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
    // this.pokemonService.eliminarPokemon(idPokemon).subscribe({
    //     next: async (value) => {
    //       console.log('res del eliminar:', value);
    //       await this.eliminarPokemonDeLista(idPokemon);
    //       console.log(this.listaPokemons)
    //     },
    //     error: err => {
    //       console.error('Error eliminando Pokemon!')
    //     }
    //   }
    // )
  }

  eliminarPokemonDeLista(idPokemon: number) {
    const indiceEncontrado = this.listaPokemons.findIndex(pokemon => {
      return pokemon.id === idPokemon;
    });
    console.log(indiceEncontrado);
    if (indiceEncontrado >= 0) {
      this.listaPokemons.splice(indiceEncontrado, 1);
      this.tablePokemons?.renderRows();
    }
  }

}
