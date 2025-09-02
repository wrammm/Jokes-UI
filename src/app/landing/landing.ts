import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from '../manage/manage';
import { JokeCarousel } from '../joke-carousel/joke-carousel';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, JokeCarousel, ManageComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  showManage = false;

  toggleManage() {
    this.showManage = !this.showManage;
  }
}
