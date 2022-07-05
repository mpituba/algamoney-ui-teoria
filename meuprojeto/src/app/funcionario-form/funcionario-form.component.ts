import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  nome = 'Marcelo';
  adicionado =false;
  ultimoId=0;
  @Output() funcionarioAdicionado = new EventEmitter();


  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    /*Emite funcionário que é recebido no event bind da tag
    * <app-funcionario-form> em app.component.html     */
    this.funcionarioAdicionado.emit(funcionario);

  }

}
