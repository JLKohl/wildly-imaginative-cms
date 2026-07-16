import { Routes } from '@angular/router';
import { CharacterList } from './characters/character-list/character-list';
import { CharacterDetail } from './characters/character-detail/character-detail';
import { CharacterCreate } from './characters/character-create/character-create';

export const routes: Routes = [
    { 
        path: 'characters',
        component: CharacterList
    },
    {
        path: 'characters/:id',
        component: CharacterDetail
    },
    {
        path: 'characters/create',
        component: CharacterCreate
    }
];
