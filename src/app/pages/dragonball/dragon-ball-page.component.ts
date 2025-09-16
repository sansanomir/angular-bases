import { NgClass } from "@angular/common";
import { Component,signal, computed } from "@angular/core";

interface Character {
    id:number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragon-ball-page.component.html',
})

export class DragonBallPageComponent {
    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id:1, name: 'Goku', power: 90001},
    ]); 

    powerClasses = computed(() => {
        return{
            'text-danger': true,
        };
    });

    
}