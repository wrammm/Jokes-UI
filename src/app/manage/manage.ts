import { Component, inject } from '@angular/core';
import { JokesService } from '../joke';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  imports: [CommonModule, FormsModule],
  templateUrl: './manage.html',
  styleUrl: './manage.scss'
})
export class ManageComponent {
  jokesService = inject(JokesService);
  newJoke = '';

  constructor() {
    this.jokesService.fetchJokes();
  }

  add() {
    if (this.newJoke.trim()) {
      this.jokesService.addJoke(this.newJoke);
      this.newJoke = '';
    }
  }

  delete(id: number) {
    this.jokesService.deleteJoke(id);
  }
}
