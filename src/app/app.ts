import { Component, signal } from '@angular/core';
import { CharacterList } from './characters/character-list/character-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wildly-imaginative-cms');
}
