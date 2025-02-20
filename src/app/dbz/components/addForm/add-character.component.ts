import { Component, EventEmitter, Output, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    imports: [FormsModule],
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {
    
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    @Input() poder = 2

    public character: Character = {
        name: '',
        power: 0 
    };

    emitCharacter():void {
        console.log(this.character);

        if(this.character.name.length === 0) return;

        this.onNewCharacter.emit(this.character);

    }
}