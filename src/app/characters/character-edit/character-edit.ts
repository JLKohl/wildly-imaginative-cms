import { Component, OnInit, signal } from '@angular/core';
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

  character = signal<Character>({
    name: '',
    age: 0,
    eyeColor: '',
    hairColor: '',
    occupation: '',
    imageUrl: '',
    description: ''
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
  
    console.log("ID from route:", id);
  
    if (id) {
      this.characterService.getCharacter(id)
        .subscribe({
          next: (data) => {
            console.log("Character received:", data);
            this.character.set(data)
          },
          error: (err) => {
            console.error("Error loading character:", err);
          }
        });
    }
  
  }

  updateCharacter() {

    const character = this.character();
  
    if (!character._id) {
      return;
    }
  
    this.characterService
      .updateCharacter(character._id, character)
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
