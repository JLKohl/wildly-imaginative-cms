//import angular core and router
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//character model and service
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {

  character = signal<Character | null>(null);

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.characterService.getCharacter(id)
        .subscribe(data => {
          this.character.set(data);
        });
    }
  }


}
