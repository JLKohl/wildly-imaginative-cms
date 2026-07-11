import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  // ngOnInit(): void {
  //   this.characterService.getCharacters().subscribe((data: Character[]) => {
  //     this.characters = data;
  //   });
  // }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe(data => {
        console.log("Characters from API:", data);
        this.characters = data;
      });
  }

}
