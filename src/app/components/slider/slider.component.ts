import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

import {IMovie} from "../../models";
import {IMAGES_SIZES} from "../../constants";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void<=>*', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input()
  movies: IMovie[];
  @Input()
  isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.movies.length;
      }, 5000)
    }
  }
}
