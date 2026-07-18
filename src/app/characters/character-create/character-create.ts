import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';



@Component({
  selector: 'app-character-create',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './character-create.html',
  styleUrl: './character-create.css',
})
export class CharacterCreate {

  character = {
    name: '',
    age: 0,
    eyeColor: '',
    hairColor: '',
    occupation: '',
    imageUrl: '',
    description: ''
  };

constructor(
  private characterService: CharacterService,
  private router: Router
) {}


createCharacter() {
  this.characterService.createCharacter(this.character)
    .subscribe({
      next: (data) => {
        console.log("Character created:", data);
        this.router.navigate(['/characters']);
      },
      error: (err) => {
        console.error("Create error:", err);
      }
    });
}

}

