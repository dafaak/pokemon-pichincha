import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./../rutas/pokemon/pokemon.module').then(modulo => modulo.PokemonModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
