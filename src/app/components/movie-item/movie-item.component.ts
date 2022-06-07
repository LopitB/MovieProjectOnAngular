import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../models";
import {IMAGES_SIZES} from "../../constants";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input()
  itemData: IMovie | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor() {
  }

  ngOnInit(): void {
  }

}
