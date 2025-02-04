import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    standalone: false,
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
 
})

export class CounterComponent  {
    constructor(){

    }

    public counter: number = 10;

    increaseBy(value: number): void{
        this.counter += value;
    }

    resetCounter(): void{
        this.counter = 0;;
    }
}