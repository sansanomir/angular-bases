import { Injectable } from "@angular/core";
import { v4 as uuid} from 'uuid'; 
import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    }];

    addCharacter(character: Character): void {

        console.log('Charcter onNewCharacter: ' + character);

        const nwCharacter: Character = {id: uuid(), ...character}

        this.characters.push(character);
    }

    /*onDeleteCharacter(index: number): void {
        console.log('Index: ' + index);

        this.characters.splice(index,1)
        
    }*/

    deleteCharacterById(id: String){
        this.characters = this.characters.filter(character => character.id !== id);
    }
}