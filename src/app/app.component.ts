import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listCitias: any[] = [];


  agregarCita(cita: any) {
    this.listCitias.push(cita);
    console.log(this.listCitias);
  }

  eliminarCitaListado(index: number) {
    this.listCitias.splice(index, 1);
  }
}
