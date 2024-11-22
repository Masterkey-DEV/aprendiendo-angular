import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador = 0;

  aumentar() {
    this.contador++;
  }
  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}
