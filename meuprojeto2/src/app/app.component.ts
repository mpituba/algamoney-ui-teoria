import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto2';
  nome = 'Marcelo';
  idade = 35;

  getIdade() {
    return this.idade;
  }
}
