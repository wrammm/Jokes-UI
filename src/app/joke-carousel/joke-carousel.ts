import { Component, inject, signal } from '@angular/core';
import { JokesService } from '../joke';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './joke-carousel.html',
  styleUrl: './joke-carousel.scss'
})
export class JokeCarousel {
  jokesService = inject(JokesService);
  jokes = this.jokesService.jokes; // assign the signal, not its value
  current = signal(0);

  constructor() {
    this.jokesService.fetchJokes();
  }

  next() {
    const jokes = this.jokes();
    this.current.update(i => Math.min(i + 1, jokes.length - 1));
  }

  prev() {
    this.current.update(i => Math.max(i - 1, 0));
  }
}
