import {Component, OnInit} from '@angular/core';

import {IGenreG} from "../../../models";
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenreG[];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe(genresData => {
      this.genres = genresData;
    });
  }

}
