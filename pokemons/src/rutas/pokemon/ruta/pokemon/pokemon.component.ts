import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../servicios/pokemon.service';
import {PokemonInterface} from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  listaPokemons: PokemonInterface[] = [];

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

}
