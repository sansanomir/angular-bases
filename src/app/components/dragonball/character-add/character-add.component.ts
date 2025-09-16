import { Component, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  //output
  newCharacter = output<Character>(); 

  addCharacter(){
    console.log(this.name(), this.power());
    if(!this.name() || !this.power() || this.power() <= 0){
        return;
    }

    const newCharacter:Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power(),
    };
    
    //emitimos newCharacter
    this.newCharacter.emit(newCharacter);
    this.resetFields();
    }

    resetFields(){
        this.name.set('');
        this.power.set(0);
    }
}
