//angular imports
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//character model and service
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  characters = signal<Character[]>([]);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe({
        next: (data) => {
          this.characters.set(data);
        },
        error: (err) => {
          console.error("API ERROR:", err);
        }
      });
  }

}