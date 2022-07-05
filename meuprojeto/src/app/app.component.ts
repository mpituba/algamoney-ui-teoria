import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto';
  nome = 'Marcelo';
  adicionado =false;

  ultimoId=0;
  funcionarios: Funcionario[] = [];

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}

interface Funcionario {
  id: number
  nome: string
}
