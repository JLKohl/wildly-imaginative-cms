import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './character-edit.html',
  styleUrl: './character-edit.css'
})
export class CharacterEdit implements OnInit {

  character: Character= {
    name: '',
    age: 0,
    eyeColor: '',
    hairColor: '',
    occupation: '',
    imageUrl: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.characterService.getCharacter(id)
        .subscribe(data => {
          this.character = data;
        });
    }

  }

  updateCharacter() {

    if (!this.character._id) {
      return;
    }
  
    this.characterService
      .updateCharacter(this.character._id, this.character)
      .subscribe({
        next: () => {
          console.log("Character updated!");
          this.router.navigate(['/characters']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  
  }

}
