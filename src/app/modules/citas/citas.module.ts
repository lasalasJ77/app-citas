import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ListCitasComponent } from './pages/list-citas/list-citas.component';
import { CreateCitaComponent } from './pages/create-cita/create-cita.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCitasComponent,
    CreateCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule
  ],
  exports : [
    ListCitasComponent,
    CreateCitaComponent
  ]
})
export class CitasModule { }
