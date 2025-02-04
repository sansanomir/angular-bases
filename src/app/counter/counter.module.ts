import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponent,
    ],
    exports: [
        CounterComponent,
    ]
})
export class CounterModule {}