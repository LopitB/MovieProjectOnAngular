import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PaginatorModule} from "primeng/paginator";
import {TabViewModule} from "primeng/tabview";
import {ImageModule} from "primeng/image";
import {CarouselModule} from "primeng/carousel";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/pages/home/home.component';
import {MoviesComponent} from './components/pages/movies/movies.component';
import {AppRoutingModule} from "./app-routing.module";
import {SliderComponent} from './components/slider/slider.component';
import {ItemsBannerComponent} from "./components/items-banner/items-banner.component";
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {MovieComponent} from './components/pages/movie/movie.component';
import {VideoEmbedComponent} from './components/video-embed/video-embed.component';
import {GenresComponent} from './components/pages/genres/genres.component';
import {GenreComponent} from './components/pages/genre/genre.component';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenresComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
