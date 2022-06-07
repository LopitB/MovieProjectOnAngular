import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/pages/home/home.component";
import {MoviesComponent} from "./components/pages/movies/movies.component";
import {MovieComponent} from "./components/pages/movie/movie.component";
import {GenresComponent} from "./components/pages/genres/genres.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: '**',
    redirectTo:''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
