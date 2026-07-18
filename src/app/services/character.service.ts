import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacter(id: string): Observable<Character> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.apiUrl, character);
  }

  updateCharacter(id: string, character: Character): Observable<Character> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Character>(url, character);
  }

}