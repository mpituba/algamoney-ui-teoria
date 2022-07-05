import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto';

  funcionarios: Funcionario[] = [];


  aoAdicionar(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }

}

interface Funcionario {
  id: number
  nome: string
}

