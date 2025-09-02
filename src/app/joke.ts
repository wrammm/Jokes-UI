import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Joke {
  id: number;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class JokesService {
  private http = inject(HttpClient);
  private _jokes = signal<Joke[]>([]);

  readonly jokes = this._jokes.asReadonly();

  readonly endpoint = 'https://express-practice-5brx.onrender.com/jokes';

  fetchJokes() {
    this.http.get<Joke[]>(this.endpoint).subscribe(data => this._jokes.set(data));
  }

  addJoke(joke: string) {
    this.http.post<Joke>(this.endpoint, { text: joke }).subscribe(newJoke => {
      this._jokes.update(jokes => [...jokes, newJoke]);
    });
  }

  deleteJoke(id: number) {
    this.http.delete(`${this.endpoint}/${id}`).subscribe(() => {
      this._jokes.update(jokes => jokes.filter(j => j.id !== id));
    });
  }
}
