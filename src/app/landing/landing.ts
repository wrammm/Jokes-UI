import { Component } from '@angular/core';
import { ManageComponent } from '../manage/manage';
import { JokeCarousel } from '../joke-carousel/joke-carousel';

@Component({
  selector: 'app-landing',
  imports: [JokeCarousel, ManageComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
