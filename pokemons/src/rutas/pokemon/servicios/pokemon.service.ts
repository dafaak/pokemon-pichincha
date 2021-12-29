import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {shareReplay} from 'rxjs';
import {PokemonInterface} from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly httpService: HttpClient,
  ) {
  }

  getPokemons(): any {
    return this.httpService.get(environment.urlBackend + '?idAuthor=1').pipe(
      shareReplay()
    )
  }

  buscarPokemonPorId(idPokemon: number) {
    return this.httpService.get(environment.urlBackend + idPokemon).pipe(
      shareReplay()
    )
  }

  crearPokemon(pokemon: PokemonInterface) {
    return this.httpService.post(environment.urlBackend + '?idAuthor=1', {pokemon}).pipe(
      shareReplay()
    )
  }

  actualizarPokemon(idPokemon: number, pokemon: PokemonInterface) {
    return this.httpService.put(environment.urlBackend + '?id=' + idPokemon, {pokemon}).pipe(
      shareReplay()
    )
  }

  eliminarPokemon(idPokemon: number) {
    return this.httpService.delete(environment.urlBackend + idPokemon).pipe(
      shareReplay()
    )
  }


}
