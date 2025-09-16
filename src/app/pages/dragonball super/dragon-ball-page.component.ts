import { Component, inject} from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from "../../services/drabonball.service";

interface Character {
    id:number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragon-ball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonBallSuperPageComponent {

    public dragonBallService = inject(DragonBallService);

    //name = signal('');
    //power = signal(0);

    //resetFields(){
        //this.name.set('');
        //this.power.set(0);
    //}
}