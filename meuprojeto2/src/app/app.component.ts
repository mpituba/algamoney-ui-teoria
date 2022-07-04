import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto2';
  nome = 'Marcelo';

  adicionar() {
    console.log(`Adicionando ${this.nome}`);

    //Gera um número randômico arredondado até 100
    const numero = Math.round(Math.random() * 100);
    this.nome = 'João ' + numero;
  }

  alterarNome(event: any) {
    //console.log(event);
    this.nome = event.target.value;
  }
}
