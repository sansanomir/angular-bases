import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
   templateUrl: './counter-page.component.html',
   styles: `
        button{
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }       
   `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent{
    counter = 10;
    counterSignal = signal(10);


    constructor(){
        setInterval(() => {
            this.counterSignal.update((v) => v + 1)
            console.log('Tick')
        },2000);
    }

    increaseValue(value : number) {
        this.counter += value
        this.counterSignal.update((current) => current + value)
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}