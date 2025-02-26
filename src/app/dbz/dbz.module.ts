import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addForm/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    ListComponent,
    AddCharacterComponent,
    FormsModule,
  ],
})

export class DbzModule { }
