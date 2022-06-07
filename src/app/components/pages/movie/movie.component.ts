import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {MoviesService} from "../../../services/movies.service";
import {IMovie, IMovieVideo, IMovieImages, IMovieCredits} from "../../../models";
import {IMAGES_SIZES} from "../../../constants";
import {first} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy{

  movie: IMovie | null = null;
  movieVideos: IMovieVideo[];
  movieImages: IMovieImages | null = null;
  movieCredits: IMovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    })
  }

  ngOnDestroy() {

  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe(movieData => {
      this.movie = movieData;
      console.log(this.movie)
    })
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideo(id).subscribe(movieVideosData => {
      this.movieVideos = movieVideosData;
    })
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImage(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    })
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    })
  }

}
