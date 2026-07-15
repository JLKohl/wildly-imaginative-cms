import { Component, signal } from '@angular/core';
import { CharacterList } from './characters/character-list/character-list';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CharacterList,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wildly-imaginative-cms');
}
