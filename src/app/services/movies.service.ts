import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of, switchMap} from "rxjs";

import {IMovie, IMovieDto, IMovieImages, IMovieVideoDto, IMovieCredits, IGenresDto} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  base: string = 'https://api.themoviedb.org/3';
  apiKey: string = '86b07c47374808ba065d994730d0f600';

  constructor(private httpClient: HttpClient) {
  }

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.httpClient.get<IMovieDto>(`${this.base}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results.slice(0, count))
      }));
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.httpClient.get<IMovieDto>(`${this.base}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results)
      }));
  }

  getMovie(id: string) {
    return this.httpClient.get<IMovie>(`${this.base}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideo(id: string) {
    return this.httpClient.get<IMovieVideoDto>(`${this.base}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results);
      }));
  }

  getMoviesGenres() {
    return this.httpClient.get<IGenresDto>(`${this.base}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.genres);
      }));
  }

  getMovieImage(id: string) {
    return this.httpClient.get<IMovieImages>(`${this.base}/movie/${id}/images?api_key=${this.apiKey}`)
  }

  getMovieCredits(id: string) {
    return this.httpClient.get<IMovieCredits>(`${this.base}/movie/${id}/credits?api_key=${this.apiKey}`)
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular'
    return this.httpClient.get<IMovieDto>(`${this.base}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results)
      }));
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.httpClient.get<IMovieDto>(`${this.base}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => {
        return of(res.results.slice(0, count))
      }));
  }

}
