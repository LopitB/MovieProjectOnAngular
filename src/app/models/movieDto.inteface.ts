import {IMovie} from "./movie.inteface";

export interface IMovieDto{
  page: number,
  results: IMovie[],
  total_results:number,
  total_pages:number
}
