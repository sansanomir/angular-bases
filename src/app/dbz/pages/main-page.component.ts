import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";


@Component({
    selector: 'app-dbz-main-name',
    standalone: false,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainPageComponent {
    constructor( private dbzService : DbzService){}

    get characters(): Character[] {
        return [...this.dbzService.characters]
    }

    onDeleteCharacter(id: String):void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character){
        this.dbzService.addCharacter(character);
    }
}

