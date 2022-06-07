import {Component, Input} from '@angular/core';
import {IMovie} from "../../models";

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css']
})
export class ItemsBannerComponent {
  @Input()
  movies: IMovie[];
  @Input()
  title: string = '';
}
